# KNOWLEDGE-GRAPH-v2.0.md

**Document Type:** Knowledge Network Map
**Version:** 2.0
**Established:** 2026-07-13 · Sprint 26 Step 4
**Previous:** v1.0 (Participation Hub only)
**Stage:** Stage IV — Knowledge Network · Two-Hub Complete

---

## Network Overview

```
╔══════════════════════════════════════════════════════════════╗
║                    TWO-HUB NETWORK                           ║
╚══════════════════════════════════════════════════════════════╝

         ┌─────────────────────────────────────────┐
         │           PARTICIPATION                  │
         │           (Hub #1 · Full Evidence)       │
         └──────────────────┬──────────────────────┘
                            │ ET-000031
                            │ Moderate · FS→Part.
         ┌──────────────────▼──────────────────────┐
         │           FAMILY SUPPORT                 │
         │           (Hub #2)                       │
         └──┬─────────────┬──────────────┬─────────┘
            │ ET-000035   │ ET-000036    │ ET-000037
            │ Moderate    │ Limited      │ Moderate
            ▼             ▼             ▼
     Parenting      Family          FQOL
     Stress         Functioning
     
         ┌─────────────────────────────────────────┐
         │ Also connected to Participation Hub:    │
         │ ET-000032  Part.×PS      Moderate       │
         │ ET-000033  Part.×FF      Limited        │
         │ ET-000034  Part.×FQOL    Limited        │
         └─────────────────────────────────────────┘
```

---

## Full Network Map

```
                    PARTICIPATION
                   (Hub #1 · Full Evidence)
                         │
         ┌───────────────┼──────────────────┐
    ET-031│          ET-032│           ET-033│         ET-034│
    Mod.  │          Mod.  │           Lim.  │         Lim.  │
    FS→P  │          PS→P  │           ?↔FF  │         P↔FQOL│
         ▼               ▼                  ▼               ▼
   Family Support  Parenting Stress  Family Functioning   FQOL
   (Hub #2)
         │
    ET-035│          ET-036│           ET-037│
    Mod.  │          Lim.  │           Mod.  │
    FS→↓PS│          FS→FF │           FS→FQOL│
         ▼               ▼                  ▼
   Parenting Stress  Family Functioning   FQOL
   [Hub #2 connections — same concepts, different relationships]
```

---

## Hub #1: Participation

| Field | Value |
|---|---|
| Hub Status | Full Evidence (ET-000030 · Sprint 24) |
| Connections | 4 |
| Connection ETs | ET-000031/032/033/034 |

| Connection | ET | Evidence Level | Direction | Temporal |
|---|---|---|---|---|
| × Family Support | ET-000031 | Moderate | FS → Participation | Absent |
| × Parenting Stress | ET-000032 | Moderate | PS → Participation | **Present** |
| × Family Functioning | ET-000033 | Limited | Not established | Absent |
| × FQOL | ET-000034 | Limited | Part. ↔ FQOL | Absent |

---

## Hub #2: Family Support

| Field | Value |
|---|---|
| Hub Status | Active (all 3 connections established) |
| Connections | 3 |
| Connection ETs | ET-000035/036/037 |

| Connection | ET | Evidence Level | Direction | Effect Size |
|---|---|---|---|---|
| × Parenting Stress | ET-000035 | Moderate | FS → ↓PS | r=.43 (k=82) |
| × Family Functioning | ET-000036 | Limited | FS → ↑FF (Circumplex) | — |
| × FQOL | ET-000037 | Moderate | FS → ↑FQOL | r=.46 (k=5) |

---

## Cross-Hub Bridge

The two Hubs are connected through ET-000031:

```
Participation ←──────────────────── Family Support
              ET-000031 · Moderate
              Direction: FS → Participation
              This ET serves both Hubs simultaneously
```

This creates a connected network — not two isolated trees.

---

## Network Evidence Map

```
Connection                    Level    Temporal   Effect (r)   Gap Priority
─────────────────────────────────────────────────────────────────────────
Part. × Family Support        Moderate  Absent     —           Longitudinal
Part. × Parenting Stress      Moderate  Present    β≈-.10      Intervention
Part. × Family Functioning    Limited   Absent     —           SR, Longitudinal
Part. × FQOL                  Limited   Absent     —           SR, Longitudinal
FS × Parenting Stress         Moderate  Absent     .43         Longitudinal
FS × Family Functioning       Limited   Absent     —           SR, Longitudinal
FS × FQOL                     Moderate  Absent     .46         Longitudinal
```

---

## Architecture Patterns Confirmed by Network v2.0

**All patterns from v1.0 confirmed, plus:**

**6. MOAS as Moderate Evidence (confirmed)**
Two ETs (ET-035, ET-037) demonstrate that MOAS provides Moderate-level evidence with high consistency but does not automatically reach Strong without Intervention evidence.

**7. Framework Equivalence Principle (first case)**
ET-036 demonstrated that two validated frameworks (McMaster/FAD and Circumplex/FACES) can both contribute to the same Concept ET, provided framework differences are explicitly documented.

**8. Hub-Bridge Pattern (emerging)**
ET-000031 simultaneously serves as:
- A Participation Hub connection (Hub #1)
- The bridge to Family Support Hub (Hub #2)
Single EAs can carry cross-hub structural weight.

---

## Stage IV Progress

```
Stage IV Goal:   Knowledge Network
                 ≥2 Hubs · Connected network

Status:          ✅ COMPLETE (v2.0)

Hub #1:          Participation · 4 connections
Hub #2:          Family Support · 3 connections
Cross-hub:       ET-000031 (bridge)
Total ETs:       7
Total concepts:  5 (Participation, Family Support,
                    Parenting Stress, Family Functioning, FQOL)

Stage IV Freeze Conditions:
  ✅ Two Hubs established
  ✅ Each Hub has ≥3 connections
  ✅ Hubs are connected (not isolated)
  ✅ Knowledge Graph structure documented
```

---

## Network Upgrade Candidates

**Priority A — Temporal Evidence**
```
ET-000035  FS × Parenting Stress  → Longitudinal search
ET-000037  FS × FQOL             → Longitudinal search
ET-000031  Part. × FS            → Longitudinal search
```

**Priority B — Evidence Level Upgrade**
```
ET-000033  Part. × FF    Limited → SR search (McMaster × Participation)
ET-000034  Part. × FQOL  Limited → SR search (FQOL × Participation)
ET-000036  FS × FF       Limited → McMaster/FAD × Family Support search
```

**Priority C — Cross-hub Connections**
```
Parenting Stress × Family Functioning
Parenting Stress × FQOL
Family Functioning × FQOL
```

**Priority D — Third Hub**
```
Parenting Stress Hub (candidate)
  → Participation (ET-000032, exists)
  → Family Support (ET-000035, exists)
  → Family Functioning (new ET needed)
  → FQOL (new ET needed)
```

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Participation Hub (4 connections) |
| v2.0 | 2026-07-13 | Family Support Hub (3 connections); Two-Hub Network |
| v3.0 | TBD | When third Hub established or major upgrade |
