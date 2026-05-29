---
title: Tekton
layout: hextra-home
description: "Tekton is a cloud-native, open-source framework for creating CI/CD systems. A CNCF incubating project."
---

<div class="hero-center hx-mt-6">
  <img src="images/tekton-icon-color.png" alt="Tekton" class="hero-logo" />
</div>

<div class="hero-center hx-mb-6">
{{< hextra/hero-headline >}}
  Kubernetes Native CI/CD
{{< /hextra/hero-headline >}}
</div>

<div class="hero-center hx-mb-4">
{{< hextra/hero-subtitle >}}
  Tekton is a powerful and flexible open-source framework for creating CI/CD systems,&nbsp;<br class="sm:hx-block hx-hidden" />allowing developers to build, test, and deploy across cloud providers and on-premise systems.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hero-buttons">
<a href='{{< relurl "docs/getting-started/" >}}' class="not-prose hextra-hero-btn-primary">Get Started</a>
<a href="https://github.com/tektoncd" class="not-prose hextra-hero-btn-alt" target="_blank" rel="noreferrer">View on GitHub</a>
</div>

<div class="hero-pipeline" role="img" aria-label="Pipeline flow: Source, Build, Test, Deploy">
  <div class="hero-pipeline-inner">
    <div class="pipeline-label">Pipeline</div>
    <div class="pipeline-flow">
      <div class="pipeline-task pipeline-task-source">
        <div class="pipeline-task-icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </div>
        <span class="pipeline-task-name">Source</span>
      </div>
      <div class="pipeline-connector">
        <svg aria-hidden="true" width="32" height="12" viewBox="0 0 32 12"><path d="M0 6h24" stroke="currentColor" stroke-width="2" fill="none"/><path d="M22 1l6 5-6 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>
      </div>
      <div class="pipeline-task pipeline-task-build">
        <div class="pipeline-task-icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
        </div>
        <span class="pipeline-task-name">Build</span>
      </div>
      <div class="pipeline-connector">
        <svg aria-hidden="true" width="32" height="12" viewBox="0 0 32 12"><path d="M0 6h24" stroke="currentColor" stroke-width="2" fill="none"/><path d="M22 1l6 5-6 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>
      </div>
      <div class="pipeline-task pipeline-task-test">
        <div class="pipeline-task-icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <span class="pipeline-task-name">Test</span>
      </div>
      <div class="pipeline-connector">
        <svg aria-hidden="true" width="32" height="12" viewBox="0 0 32 12"><path d="M0 6h24" stroke="currentColor" stroke-width="2" fill="none"/><path d="M22 1l6 5-6 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>
      </div>
      <div class="pipeline-task pipeline-task-deploy">
        <div class="pipeline-task-icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
        </div>
        <span class="pipeline-task-name">Deploy</span>
      </div>
    </div>
  </div>
</div>

<div class="section-band">
<h2 class="pillars-heading">Why Tekton?</h2>

<div class="why-tekton-grid">
  <div class="why-tekton-card">
    <div class="why-tekton-icon-badge why-tekton-icon-blue">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    </div>
    <h3 class="why-tekton-card-title">Customizable</h3>
    <p class="why-tekton-card-desc">Tekton entities are fully customizable, allowing for a high degree of flexibility. Platform engineers can define a detailed catalog of building blocks for developers to use in a wide variety of scenarios.</p>
  </div>
  <div class="why-tekton-card">
    <div class="why-tekton-icon-badge why-tekton-icon-teal">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    </div>
    <h3 class="why-tekton-card-title">Reusable</h3>
    <p class="why-tekton-card-desc">Tekton entities are fully portable, so once defined, anyone within the organization can use a given pipeline and reuse its building blocks. Developers can quickly build complex pipelines without reinventing the wheel.</p>
  </div>
  <div class="why-tekton-card">
    <div class="why-tekton-icon-badge why-tekton-icon-purple">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    </div>
    <h3 class="why-tekton-card-title">Expandable</h3>
    <p class="why-tekton-card-desc">Tekton Catalog is a community-driven repository of Tekton building blocks. You can quickly create new and expand existing pipelines using pre-made components from the Tekton Catalog.</p>
  </div>
  <div class="why-tekton-card">
    <div class="why-tekton-icon-badge why-tekton-icon-amber">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
    </div>
    <h3 class="why-tekton-card-title">Standardized</h3>
    <p class="why-tekton-card-desc">Tekton installs and runs as an extension on your Kubernetes cluster and uses the well-established Kubernetes resource model. Tekton workloads execute inside Kubernetes containers.</p>
  </div>
  <div class="why-tekton-card">
    <div class="why-tekton-icon-badge why-tekton-icon-rose">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M21 3v5h-5"/><path d="M12 7v5l3 3"/></svg>
    </div>
    <h3 class="why-tekton-card-title">Scalable</h3>
    <p class="why-tekton-card-desc">To increase your workload capacity, you can simply add nodes to your cluster. Tekton scales with your cluster without the need to redefine your resource allocations or any other modifications to your pipelines.</p>
  </div>
</div>
</div>

<div class="quicklinks-grid">
  <a href='{{< relurl "docs/installation/" >}}' class="quicklinks-card">
    <h3 class="quicklinks-title">Install Tekton</h3>
    <p class="quicklinks-desc">Get up and running with Tekton Pipelines on your Kubernetes cluster.</p>
    <span class="quicklinks-link">Installation guide &rarr;</span>
  </a>
  <a href='{{< relurl "community/" >}}' class="quicklinks-card">
    <h3 class="quicklinks-title">Contributions Welcome</h3>
    <p class="quicklinks-desc">Tekton is an open community and we welcome contributions of all kinds.</p>
    <span class="quicklinks-link">Join the community &rarr;</span>
  </a>
  <a href='{{< relurl "docs/getting-started/" >}}' class="quicklinks-card">
    <h3 class="quicklinks-title">Getting Started</h3>
    <p class="quicklinks-desc">Follow the tutorial to learn the basics and run your first pipeline.</p>
    <span class="quicklinks-link">Start the tutorial &rarr;</span>
  </a>
</div>

{{< latest-posts count="3" >}}

<div class="trusted-by">
  <p class="trusted-by-label">Trusted by leading organizations worldwide</p>
  <div class="trusted-by-logos">
    <img src="images/adopters/google.svg" alt="Google" class="trusted-by-logo" />
    <img src="images/adopters/ibm.svg" alt="IBM" class="trusted-by-logo" />
    <img src="images/adopters/redhat.svg" alt="Red Hat" class="trusted-by-logo" />
    <img src="images/adopters/alibaba.svg" alt="Alibaba" class="trusted-by-logo" />
    <img src="images/adopters/Nubank_logo_2021.svg" alt="Nubank" class="trusted-by-logo" />
    <img src="images/adopters/alauda.svg" alt="Alauda" class="trusted-by-logo" />
    <img src="images/adopters/giantswarmio.svg" alt="Giant Swarm" class="trusted-by-logo" />
    <img src="images/adopters/Allianz_Direct.svg" alt="Allianz Direct" class="trusted-by-logo" />
    <img src="images/adopters/Marriott_Vacations.svg" alt="Marriott Vacations" class="trusted-by-logo" />
    <img src="images/adopters/kadaster.svg" alt="Kadaster" class="trusted-by-logo" />
    <img src="images/adopters/onestock.svg" alt="OneStock" class="trusted-by-logo" />
  </div>
</div>

<div class="cncf-banner">
  <a href="https://www.cncf.io/blog/2026/03/24/tekton-becomes-a-cncf-incubating-project/" class="cncf-banner-inner">
    <img src="partner-logos/cncf.png" alt="CNCF" class="cncf-logo" />
    <span>Tekton is an incubating project at the <strong>Cloud Native Computing Foundation</strong></span>
  </a>
</div>
