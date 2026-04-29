---
title: Enterprise CI/CD
description: "Run Tekton at scale with compliance controls, role-based access, and multi-cluster orchestration."
---

## The Problem

Enterprise teams need CI/CD that satisfies compliance requirements, supports dozens of teams with different workflows, and scales across clusters — without becoming a bottleneck for platform engineers.

## Why Tekton

Tekton runs as Kubernetes-native custom resources, which means your existing RBAC, network policies, and audit logging apply directly to your CI/CD pipelines. There's no separate permission model to maintain.

### Key Components

| Component | Role |
|-----------|------|
| **Pipelines** | Core engine — each team defines their own Tasks and Pipelines in their namespace |
| **Triggers** | Event-driven automation — route webhooks to the right namespace and pipeline |
| **Chains** | Compliance — automatic SLSA provenance and artifact signing on every build |
| **Operator** | Lifecycle — install, upgrade, and configure Tekton across clusters via CRDs |
| **Results** | Audit trail — long-term storage of all pipeline run data beyond etcd retention |
| **Pruner** | Hygiene — automated cleanup of old runs to keep clusters healthy |

### Architecture Pattern

```
┌─────────────────────────────────────────────────┐
│  Git Repositories (per team)                    │
└──────────────────┬──────────────────────────────┘
                   │ webhooks
┌──────────────────▼──────────────────────────────┐
│  Tekton Triggers (EventListeners per namespace) │
└──────────────────┬──────────────────────────────┘
                   │ creates PipelineRuns
┌──────────────────▼──────────────────────────────┐
│  Tekton Pipelines (namespaced per team)         │
│  ├── Build & Test                               │
│  ├── Security Scan                              │
│  └── Deploy (to staging/production)             │
└──────────────────┬──────────────────────────────┘
                   │ signs & attests
┌──────────────────▼──────────────────────────────┐
│  Tekton Chains (cluster-wide)                   │
│  └── SLSA Provenance → OCI Registry            │
└─────────────────────────────────────────────────┘
```

### Multi-Cluster Strategy

- **Operator** installs a consistent Tekton version across all clusters
- **Results** aggregates run data from multiple clusters into a single API
- Kubernetes **RBAC** isolates teams — each namespace gets its own pipelines, secrets, and service accounts

## Getting Started

1. Install Tekton with the [Operator](/docs/Operator/) for declarative lifecycle management
2. Set up [Triggers](/docs/Triggers/) with per-namespace EventListeners
3. Enable [Chains](/docs/Chains/) for automatic provenance generation
4. Configure [Results](/docs/Results/) for centralized run data
5. Schedule [Pruner](/docs/Pruner/) to keep clusters clean

{{< callout type="info" >}}
See [Red Hat OpenShift Pipelines](/case-studies/openshift-pipelines/) for how Red Hat delivers Tekton at enterprise scale.
{{< /callout >}}

{{< callout >}}
See all Tekton components and how they fit together on the [Components](/components/) page.
{{< /callout >}}
