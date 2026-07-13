# ANSWER-GENERATION-GUIDELINE-v1.0.md

**Document Type:** Operational Guideline
**Version:** 1.0
**Created:** 2026-07-13 · Sprint 28 Step 3
**Purpose:** End-to-end process for generating clinical answers from Repository

---

## Overview

This guideline specifies the complete process from receiving a clinical question to producing a validated answer. It connects Repository navigation (Step 2A logic) with answer generation (Clinical Answer Template v1.0).

```
Clinical Question
      ↓
Step 1: Question Classification
      ↓
Step 2: Repository Navigation
      ↓
Step 3: Evidence Assembly
      ↓
Step 4: Answer Generation (Template)
      ↓
Step 5: Quality Check
      ↓
Clinical Answer
```

---

## Step 1: Question Classification

Classify the question before navigating. This determines the routing strategy.

| Type | Definition | Routing Strategy |
|---|---|---|
| **Definitional** | "What is X?" | → KA first, then ET for context |
| **Single-Concept** | "How does X affect Y within one domain?" | → Single Concept ET |
| **Cross-Concept** | "How are X and Y related?" | → Cross-concept ET |
| **Cross-Hub** | Involves two or more Hub Concepts | → Multiple ETs; identify bridge Concept |
| **Clinical Practice** | "What should I do about X?" | → Participation Hub or relevant Hub; prioritize by Evidence Level |
| **Evidence Comparison** | "Which is better supported, X or Y?" | → Compare Evidence Level + Temporal Evidence across ETs |

---

## Step 2: Repository Navigation

### 2a. Identify Concepts

Map question to one or more Repository Concepts:
- Participation
- Family Support
- Parenting Stress
- Family Functioning
- Family Quality of Life (FQOL)

### 2b. Identify ETs

| If Concepts are... | Go to... |
|---|---|
| Single Concept, core knowledge | Module ET for that Concept |
| Two Concepts, one Cross-concept ET exists | That Cross-concept ET |
| Two Concepts, no ET exists | Note as Gap; use indirect evidence |
| Multiple Concepts | Multiple ETs; prioritize Moderate over Limited |

### 2c. Identify Bridge Concept (for Cross-Hub questions)

Look for a Concept that connects to both target Concepts:
```
Target A ←── Bridge Concept ──→ Target B
```
Current bridges: Family Support connects to both Participation and FQOL.

### 2d. Retrieve Evidence

From each relevant ET, extract:
- Suggested Direction
- Evidence Level
- Evidence Basis (MOAS, SR, Longitudinal, Cross-sectional)
- Temporal Evidence status
- Key Known Boundaries

---

## Step 3: Evidence Assembly

Before writing the answer, assemble a structured evidence summary:

```
[Question]:
[Concepts involved]:
[ETs activated]:
[Evidence Level(s)]:
[Temporal Evidence]:
[Key Effect Size(s) if available]:
[Critical Known Boundaries]:
[KG Level (0-3)]:
[SDM trigger]: Does question mention a specific family or clinical context? Y/N
```

Example for Q5:
```
Question: 父母压力大，孩子参与活动会减少吗？
Concepts: Parenting Stress × Participation
ET: ET-000032
Evidence Level: Moderate
Temporal Evidence: Present (SPARCLE, N=594)
Effect size: β = −0.07 to −0.15
Boundaries: CP-specific; indirect effect; β small but significant
KG Level: 1
SDM trigger: No (factual question) → light SDM framing
```

---

## Step 4: Answer Generation

Apply the Clinical Answer Template (v1.0):

| Block | Content Source |
|---|---|
| Block 1 (What we know) | Suggested Direction from ET |
| Block 2 (Confidence) | Evidence Level → Language mapping from Template |
| Block 3 (Practice) | Evidence Level → Recommendation calibration from Template |
| Block 4 (Boundary + SDM) | Known Boundary from ET + SDM invitation |

**SDM calibration:**
- Factual question + no clinical context mentioned → light SDM (acknowledge family variation)
- Clinical question + specific context mentioned → full SDM (invite collaborative planning)

---

## Step 5: Quality Check

Run the Template Checklist before finalizing:

```
□ Block 1: Core finding stated in plain language?
□ Block 2: Evidence Level explicitly stated?
□ Block 2: Temporal status mentioned if relevant?
□ Block 3: Actionable recommendation calibrated to Evidence Level?
□ Block 4: Specific Knowledge Boundary named?
□ Block 4: SDM invitation present and natural?
□ No overclaim from observational evidence?
□ Academic jargon minimized?
```

If any box is unchecked, revise before delivering.

---

## Evidence Level Quick Reference

| Level | Navigation Signal | Answer Confidence | Recommendation Strength |
|---|---|---|---|
| Full Evidence | Multiple PASS EAs; ET upgraded | Well-established | Routine / Standard |
| Moderate | SR or MOAS present | Meaningful, not causal | Worth prioritizing |
| Limited | Single cross-sectional | Preliminary signal | Reasonable to consider |
| Field-level Gap | No eligible studies found | No direct evidence | Based on related evidence only |

---

## Cross-Hub Answer Protocol

When KG Level 3 is triggered:

1. Name both target Concepts explicitly
2. Identify the bridge Concept
3. State the evidence for each connection separately
4. In Block 3, frame the bridge Concept as the shared leverage point
5. In Block 4, acknowledge that evidence for simultaneous improvement is indirect

**Template for Block 3 (Cross-Hub):**
> "If you want to address both [A] and [B], the evidence points to [Bridge Concept] as a shared leverage point. Research shows [Bridge → A] and [Bridge → B] are both associated. This doesn't guarantee that changing [Bridge] will automatically improve both, but it's the best-supported starting point given current evidence."

---

## Known Limitation Catalog

Standard boundary statements for each ET/Gap type (use verbatim or adapt):

| Boundary Type | Standard Statement |
|---|---|
| Observational only | "Current evidence shows an association, but does not prove that changing [X] will cause [Y] to improve." |
| Field-level Longitudinal Gap | "No longitudinal studies have yet directly examined this question, so we can't establish which comes first." |
| CP-specific | "This evidence primarily comes from children with cerebral palsy; it may not apply equally to all disability types." |
| Single study | "This comes from one study, which limits confidence. More research is needed to confirm the pattern." |
| MOAS (small k) | "This meta-analysis included [k] studies on this specific outcome — a meaningful finding, but based on fewer studies than ideal." |
| Framework-specific | "This evidence used the [Circumplex / McMaster] model; results may differ with other Family Functioning frameworks." |

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial release · Sprint 28 |
| v1.1 | TBD | After first Automation sprint (Stage V) |
