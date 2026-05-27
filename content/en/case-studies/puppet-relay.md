---
title: Puppet Relay
description: "How Puppet built Relay, an event-driven automation platform, on top of Tekton."
---

## Challenge

Puppet needed to build Relay, an event-driven automation platform that could execute complex workflows triggered by cloud infrastructure events (alerts, deployments, policy violations). The platform required a workflow engine that was container-native, could handle arbitrary step graphs, and scaled from simple scripts to multi-step orchestrations.

## Solution

Puppet chose Tekton as the workflow execution engine for Relay. Tekton's Task and Step model mapped naturally to Relay's concept of workflows — sequences of containerized actions triggered by events. The Kubernetes-native architecture meant Relay could leverage existing infrastructure without operating a separate orchestration layer.

### Key Components Used

| Component | How Puppet Uses It |
|-----------|-------------------|
| **Pipelines** | Execution engine for Relay workflows — each workflow maps to a Tekton Pipeline |
| **Triggers** | Event ingestion — cloud events (PagerDuty alerts, Datadog monitors, AWS CloudWatch) trigger Relay workflows via Tekton Triggers |

### Architecture Highlights

- **Event-to-workflow mapping** — Relay translates incoming cloud events into Tekton PipelineRuns using custom TriggerTemplates
- **Container-per-step** — Each workflow step runs in its own container, enabling polyglot actions (Python, Go, shell) in a single workflow
- **Community step library** — Relay maintains a catalog of pre-built steps (Slack notifications, Jira tickets, AWS actions) that run as Tekton Tasks
- **Declarative workflows** — Users define workflows in YAML, and Relay compiles them to Tekton Pipelines behind the scenes

## Results

- **Rapid platform development** — Building on Tekton avoided writing a custom workflow engine from scratch
- **Extensible step ecosystem** — New automation capabilities ship as container images, not engine code
- **Reliable execution** — Kubernetes-native scheduling handles retries, resource limits, and failure isolation
- **Event-driven scale** — Tekton's trigger model handles bursty event patterns (incident response, deployment notifications)

> "Tekton let us focus on the automation experience instead of building plumbing. We got a production-grade workflow engine that speaks Kubernetes natively."
> — **Puppet Relay Engineering Team**
