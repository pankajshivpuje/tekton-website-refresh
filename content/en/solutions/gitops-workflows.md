---
title: GitOps Workflows
description: "Combine Tekton's CI capabilities with ArgoCD or Flux for end-to-end GitOps delivery."
---

## The Problem

GitOps tools like ArgoCD and Flux excel at continuous deployment — syncing Kubernetes state from Git. But they don't build, test, or produce artifacts. You need a CI engine that complements the CD side without duplicating concerns.

## Why Tekton

Tekton handles the CI half of GitOps: build, test, scan, sign, and push artifacts. It then updates the GitOps repo (image tags, manifests), and ArgoCD/Flux takes over for deployment. Each tool does what it's best at.

### Key Components

| Component | Role |
|-----------|------|
| **Pipelines** | CI engine — build, test, and push artifacts |
| **Triggers** | Automation — start pipelines on git push or PR events |
| **Pipelines-as-Code** | Git-native — define pipelines alongside application code |
| **Chains** | Security — sign artifacts before they reach the GitOps repo |

### Architecture Pattern

```
┌────────────┐     webhook     ┌──────────────────┐
│ App Repo   │ ──────────────▶ │ Tekton Triggers  │
│ (source)   │                 │ or Pipelines-as- │
└────────────┘                 │ Code             │
                               └────────┬─────────┘
                                        │ runs pipeline
                               ┌────────▼─────────┐
                               │ Tekton Pipeline   │
                               │ ├── Build image   │
                               │ ├── Run tests     │
                               │ ├── Security scan │
                               │ └── Push to       │
                               │     registry      │
                               └────────┬─────────┘
                                        │ updates image tag
                               ┌────────▼─────────┐
                               │ GitOps Repo       │
                               │ (manifests)       │
                               └────────┬─────────┘
                                        │ syncs
                               ┌────────▼─────────┐
                               │ ArgoCD / Flux     │
                               │ → Kubernetes      │
                               └──────────────────┘
```

### Pipelines-as-Code for GitOps

With [Pipelines-as-Code](/docs/Pipelines-as-Code/), your CI definition lives in the same repo as your application code:

```
my-app/
├── src/
├── Dockerfile
├── .tekton/
│   └── pull-request.yaml    # Pipeline triggered on PRs
└── k8s/
    └── deployment.yaml      # GitOps manifests
```

PRs get automatic status checks. Merged code triggers a build pipeline that pushes a new image and updates the GitOps repo.

### Choosing Triggers vs. Pipelines-as-Code

| Feature | Triggers | Pipelines-as-Code |
|---------|----------|-------------------|
| Pipeline definition | Cluster-side (separate from app code) | In-repo (`.tekton/` directory) |
| PR status checks | Manual setup | Automatic |
| Multi-repo pipelines | Supported | Single-repo focus |
| Best for | Platform teams managing shared pipelines | App teams owning their CI |

## Getting Started

1. Install [Tekton Pipelines](/docs/Pipelines/) and [Pipelines-as-Code](/docs/Pipelines-as-Code/) (or [Triggers](/docs/Triggers/))
2. Create a pipeline that builds, tests, and pushes your container image
3. Add a final Task that updates the image tag in your GitOps repo
4. Configure ArgoCD/Flux to watch the GitOps repo
5. Push a commit and watch the full loop

{{< callout type="info" >}}
Tekton focuses on CI. ArgoCD/Flux focuses on CD. Together they give you a fully auditable, Git-driven delivery pipeline.
{{< /callout >}}

{{< callout >}}
See all Tekton components and how they fit together on the [Components](/components/) page.
{{< /callout >}}
