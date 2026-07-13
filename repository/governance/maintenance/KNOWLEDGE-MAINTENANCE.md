# KNOWLEDGE-MAINTENANCE.md

**Document Type:** Knowledge Maintenance Cycle (permanent operational governance)
**Version:** 1.0
**Established:** 2026-07-13 · V1.0 Stable
**Purpose:** Replace Sprint-driven knowledge building with rhythm-driven knowledge maintenance.

---

## The Shift

```
Before V1.0:   Sprint → build → Sprint → build
After V1.0:    Operate → observe → maintain → operate
```

Sprints are for capability jumps.
Maintenance is for staying current.
These are different activities requiring different rhythms.

---

## Daily Rhythm (5 minutes)

Open OPERATIONS-DASHBOARD.md. Read only. Answer four questions:

```
① How many visitors today?
② What did they ask?
③ Any error or broken answer?
④ Any new feedback?
```

If all four are unremarkable: close the file. Done.
If any requires action: log it. Act tomorrow, not tonight.

**Rule:** Daily rhythm is observation only. No changes during daily review.

---

## Weekly Rhythm (30 minutes, every Monday)

Review:
```
PRODUCT-REVISION-LOG.md    → any new PR needed?
PILOT-CASE-LOG.md          → new cases this week?
OPERATIONS-DASHBOARD.md    → weekly summary filled?
PILOT-GAP-LOG.md           → any gap upgraded in priority?
```

Decision tree:
```
New user feedback this week?
    │
    Yes → Is it a product issue? → PR (24–48h)
    │     Is it a knowledge issue? → Add to monthly review queue
    No → Done. Nothing changes.
```

**Rule:** Weekly rhythm produces PRs or nothing. It does not produce ET updates.

---

## Monthly Rhythm (2 hours, first Monday of each month)

### Search protocol (1 hour)

Search four source types only:

```
① New Meta-analysis or MOAS
   Search: "meta-analysis" + [Concept] + disability + [current year]

② New Systematic Review
   Search: "systematic review" + [Concept] + disability + [current year]

③ Guideline updates
   Search: AOTA / AACPDM / WHO / NICE + [Concept] + [current year]

④ New Longitudinal study
   Search: "longitudinal" + [Concept] + participation + disability + [current year]
```

Search all five Concepts: Participation · Family Support · Parenting Stress · Family Functioning · FQOL

### Qualification (30 minutes)

For each hit, apply Evidence Qualification:

```
Does it change the Evidence Level of an existing ET?     → Sprint trigger
Does it fill a Field-level Gap with new evidence?        → Sprint trigger
Does it add an Indirect Intervention pathway?            → Monthly update
Does it update a Known Boundary?                         → Monthly update
Is it cross-sectional with no SR context?               → Skip (low marginal value)
```

### If nothing qualifies:

Do nothing. Document: "Monthly review [date] — no qualifying evidence found."
This is not a failure. It is the correct result.

### If something qualifies for monthly update (not Sprint):

Add EA to KNOWLEDGE-REFRESH-[year].md (running file).
Update relevant ET Known Boundary or Intervention Evidence note.
Do NOT change Evidence Level without Sprint gate.

---

## Quarterly Rhythm (half day, every 3 months)

### ET Review

Review all 7 Cross-concept ETs against three questions:

```
① Has a new SR or MOAS changed the Evidence Level basis?
   If yes → prepare Sprint proposal

② Has a new Longitudinal study changed Temporal Evidence status?
   If yes → prepare Sprint proposal

③ Has a Known Boundary become inaccurate due to new evidence?
   If yes → monthly update (not Sprint)
```

### KA Review

Review KA-FQOL-001 and KA-FF-001:

```
① Has a new measurement framework emerged?
② Has a widely-used tool been deprecated?
③ Have definition papers been superseded?
```

If yes to any: monthly update.

### Clinical Navigation Review

For all Limited ETs with Clinical Navigation:

```
① Has the redirect ET's evidence improved?
   (i.e. does ET-000033's navigation to ET-000032 still hold?)
② Has the priority order in Triage changed based on new evidence?
```

If yes: monthly update or Sprint proposal.

---

## Conditions to Restart a Sprint

A Sprint is only opened when one or more of these conditions is met:

```
Condition 1: Major evidence update
  New Meta-analysis OR new Guideline OR new Longitudinal
  that materially changes an Evidence Level or fills a Field-level Gap

Condition 2: New Concept or Hub
  A new family or participation concept requires full ET/KA/EA build
  Examples: Sleep · Mental Health · AAC · Self-determination

Condition 3: Systematic user gap
  ≥3 distinct users ask questions Repository cannot answer
  AND the gap type is Knowledge (not Product or Scope)

Condition 4: Product capability upgrade
  Personalised navigation · intelligent summarisation
  · multi-language · automated evidence monitoring
```

**If none of these conditions is met: no Sprint.**
**Do not open a Sprint to maintain momentum or document completion.**

---

## What Maintenance Does NOT Produce

```
✗ New ET from a single cross-sectional study
✗ Evidence Level upgrade without SR/MOAS/RCT
✗ New KA for a concept not yet in scope
✗ New Hub without Condition 2 being met
✗ Sprint to "tidy up" or "improve consistency"
✗ PR from a single user preference (not pattern)
```

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial · V1.0 Stable |
