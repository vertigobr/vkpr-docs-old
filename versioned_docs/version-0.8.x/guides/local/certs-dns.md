---
id: certs-dns
title: Whoami app with real DNS
---

This guide shows the Whoami app with real DNS managed by Digital Ocean in local k3d environment and some tools are prerequisites for run:

- [k3d](https://k3d.io/) >= 3.3.0
- [Helm](https://helm.sh/docs/intro/install/#helm) >= 3.0.0

## Installation and setup VKPR

The installation and configuration in this guide can be done in two ways, via [makefile](#makefile-mode) or [manual](#manual-mode). You will need to create configuration files in this guide the [values file](https://github.com/vertigobr/vkpr/blob/master/examples/local/values-local-certs-dns.yaml) for VKPR and settings [ACME](https://github.com/vertigobr/vkpr/blob/master/examples/local/acme.yaml).

:::note
In values file, you must add the domain in ingress settings.
:::

### Makefile mode

:::info
In this way the installation of the makefile is required.
:::

Makefile used in this guide (update the `VALUES_FILE` or `DO_TOKEN` values):

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
	helm upgrade -i --set external-dns.digitalocean.apiToken=<DO_TOKEN> -f <VALUES_FILE> vkpr vertigo/vkpr
	kubectl apply -f ./acme.yaml
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

Finally the guide go to the [next section](#access-whoami-app) to see the Whoami app access.

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

Then install and configure VKPR running (update the `VALUES_FILE` or `DO_TOKEN` values):

```shell
# Install VKPR
helm upgrade -i --set external-dns.digitalocean.apiToken=<DO_TOKEN> -f <VALUES_FILE>

# Acme config
kubectl apply -f ./acme.yaml
```

Finally the guide go to the [next section](#access-whoami-app) to see the Whoami app access.

## Access Whoami app

To access the Whoami application, you must first get the external ip of the cluster:

```shell
kubectl get service vkpr-ingress-nginx-controller
```

Now run (update the `EXTERNAL-IP` or `DOMAIN` values):

```shell
curl -k -H "Host: <DOMAIN>" https://<EXTERNAL-IP>
```

## Destroy cluster

After finishing the guide, destroy cluster k3d running:

```shell
# Makefile mode
make k3d_delete

# Manual mode
k3d cluster delete vkpr-local
```
