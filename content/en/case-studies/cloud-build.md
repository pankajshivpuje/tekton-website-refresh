---
title: "Google Cloud Build"
description: "How Google Cloud uses Tekton to power serverless CI/CD"
weight: 2
---

## Challenge

Google Cloud needed to offer a fully managed, serverless CI/CD service that
could handle the scale and diversity of workloads across Google Cloud Platform
— from simple container builds to complex multi-step pipelines — while
maintaining open standards and avoiding lock-in for customers.

## Solution

Google Cloud adopted Tekton as the execution engine for **Cloud Build**,
leveraging its Kubernetes-native architecture and extensible task model.
Key aspects include:

- **Tekton Pipelines** as the core execution engine for build steps
- **Container-based isolation** for each build step, ensuring reproducibility
- **Tekton's CRD model** mapped to a managed API surface for Cloud Build users
- Integration with Google Cloud's IAM, logging, and artifact management

## Results

- Processes millions of builds daily across Google Cloud Platform
- Supports builds for all GCP services including GKE, Cloud Run, and App Engine
- Enables customers to use standard Tekton concepts while benefiting from managed infrastructure
- Contributes upstream improvements back to the Tekton project

## Quote

> "Tekton's container-native approach to CI/CD aligns perfectly with how we
> think about cloud infrastructure. Its extensible architecture lets us build
> a world-class managed service while keeping the developer experience simple."
>
> — **Google Cloud Build Team**

[Learn more about Cloud Build](https://cloud.google.com/build)
