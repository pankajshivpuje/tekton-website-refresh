# Nav Bar Social Links & Community Page Redesign

**Date:** 2026-05-19
**Status:** Approved

## Overview

Three changes to the Tekton website:

1. Add GitHub stars/forks badges (Shields.io) to the nav bar
2. Add a Slack icon link to the nav bar
3. Redesign the Community page following Backstage.io's section-based layout

## 1. Nav Bar — GitHub Badges & Slack Icon

### Current State

The right side of the nav bar is ordered: **GitHub icon+text → Search → Theme toggle**. GitHub appears as a text menu item with an icon. No Slack link in the nav. No star/fork counts shown.

**Files involved:**
- `config.yaml` — menu definitions (lines 92–131)
- `layouts/_partials/navbar.html` — nav bar template

### New Right-Side Order

```
Search → GitHub icon → Stars badge → Forks badge → Slack icon → Theme toggle
```

### GitHub Changes

- **Remove** the `GitHub` text link from the left-side nav menu items (currently weight 7 with `params.icon: github`)
- **Add** a new GitHub icon-only menu item to the right-side utility area
- **Link target:** `https://github.com/tektoncd/pipeline`
- **Badges:** Two `<img>` tags using Shields.io social-style badges:
  - `https://img.shields.io/github/stars/tektoncd/pipeline?style=social`
  - `https://img.shields.io/github/forks/tektoncd/pipeline?style=social`
- Badges are rendered as `<img>` elements next to the GitHub icon, not as separate menu items
- Badges link to the same `tektoncd/pipeline` repo

### Slack Icon

- **New menu item** in `config.yaml` with `params.icon: slack`
- **Link:** `https://join.slack.com/t/tektoncd/shared_invite/zt-1z8ctzsyv-wLXWwA2Rl3AOhcNGqpWRUw` (existing URL from config.yaml `params.links.developer`)
- Rendered as an icon-only link (same pattern as the existing GitHub icon rendering in `navbar.html`)

### Menu Weight Reordering

```yaml
# config.yaml menu.main changes:
- search:        weight 7  (was 8)
- GitHub icon:   weight 8  (was 7, now icon-only with badges)
- Slack icon:    weight 9  (new)
- theme-toggle:  weight 10 (was 9)
```

### Implementation Approach

The nav bar template (`navbar.html`) currently renders icon menu items as simple `<a>` tags with an icon inside. For the GitHub item, we need to also render the Shields.io badge images. Two approaches:

**Chosen approach:** Add a special case in `navbar.html` for the GitHub icon that renders the badges inline. This is done by checking `if eq .Params.icon "github"` in the icon rendering block (lines 59–66) and appending the two `<img>` tags after the icon SVG. The badge URLs are constructed from a new config param `params.github_repo_for_badges: tektoncd/pipeline`.

The Slack icon uses the existing icon rendering path — the Hextra theme's `utils/icon.html` partial should already support a `slack` icon name. If not, we'll add an inline SVG.

### Dark Mode

- GitHub icon: uses `currentColor` (already works in dark mode)
- Shields.io badges: the `?style=social` variant has a transparent background, so it works on both light and dark backgrounds. We may need to add a `filter: invert(1)` in dark mode if the text is too dark — verify during implementation.
- Slack icon: uses `currentColor` (same as GitHub)

### Mobile / Responsive

- Badges are hidden on mobile (`hx:hidden hx:md:flex`) to avoid cluttering the compact nav
- GitHub and Slack icons remain visible on mobile in the hamburger menu
- Search remains accessible via the hamburger menu

## 2. Community Page Redesign

### Current State

The community page (`layouts/community/list.html`) renders a header and the `community-links.html` partial, which contains 7 cards in a 3-column + 2-column grid layout. All styling is inline in the partial via a `<style>` block.

**Files involved:**
- `layouts/community/list.html` — page layout
- `layouts/partials/community-links.html` — card content and styling
- `content/en/community/_index.md` — page frontmatter and minimal content
- `assets/css/custom.css` — may need community section styles

### New Section Structure

Replacing the card grid with a vertical section-based layout inspired by Backstage.io/community:

#### Section 1: Hero
- Gradient background using Tekton brand colors (`#00109F` → `#4f46e5` → `#7c3aed`)
- Title: "Tekton Community"
- Subtitle: "Join us in building the industry-standard, cloud-native CI/CD platform."
- Link to CNCF Code of Conduct

#### Section 2: Get Started
- Light background (`#f8fafc` / dark mode equivalent)
- Heading: "Get started in our community!"
- Horizontal row of quick-action pill links:
  - 💬 Chat on Slack → existing Slack invite URL
  - 🐛 Good First Issues → `https://github.com/tektoncd/pipeline/contribute`
  - 📧 Developers Mailing List → `https://groups.google.com/forum/#!forum/tekton-dev`
  - 📧 Users Mailing List → `https://groups.google.com/forum/#!forum/tekton-users`
  - 🐦 Twitter / X → `https://twitter.com/tektoncd`

#### Section 3: Community Initiatives
- Section label: "Community Initiatives" (uppercase, small)
- Heading: "Stay connected with the project"
- 2-column grid of cards:
  - **Community Meetings** — description + "View schedule →" CTA linking to community calendar
  - **Working Groups** — description + "Join a group →" CTA linking to working-groups.md

#### Section 4: Contributing
- Light background
- Heading: "Contributing"
- 3-column grid of cards:
  - **Code & Docs** — contribution guide, code standards, commit standards → links to `docs/contribute/` and GitHub standards
  - **Pull Requests** — PR reviews, feature proposals, TEPs → links to process/README.md and TEPs
  - **Contributor Ladder** — growth path from contributor to lead → links to contributor-ladder.md

#### Section 5: Governance
- Heading: "Governance"
- Horizontal row of pill-style links (not cards):
  - 🏛️ Governance Model → governance.md
  - 📋 TEPs → teps directory
  - 🗺️ Roadmap → roadmap.md
  - 📐 Design Principles → design-principles.md

#### Section 6: Adopters
- Light background with top border
- Centered heading: "Trusted by"
- Logo grid reusing the 11 adopter SVGs already in `static/images/adopters/` (Google, IBM, Red Hat, Alibaba, Nubank, Alauda, Giant Swarm, Allianz Direct, Marriott Vacations, Kadaster, OneStock) — same logos used on the homepage in `content/en/_index.md`
- "View all adopters →" link to `https://github.com/tektoncd/community/blob/main/adopters.md`

### Implementation Approach

- Rewrite `layouts/partials/community-links.html` with the new section-based layout
- Keep `layouts/community/list.html` as the wrapper, but update it to remove the old header (the hero section replaces it)
- Move all community CSS from the inline `<style>` block in the partial to `assets/css/custom.css` for consistency with the rest of the site
- All sections support dark mode using `:root.dark` selectors (matching existing pattern in `custom.css`)

### Content Mapping

All links from the current 7-card layout are preserved and redistributed:

| Current Card | New Section |
|---|---|
| Get Involved | Contributing (Code & Docs card) |
| Reach Out | Get Started (quick-action pills) |
| Contribution Process | Contributing (PR card + Contributor Ladder card) |
| Contribute to Documentation | Contributing (Code & Docs card) |
| Tekton Adopters | Adopters section |
| Governance | Governance section |
| Community Meetings | Community Initiatives section |

### Dark Mode

Each section has a dark mode variant:
- Hero gradient: works as-is (dark colors)
- Light background sections: `#f8fafc` → `#111827` (or similar dark equivalent)
- Cards: white → `#1a1a2e` (matching existing `.community-card` dark styles)
- Text: appropriate contrast ratios maintained
- Pill links: border + text color adjustments

### Mobile / Responsive

- Hero: padding reduces, text sizes scale down
- Get Started pills: wrap to multiple rows
- 2-column and 3-column grids: collapse to single column below 640px
- Governance pills: wrap naturally
- Adopter logos: wrap with flexbox

## Files Changed

| File | Change |
|---|---|
| `config.yaml` | Reorder menu weights, add Slack menu item, add `github_repo_for_badges` param |
| `layouts/_partials/navbar.html` | Add GitHub badges rendering, handle Slack icon |
| `layouts/community/list.html` | Remove old header (hero replaces it) |
| `layouts/partials/community-links.html` | Full rewrite with new section layout |
| `assets/css/custom.css` | Add community page section styles, dark mode, responsive breakpoints |

## Out of Scope

- Updating the Slack invite URL (user confirmed using existing one)
- Adding new adopter logos beyond what's already on the homepage
- Mobile hamburger menu changes beyond hiding badges
- Footer changes
