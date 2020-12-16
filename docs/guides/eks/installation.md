---
id: installation
title: VKPR installation on Amazon EKS
sidebar_label: Installation
---

:::caution
This section is a work in progress.
:::

This document walks you through a VKPR installation on [Amazon EKS](https://aws.amazon.com/eks/). The following links guide you to the installation on others clouds: [Digital Ocean](/docs/digital-ocean/installation), GKE.

## Installation and setup VKPR

### Step 1: Set up values

In this section, we are going to prepare a values file to deploy VKPR in the Cluster. A values file example can be found [here](https://github.com/vertigobr/vkpr/tree/master/examples/values-aws.yaml).

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
helm install -f examples/values-aws.yaml -n vkpr vkpr vertigo/vkpr
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

## Velero set up

### Prerequisites
Before proceding to the installation, check the [Prerequisites](https://velero.io/docs/main/basic-install/) to get Velero on your EKS cluster. After that you will have what is needed to put into the values-aws.yaml

### Values variables to be set (values-aws.yaml):

`<REGION>` Your bucket's region.

`<BUCKET_NAME>`  Your bucket's name.

`<ACCESS_KEY_ID>`  The Access Key ID created in the prerequisites step to the VELERO_USER.

`<SECRET_KEY_ID>` The Secret Key ID of that Access Key.

### Installation
Using Helm Hub's Velero chart v2.7.4

```
helm upgrade -i vkpr -n vkpr -f examples/values-aws.yaml stable/vkpr  
```

Export the KUBECONFIG environment variable in order to point Velero cli to your EKS cluster and run the following command to set the namespace where Velero is installed. 

    
    velero client config set namespace=vkpr