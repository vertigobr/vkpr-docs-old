---
id: vault-with-keycloak
title: Vault authentication with KeyCloak
---

This guide shows the Vault with KeyCloak authentication in local k3d environment and some tools are prerequisites for run:

- [k3d](https://k3d.io/) >= 3.3.0
- [Helm](https://helm.sh/docs/intro/install/#helm) >= 3.0.0

## Installation and setup VKPR

The installation and configuration in this guide can be done in two ways, via [makefile](#makefile-mode) or [manual](#manual-mode). You will need to create two configuration files in this guide the [values file](https://github.com/vertigobr/vkpr/blob/master/examples/local/values-local-vault-http.yaml) for VKPR and [realm file](https://github.com/vertigobr/vkpr/blob/master/examples/keycloak/realm.json) to KeyCloak.

### Makefile mode

:::info
In this way the installation of the makefile is required.
:::

Makefile used in this guide (update the `VALUES_FILE` or `REALM_FILE` values):

```makefile title="makefile"
# Create a local k3d cluster
k3d_create:
	k3d cluster create vkpr-local -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" --k3s-server-arg "--no-deploy=traefik"

# Create a local k3d cluster
k3d_delete:
	k3d cluster delete vkpr-local

# Setup VKPR repository in Helm
setup_vkpr:
	helm repo add vertigo https://charts.vertigo.com.br
	helm repo update

# Installation and setup VKPR
install_vkpr:
	@echo "KUBECONFIG=$(KUBECONFIG)"
	kubectl create secret generic vkpr-realm-secret --from-file=<REALM_FILE>
	helm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr

# Add hosts
add_hosts:
	echo "Detecting LoadBalancer external IP"
	export LB_IP=""; \
	while [ -z "$${LB_IP}" ]; do \
		export LB_IP=$$(kubectl get svc vkpr-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[*].ip}"); \
		if [ -z "$${LB_IP}" ]; then \
			echo "Waiting for LoadBalancer external IP..."; \
			sleep 3; \
		else \
			echo "LoadBalancer external IP: $${LB_IP}"; \
			echo "Hacking into /etc/hosts, gonna need sudo, please."; \
			if grep -q "vkpr-keycloak-http" /etc/hosts; then \
				sudo sed "s/.*vkpr-keycloak-http.*/$${LB_IP} whoami.localdomain vkpr-vault.default.svc vkpr-keycloak-http.default.svc/g" -i /etc/hosts; \
			else \
				sudo sh -c "echo '$${LB_IP} whoami.localdomain vkpr-vault.default.svc vkpr-keycloak-http.default.svc' >> /etc/hosts"; \
			fi; \
		fi; \
	done

# Vault init
vault_init:
	kubectl exec vkpr-vault-0 -- vault operator init -key-shares=1 -key-threshold=1 -format=json > init-keys.json
	kubectl exec vkpr-vault-0 -- vault operator unseal $$(cat init-keys.json | jq -r ".unseal_keys_b64[]")

# Vault setup
VAULT_ADDR := http://vkpr-vault.default.svc
vault_setup:
	vault login $$(cat init-keys.json | jq -r ".root_token")
	echo 'path "/secret/*" { capabilities = ["read", "list"] }' | vault policy write reader -
	vault auth enable oidc
	vault write auth/oidc/config \
		oidc_discovery_url="http://vkpr-keycloak-http.default.svc/auth/realms/vkpr" \
		oidc_client_id="oidc-demo" \
		oidc_client_secret="60e50da1-b492-4995-9574-763fa285456c" \
		default_role="reader"
	vault write auth/oidc/role/reader \
		bound_audiences="oidc-demo" \
		allowed_redirect_uris="http://vkpr-vault.default.svc/ui/vault/auth/oidc/oidc/callback" \
		allowed_redirect_uris="http://localhost:8250/oidc/callback" \
		user_claim="sub" policies="reader"
```

Before installing VKPR need to create a local cluster with k3d, run:

```shell
make k3d_create
```

To configure VKPR in Helm, run:

```shell
make setup_vkpr
```

To install VKPR, run:

```shell
make install_vkpr
```

To access Vault and KeyCloak it is necessary to add some custom domains to `/etc/hosts`, execute:

```shell
make add_hosts
```

To configure the vault, run:

```shell
make vault_init

make vault_setup
```

Finally the guide go to the [next section](#access-vault-and-keycloak) to see the credentials of Vault and KeyCloak.

### Manual mode

To start you need to create a local k3d cluster, you need to run:

```shell
k3d cluster create vkpr-local \
  -p "8080:80@loadbalancer" \
  -p "8443:443@loadbalancer" \
  --k3s-server-arg "--no-deploy=traefik"
```

K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller.

Before installation Helm needs to know the VKPR repository, run:

```shell
# Add repo chart
helm repo add vertigo https://charts.vertigo.com.br

# Update repo
helm repo update
```

Then install and configure VKPR running (update the `VALUES_FILE` or `REALM_FILE` values):

```shell
# Create secret
kubectl create secret generic vkpr-realm-secret --from-file=<REALM_FILE>

# Install VKPR
helm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr
```

To access Vault and KeyCloak it is necessary to add some custom domains to `/etc/hosts`. First get the external ip of nginx and then edit the hosts file (update `LOAD_BALANCER_IP` value), run:

```shell
# Get external ip from nginx
kubectl get service vkpr-ingress-nginx-controller

# Edit hosts file
sudo sh -c "echo '<LOAD_BALANCER_IP> whoami.localdomain vkpr-vault.default.svc vkpr-keycloak-http.default.svc' >> /etc/hosts"
```

Basic configuration is required for the vault to work, run:

```shell
# Vault init
kubectl exec vkpr-vault-0 -- vault operator init -key-shares=1 -key-threshold=1 -format=json > init-keys.json

# Vault unseal
kubectl exec vkpr-vault-0 -- vault operator unseal $$(cat init-keys.json | jq -r ".unseal_keys_b64[]")
```

Then it is necessary to configure the Vault oidc with KeyCloak, run:

```shell
vault login $$(cat init-keys.json | jq -r ".root_token")

echo 'path "/secret/*" { capabilities = ["read", "list"] }' | vault policy write reader -

vault auth enable oidc

vault write auth/oidc/config \
	oidc_discovery_url="http://vkpr-keycloak-http.default.svc/auth/realms/vkpr" \
	oidc_client_id="oidc-demo" \
	oidc_client_secret="60e50da1-b492-4995-9574-763fa285456c" \
	default_role="reader"

vault write auth/oidc/role/reader \
	bound_audiences="oidc-demo" \
	allowed_redirect_uris="http://vkpr-vault.default.svc/ui/vault/auth/oidc/oidc/callback" \
	allowed_redirect_uris="http://localhost:8250/oidc/callback" \
	user_claim="sub" policies="reader"
```

Finally the guide go to the [next section](#access-vault-and-keycloak) to see the credentials of Vault and KeyCloak.

## Access Vault and KeyCloak 

To access the Vault with KeyCloak authentication use the following credentials:

```yaml
url: http://vkpr-vault.default.svc
username: user
password: password
```

To access the KeyCloak administration console, use:

```yaml
url: http://vkpr-keycloak-http.default.svc
username: admin
password: vkpr1234
```

## Destroy cluster

After finishing the guide, destroy cluster k3d running:

```shell
# Makefile mode
make k3d_delete

# Manual mode
k3d cluster delete vkpr-local
```
