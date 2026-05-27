---
linkTitle: Remote Resolution
weight: 307
---

# Tekton Pipeline Remote Resolution

Remote Resolution is a Tekton beta feature that allows users to fetch tasks and pipelines from remote sources outside the cluster. Tekton provides a few built-in resolvers that can fetch from git repositories, OCI registries etc as well as a framework for writing custom resolvers.

Remote Resolution was initially created as a separate project in [TEP-060](https://github.com/tektoncd/community/blob/main/teps/0060-remote-resource-resolution.md) and migrated into the core pipelines project in [#4710](https://github.com/tektoncd/pipeline/issues/4710).

## Getting Started Tutorial

For new users getting started with Tekton Pipeline remote resolution, check out the
[resolution-getting-started.md](/vault/Pipelines-v1.3.x-LTS/resolution-getting-started/) tutorial.

## Configuring Built-in Resolvers

These resolvers are enabled by setting the appropriate feature flag in the `resolvers-feature-flags`
ConfigMap in the `tekton-pipelines-resolvers` namespace. See the [section in install.md](/vault/Pipelines-v1.3.x-LTS/install/#configuring-built-in-remote-task-and-pipeline-resolution) for details.

The default resolver type can be configured by the `default-resolver-type` field in the `config-defaults` ConfigMap (`alpha` feature). See [additional-configs.md](/vault/Pipelines-v1.3.x-LTS/additional-configs/) for details.

## Developer Howto: Writing a Resolver From Scratch

For a developer getting started with writing a new Resolver, see
[how-to-write-a-resolver.md](/vault/Pipelines-v1.3.x-LTS/how-to-write-a-resolver/) and the
accompanying [resolver-template](https://github.com/tektoncd/pipeline/tree/release-v1.3.x/docs/resolver-template).

## Resolver Reference: The interfaces and methods to implement

For a table of the interfaces and methods a resolver must implement
along with those that are optional, see [resolver-reference.md](/vault/Pipelines-v1.3.x-LTS/resolver-reference/).

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
