---
id: developer
title: Developer Guide
sidebar_label: Developer
---

:::caution
This section is a work in progress.
:::

This guide explains how to set up an environment for development of the chart VKPR and some tools are prerequisites:

- [k3d](https://k3d.io/) >= 3.3.0
- [Helm](https://helm.sh/docs/intro/install/#helm) >= 3.0.0

## Clone project

To start you need to clone project, you need to run:

```shell
git clone https://github.com/vertigobr/vkpr.git
```

## Local cluster with k3d

Then for local development it is necessary to create a cluster for the tests, we recommend k3d, run:

```shell
k3d cluster create vkpr-local \
  -p "8080:80@loadbalancer" \
  -p "8443:443@loadbalancer" \
  --k3s-server-arg "--no-deploy=traefik"
```

K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller.

After creating the cluster setting the KUBECONFIG:

```shell
export KUBECONFIG=$(k3d kubeconfig write vkpr-local)
kubectl cluster-info 
```

## Local VKPR deployment

### Get chart dependencies

```sh
helm dependency update ./charts/vkpr
```

### Install VKPR

Then install and configure VKPR running (update the `VALUES_FILE` values):

```sh
helm upgrade -i vkpr --skip-crds -f <VALUES_FILE> ./charts/vkpr
```

To access services it is necessary to add some custom domains to `/etc/hosts`. First get the external ip of nginx and then edit the hosts file (update `LOAD_BALANCER_IP` value), run:

```sh
# Get external ip from nginx
kubectl get service vkpr-ingress-nginx-controller

# Edit hosts file
sudo sh -c "echo '<LOAD_BALANCER_IP> whoami.localdomain vkpr-grafana.default.svc vkpr-jaeger.default.svc vkpr-vault.default.svc vkpr-keycloak-http.default.svc' >> /etc/hosts"
```

### Testing local Whoami app

To access in browser:

```yaml
url: http://whoami.localdomain
```
