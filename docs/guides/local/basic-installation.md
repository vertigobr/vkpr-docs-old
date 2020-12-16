---
id: basic-installation
title: Basic installation
---

This guide shows the VKPR basic installation in local k3d environment and some tools are prerequisites for run:

- [k3d](https://k3d.io/) >= 3.3.0
- [Helm](https://helm.sh/docs/intro/install/#helm) >= 3.0.0

## Installation and setup VKPR

### Create cluster

In the first part of the guide we will create a local Kubernetes cluster with k3d, run:

```shell
k3d cluster create vkpr-local -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" --k3s-server-arg "--no-deploy=traefik"
```

K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller.

### Setup Helm

Before installation Helm needs to know the VKPR repository, run:

```shell
# Add repo chart
helm repo add vertigo https://charts.vertigo.com.br

# Update repo
helm repo update
```

### Installation VKPR

For installation of VKPR need a values file. The values file below sets the installation of VKPR for just the NGNIX and app whoami. If you want to implement your installation there other guides in this section.

```yaml title=values.yaml
ingress-nginx:
  enabled: true

ingress:
  enabled: true
  annotations:
    ingress.kubernetes.io/ssl-redirect: "false"
  hosts:
  - host: whoami.localdomain
    paths: ["/"]
```

To install VKPR run:

```shell
helm upgrade -i -f values.yaml vkpr vertigo/vkpr
```

### Access whoami app

VKPR has a simple application to validate the installation. The application whoami prints operating system information and the HTTP request. To access the application, you must first obtain the external NGINX IP and add it to a domain in `/etc/hosts` (update `LOAD_BALANCER_IP` value), run:

```shell
# Get external ip from nginx
kubectl get service vkpr-ingress-nginx-controller

# Edit hosts file
sudo sh -c "echo '<LOAD_BALANCER_IP> whoami.localdomain' >> /etc/hosts"
```

Then go to the browser the `http://whoami.localdomain`.

## Destroy environment

After completing the tests you can uninstall VKPR and destroy the local Kubernetes cluster.

### Uninstall VKPR

To uninstall VKPR run:

```shell
helm uninstall vkpr
```

### Destroy cluster

To destroy the local cluster run:

```shell
k3d cluster delete vkpr-local
```
