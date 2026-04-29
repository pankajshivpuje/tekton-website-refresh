---
title: Supply Chain Security
description: "Achieve SLSA compliance with Tekton Chains — automatic provenance, artifact signing, and policy enforcement."
---

## The Problem

Software supply chain attacks are increasing. Regulatory frameworks like SLSA, NIST SSDF, and Executive Order 14028 now require verifiable build provenance and artifact integrity. Retrofitting security into an existing CI/CD system is painful and error-prone.

## Why Tekton

Tekton Chains observes your pipeline runs and automatically generates signed provenance attestations — no changes to your pipelines required. Because Chains runs as a separate controller watching TaskRun/PipelineRun results, your build logic stays clean and security is enforced at the platform level.

### Key Components

| Component | Role |
|-----------|------|
| **Pipelines** | Build engine — produces the artifacts that Chains will sign |
| **Chains** | Security layer — generates SLSA provenance, signs artifacts with Sigstore/KMS |
| **Results** | Storage — retains attestation records for audit and compliance queries |

### How It Works

```
Pipeline Run completes
        │
        ▼
Chains Controller observes result
        │
        ├── Extracts artifact digests (OCI images, binaries)
        ├── Generates SLSA v1.0 provenance attestation
        ├── Signs with Sigstore (keyless) or your KMS key
        └── Stores attestation in OCI registry / Rekor transparency log
```

### SLSA Levels with Tekton

| SLSA Level | What Tekton Provides |
|------------|---------------------|
| **L1** | Provenance exists — Chains generates it automatically |
| **L2** | Provenance is signed — Chains signs with Sigstore or KMS |
| **L3** | Hardened builds — Tekton runs each Step in an isolated container with hermetic execution support |

### Signing Options

- **Sigstore (keyless)** — No key management. Uses OIDC identity and Rekor transparency log
- **KMS** — AWS KMS, GCP KMS, Azure Key Vault, or HashiCorp Vault
- **On-disk keys** — For air-gapped environments

## Getting Started

1. Install [Tekton Pipelines](/docs/Pipelines/) and [Chains](/docs/Chains/)
2. Configure Chains signing backend (Sigstore recommended for most teams)
3. Set the `artifacts.oci.storage` and `artifacts.taskrun.format` fields in the Chains config
4. Run a pipeline — Chains automatically signs and attests
5. Verify with `cosign verify-attestation`

{{< callout type="info" >}}
Chains requires zero changes to existing pipelines. Install it, configure signing, and every TaskRun is automatically attested.
{{< /callout >}}

{{< callout >}}
See all Tekton components and how they fit together on the [Components](/components/) page.
{{< /callout >}}
