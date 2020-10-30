---
id: quickstart
title: Quickstart
---

This document walks you through a default VKPR installation. The following links guide you to the installation on specific clouds: [EKS](/docs/eks/installation), Digital Ocean, GKE.

## Installation and setup VKPR

### Step 1: Set up values

In this section, we are going to prepare a values file to deploy VKPR in the Cluster. A values file example can be found [here](https://github.com/vertigobr/vkpr/tree/master/examples).

All sub-charts specified into [Chart.yaml](https://github.com/vertigobr/vkpr/blob/master/charts/vkpr/Chart.yaml) can be enabled/disabled in values with the following key `enabled`:

```yaml
nginx-ingress:
  enabled: true
```

The charts: [NGINX Ingress Controller](/docs/stacks#nginx-ingress-controller), [Loki](/docs/stacks#loki) and [Prometheus Operator](/docs/stacks#prometheus-operator) are enabled by default.

An example of the implementation of each sub-chart can be found in the [stack documentation](/docs/stacks).

### Step 2: Deploy VKPR

With the values file concluded, let's deploy it.

First, add helm repository:
```sh
helm repo add vertigo https://charts.vertigo.com.br
helm repo update
```

Then, deploy VKPR:
```sh
helm install -f values.yaml -n vkpr vkpr vertigo/vkpr
```

## Upgrading VKPR

In order to upgrade the VKPR in the cluster, update the values file and apply:
```sh
helm upgrade -i -f values.yaml -n vkpr vkpr vertigo/vkpr
```

## Cleanup VKPR

To remove VKPR in a cluster, execute:
```sh
helm uninstall vkpr
```
