---
id: introduction
title: Introduction
---

**VKPR** (Vertigo Kubernetes Production Runtime) is inspired in the [BKPR project](https://github.com/bitnami/kube-prod-runtime) but it's handed over through Helm chart.

## Description

**VKPR** was developed to make Kubernetes easier to use. It is composed of third-party sets, organized to deliver a production-ready Kubernetes with minimal effort.

## Installation

The VKPR installation uses [helm](https://helm.sh/):

```sh
helm repo add vertigo https://charts.vertigo.com.br
helm repo update
helm upgrade -i -f values.yaml -n vkpr vkpr vertigo/vkpr
```

## Stacks

The project is structured in stacks that group products with correlative objective.

### Ingress stack
  
The **Ingress stack** is dedicated to tools that configure external connections to Kubernetes.

- [NGINX Ingress Controller](/docs/stacks#nginx-ingress-controller) is a Kubernetes Ingress Controller using NGINX as a reverse proxy and load balancer.
- [ExternalDNS](/docs/stacks#externaldns) is a Kubernetes addon that configures public DNS servers with information about services exposed by Kubernetes and making them discoverable.

### Logging stack

The **Logging Stack** is dedicated to distributed logs management tools.

- [Loki](/docs/stacks#loki) is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus.

### Monitoring stack

The **Monitoring Stack** is dedicated to observation and metrics management tools either for your services, applications or the Kubernetes Cluster.

- [Prometheus Operator](/docs/stacks#prometheus-operator) provides Kubernetes native deployment and management of Prometheus and related monitoring components. Prometheus Operator contains the following modules:
  - [Grafana](https://grafana.com/oss/grafana/) allows you to query, visualize and alert on metrics and logs no matter where they are stored.
  - [Prometheus](https://grafana.com/oss/prometheus/) monitoring system includes a rich, multidimensional data model, a concise and powerful query language called PromQL, an efficient embedded timeseries database, and over 150 integrations with third-party systems.
  - [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) handles alerts sent by client applications such as the Prometheus server.

### Security stack

The **Security Stack** is dedicated to security tools, like identity and secret management, to your services.

- [cert-manager](/docs/stacks#cert-manager) is a Kubernetes addon to automate the management and issuance of TLS certificates from various issuing sources.
- [Vault](/docs/stacks#vault) secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. 
- [Keycloak](/docs/stacks#keycloak) is an Open Source Identity and Access Management solution for modern Applications and Services.

### Backup stack

The **Backup Stack** is dedicated to backup and restore tools in order to migrate Kubernetes cluster's resources and persistent volumes.

- [Velero](/docs/stacks#velero) is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes.

## Charts version

|                              Charts                               | VKPR 0.7.0 |
|-------------------------------------------------------------------|------------|
| [cert-manager](/docs/stacks#cert-manager)                         |  `0.16.0`  |
| [ExternalDNS](/docs/stacks#externaldns)                           |  `3.2.2`   |
| [Loki](/docs/stacks#loki)                                         |  `0.37.0`  |
| [Keycloak](/docs/stacks#keycloak)                                 |  `8.2.2`   |
| [NGINX Ingress Controller](/docs/stacks#nginx-ingress-controller) |  `1.34.3`  |
| [Prometheus Operator](/docs/stacks#prometheus-operator)           |  `8.12.3`  |
| [Vault](/docs/stacks#vault)                                       |  `0.5.0`   |
| [Velero](/docs/stacks#velero)                                     |  `2.7.4`   |

## Requisites

- Kubernetes >= 1.15
- Helm >= 3

## Contributing

Pull requests/Merge Requests are welcome! Please open an issue first and discuss with us about the proposing changes and be sure to perform tests in a proper way.

## Support

The support will be made by opening *Issues*. 
For corporate support, contact us.

## License

VKPR is licensed under the [Apache License Version 2.0](https://github.com/vertigobr/vkpr/blob/master/LICENSE).
