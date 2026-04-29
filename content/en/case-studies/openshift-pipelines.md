---
title: "Red Hat OpenShift Pipelines"
description: "How Red Hat built enterprise Kubernetes CI/CD on Tekton"
weight: 1
---

## Challenge

Red Hat needed a CI/CD solution for OpenShift that was Kubernetes-native,
vendor-neutral, and extensible enough to support enterprise workflows across
thousands of customer environments — from air-gapped data centers to managed
cloud clusters.

## Solution

Red Hat built **OpenShift Pipelines** on top of Tekton, packaging Tekton
Pipelines, Triggers, Chains, and Pipelines-as-Code into a fully supported
OpenShift Operator. Key integrations include:

- **Tekton Chains** for automatic SLSA provenance generation and artifact signing
- **Pipelines-as-Code** for GitHub/GitLab-native CI with in-repo pipeline definitions
- **Tekton Results** for long-term pipeline run storage and querying
- **Tekton Operator** for lifecycle management across OpenShift clusters

## Results

- Ships as a core component of every OpenShift 4.x release
- Powers CI/CD for thousands of enterprise customers globally
- Supports air-gapped and disconnected environments via Tekton Operator
- Achieves SLSA Level 3 provenance for build artifacts

## Quote

> "Tekton gives us a Kubernetes-native foundation that scales from a single
> developer laptop to thousands of production clusters. Its decoupled
> architecture lets us innovate on top without being locked into any single
> vendor's pipeline model."
>
> — **Red Hat OpenShift Pipelines Team**

[Learn more about OpenShift Pipelines](https://docs.openshift.com/pipelines/latest/about/about-pipelines.html)
