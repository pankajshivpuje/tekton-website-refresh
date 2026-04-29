---
title: Platform Engineering
description: "Build an Internal Developer Platform with Tekton as the programmable CI/CD engine."
---

## The Problem

Platform engineering teams need to provide developers with self-service CI/CD that enforces organizational standards — security scanning, compliance checks, approved base images — without requiring every team to build pipelines from scratch.

## Why Tekton

Tekton's modular architecture is designed to be embedded. Platform teams build reusable Tasks in the [Hub/Catalog](/docs/Catalog/), compose them into golden-path Pipelines, and expose them through Triggers or Pipelines-as-Code. Developers get a paved road; platform teams get control.

### Key Components

| Component | Role |
|-----------|------|
| **Pipelines** | Foundation — the programmable API that platform teams build on |
| **Hub / Catalog** | Reuse — curate and share approved Tasks across the organization |
| **Triggers** | Self-service — developers trigger pipelines via webhooks without cluster access |
| **Pipelines-as-Code** | Developer experience — teams define pipelines in their repos |
| **Operator** | Consistency — deploy the same Tekton version and config across all clusters |
| **Dashboard** | Visibility — give developers a UI to monitor their pipeline runs |
| **Chains** | Guardrails — enforce signing and provenance without developer involvement |

### Platform Architecture

```
┌─────────────────────────────────────────────────┐
│              Internal Developer Portal          │
│         (Backstage, Port, custom UI)            │
└──────────────────┬──────────────────────────────┘
                   │ triggers pipelines
┌──────────────────▼──────────────────────────────┐
│  Tekton Platform Layer                          │
│  ├── Golden-path Pipelines (from Catalog)       │
│  ├── Shared Tasks (build, scan, deploy, notify) │
│  ├── Chains (automatic security)                │
│  └── Results (metrics & audit)                  │
└──────────────────┬──────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────┐
│  Team Namespaces                                │
│  ├── Team A: Java microservices pipeline        │
│  ├── Team B: Python ML training pipeline        │
│  └── Team C: Frontend build + CDN deploy        │
└─────────────────────────────────────────────────┘
```

### Building Golden Paths

A golden-path pipeline composes curated Tasks:

1. **Approved base images** — a shared Task pulls only from your internal registry
2. **Security scanning** — Trivy, Grype, or Snyk Tasks from the Catalog
3. **Compliance checks** — OPA/Gatekeeper policies validated in-pipeline
4. **Artifact signing** — Chains handles this at the platform level
5. **Deployment** — Teams choose their target (Kubernetes, serverless, VM)

Platform teams publish these as ClusterTasks or in an internal Catalog. Developers compose them or use them as-is.

### Developer Self-Service

| Capability | How |
|-----------|-----|
| Start a pipeline | Push to Git → Triggers/PAC creates PipelineRun |
| Monitor runs | Dashboard UI or `tkn` CLI |
| Debug failures | `tkn pipelinerun logs` or Dashboard log viewer |
| Customize | Override parameters in `.tekton/` config |
| Discover tasks | Browse internal Hub/Catalog |

## Getting Started

1. Install Tekton with [Operator](/docs/Operator/) for consistent cluster configuration
2. Curate a set of approved Tasks in your internal [Catalog](/docs/Catalog/)
3. Build golden-path Pipelines that compose these Tasks
4. Set up [Pipelines-as-Code](/docs/Pipelines-as-Code/) so developers self-serve
5. Enable [Chains](/docs/Chains/) and [Dashboard](/docs/Dashboard/) for security and visibility
6. Integrate with your developer portal (Backstage, etc.)

{{< callout type="info" >}}
Tekton's API-first design means it embeds into portals and platforms. It's the CI/CD engine — your platform is the UX layer on top.
{{< /callout >}}

{{< callout >}}
See all Tekton components and how they fit together on the [Components](/components/) page.
{{< /callout >}}
