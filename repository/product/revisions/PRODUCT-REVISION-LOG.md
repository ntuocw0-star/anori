# PRODUCT-REVISION-LOG.md

**Document Type:** Product Revision Log (long-term maintained)
**Version:** 1.0
**Started:** 2026-07-13 · Version 0.2
**Purpose:** Track all product-layer changes triggered by real-world use.
            Parallel to PILOT-REVISION-LOG.md (knowledge-layer revisions).
            This file covers UI, copy, IA, and operational changes only.

---

## PR vs Sprint

| Track | What it covers | Speed | Gate |
|---|---|---|---|
| **Product Revision (PR)** | Copy · IA · UX · Operations | 24–48h | User feedback |
| **Sprint** | Knowledge · Architecture · Governance | 1–2 weeks | Evidence or design |

PRs do not require a Sprint. Sprints do not produce PRs unless they include product changes.

---

## Active PR Log

| PR | Title | Triggered by | Date | Status |
|---|---|---|---|---|
| **PR-000001** | **Homepage Dynamic Content** | **User Feedback #001** | **2026-07-13** | **✅ Applied** |

---

## PR-000001 Summary

**Title:** Homepage Dynamic Content
**Triggered by:** User Feedback #001 — "文献太少"
**Root cause:** Homepage defined itself as a static Library. No return signal. No living content.
**Applied:** 2026-07-13

**Six changes:**
1. Identity framing: "文献库" → "Evidence-guided Knowledge Center · 持续更新"
2. Static counts removed: "3篇·5篇·2篇" → "持续更新 ✓ 最新研究 ✓ 家长问题 ✓ 临床建议"
3. What's New block added (first screen below fold)
4. Most asked recently section added (links to Router)
5. Pilot transparency counter added (30-day living stats)
6. Homepage layer restructured: Ask → What's New → Explore → Resources

**Knowledge changes:** None. Stability Principle intact.
**Full record:** PR-000001-HOMEPAGE-DYNAMIC-CONTENT.md

---

## PR Format (for all future entries)

```
PR:              PR-000XXX
Title:           [Short description]
Triggered by:    [User Feedback #XXX / Usability Test / Analytics]
Root cause:      [Product issue type per Stability Principle decision tree]
Priority:        Critical / High / Medium / Low
Status:          Pending / In Progress / Applied / Monitoring / Closed
Date:            YYYY-MM-DD
Changes:         [List of specific changes]
Knowledge:       [Unchanged — or specify if incorrectly changed]
Expected outcome:[What user behaviour should change]
Metrics:         [What to measure, at what interval]
Rollback:        [What triggers reversion, what specifically reverts]
Full record:     PR-000XXX-[TITLE].md
```

---

## Product Revision Taxonomy

Revisions are classified by type to enable pattern analysis:

| Type | Definition | Example |
|---|---|---|
| **Copy** | Word, phrase, heading, label change | "What this means" → "What you can do" |
| **IA** | Information architecture / navigation change | Layer restructure (Ask first) |
| **UX** | Interaction or flow change | Input placeholder, button placement |
| **Living Content** | Dynamic / regularly-updated content sections | What's New, Most Asked, Pilot Counter |
| **Onboarding** | First-use experience change | 30-second test revision |
| **Feedback** | Feedback form or flow change | New question type, routing change |
| **Scope** | Scope Statement or population note change | New population added to coverage table |

---

## Revision Principles (per Stability Principle v1.0)

Every PR must satisfy:
```
□ Does not change Evidence Level of any ET
□ Does not change Knowledge Boundary of any ET
□ Does not change Clinical recommendation basis
□ Does not change ET relationships or Hub structure
□ Does not change Triage Protocol priority order
□ Does not change Template structure (Blocks 0–5)
```

If any box is unchecked, the change is a knowledge revision, not a product revision, and must go through Evidence Review with a Sprint gate.

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial log · PR-000001 first entry |
