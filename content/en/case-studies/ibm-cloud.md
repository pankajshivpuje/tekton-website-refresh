---
title: IBM Cloud Continuous Delivery
description: "How IBM uses Tekton to power its multi-tenant Continuous Delivery service on IBM Cloud."
---

## Challenge

IBM Cloud's Continuous Delivery service needed to move from a proprietary pipeline engine to a Kubernetes-native solution that could support thousands of tenants, each running isolated CI/CD workloads. The existing system was difficult to extend, didn't leverage Kubernetes scheduling, and required significant engineering effort for each new integration.

## Solution

IBM adopted Tekton as the core pipeline engine for its Continuous Delivery service. Tekton's Kubernetes-native design aligned with IBM's infrastructure strategy, and its CRD-based model made multi-tenant isolation straightforward using Kubernetes namespaces and RBAC.

### Key Components Used

| Component | How IBM Uses It |
|-----------|----------------|
| **Pipelines** | Core execution engine for all customer CI/CD workloads |
| **Triggers** | Event processing for Git webhooks and external integrations |
| **Catalog** | Curated library of IBM-supported Tasks for common build patterns |
| **Chains** | Supply chain security for enterprise compliance requirements |

### Architecture Highlights

- **Multi-tenant isolation** — Each customer's pipelines run in dedicated namespaces with strict RBAC boundaries
- **Managed control plane** — IBM operates the Tekton control plane; customers only interact with pipeline definitions
- **Catalog of curated Tasks** — Pre-built, IBM-supported Tasks for Docker builds, Kubernetes deployments, Vulnerability Advisor scans, and more
- **Scalability** — Kubernetes-native scaling handles burst workloads without dedicated capacity planning

## Results

- **Thousands of tenants** served from a shared Tekton-based platform
- **Reduced engineering effort** — New integrations ship as Catalog Tasks instead of engine changes
- **Kubernetes-native operations** — Standard tooling (kubectl, monitoring, RBAC) works for the CI/CD layer
- **Compliance ready** — Tekton Chains provides the artifact signing and provenance that enterprise customers require

> "Tekton gives us a pipeline engine that scales with Kubernetes and lets our customers define workflows using the same tools they already know."
> — **IBM Cloud Continuous Delivery Team**
