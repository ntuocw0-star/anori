# Architecture Notes

**Version:** Sprint 24 Update
**Last Updated:** 2026-07-13

---

## Pattern Maturity Levels

| Level | Definition |
|---|---|
| **Idea** | 初步想法，尚未形成可操作 Pattern |
| **Candidate** | 已有一个可工作的 Pattern，尚待案例验证 |
| **Strong Candidate** | 已有完整案例验证，但仅限特定 Scope；Freeze Condition 明确 |
| **Validated** | 已有稳定案例，可重复使用；等待进入 Template 或长期保留 |

---

## Pattern Registry

### Shared Dataset Pattern — Validated

**Status:** Validated
**First Case:** N=576 × 3 Papers × 3 EA × 1 ET (EA-000026/027/028 → ET-000030)

**Decision Principle:**
> Dataset 不决定 EA；Research Question 决定 EA。

**Operational Rule:**
- 共享数据集的多篇研究，若各自回答不同研究问题，在 Repository 中作为独立 EA 管理
- ET 层按 Knowledge Integration 综合，非统计合并（不同于 Meta-analysis）
- 共享数据集关系在各 EA Methodological Notes 及 ET 层明确标注

---

### Environment-specific Evidence Pattern — Strong Candidate

**Status:** Strong Candidate
**Validated Scope:** concept-participation (Community / School / Home)
**First Case:** EA-000026 (Community) + EA-000027 (School) + EA-000028 (Home) → ET-000030

**Pattern Description:**
- 同一 Concept × 多生活情境 → EA 按 Environment 建立
- ET 按 Environment 综合（不按 Paper 作者组织）
- Series 按 Knowledge Roadmap 导航

**Current Limit:** 尚不确认其他 Concept 是否适用 Environment Organization
**Freeze Condition:** 至少第二个独立 Concept 采用 Environment Organization 并通过 Review

---

### Gap Classification System — Strong Candidate

**Status:** Strong Candidate
**First Case:** Family Support × Participation · Longitudinal (Sprint 24 Step 4)

**Two Gap Types:**

| Type | Definition | Repository Action |
|---|---|---|
| **Repository Coverage Gap** | 相关文献存在，但 Repository 尚未收录 | 继续 Targeted Search |
| **Field-level Evidence Gap** | 该类研究目前尚不存在于文献中 | 记入 Known Boundary；标注来源证据；设 Future Evidence Trigger |

**Confirmed Field-level Gap (first case):**
- Question: Family Support → Participation (Longitudinal)
- Confirmed by: Arakelyan et al. (2019) explicit recommendation for prospective studies
- Repository Decision: Classified as Field-level Evidence Gap, not Repository Coverage Gap

**Freeze Condition:** 至少第二个独立 Field-level Gap 案例经同样流程确认

---

## Evidence Upgrade Event — Validated

**Status:** Validated (Evolution Log)
**First Case:** ET-000030 · Sprint 24 Step 3

**Mechanism:**
```
Cluster of EAs → All PASS Review
        ↓
Evidence Upgrade Review (ET level)
        ↓
Repository Status upgrade:
Conditionally Ready → Full Evidence
```

**Trigger Conditions:**
- All EAs in a defined cluster pass Review
- ET-level Evidence Upgrade Review conducted and PASSED
- Upgrade recorded in Evolution Log

---

## Cross-concept ET Structure

**Established:** Sprint 24 Step 4
**First Case:** ET-000031 · Participation × Family Support

**Required Nodes:**
1. Cross-concept Identity (Concept A × Concept B + Research Question)
2. Evidence Base (formal EA only; candidates noted separately)
3. **Relationship Direction** (see below)
4. Evidence Summary
5. Repository Search Notes (including Gap classification)
6. Known Boundary Summary
7. Future Evidence Triggers

**Relationship Direction Node (standard format):**

```
Current Relationship:   Association / Directional Association / Supported Direction
Suggested Direction:    [Concept A] → [Concept B]  (or Bidirectional / Unclear)
Evidence Level:         Limited / Moderate / Strong / Very Strong
Evidence Type:          Systematic Review / Longitudinal / Intervention / Mixed
Known Boundary:         [specific limitations]
```

**Evidence Level Scale (Cross-concept):**

| Evidence Base | Cross-concept Evidence Level |
|---|---|
| 单篇横断面研究 | Limited |
| 多篇一致横断面研究 | Emerging |
| 系统综述（观察性为主） | Moderate |
| 纵向研究 + 系统综述 | Strong |
| 干预研究 + 系统综述/Meta-analysis | Very Strong |

*Note: Scale currently in Architecture Notes; not yet promoted to Template (single validation case).*

---

## Repository Status Terminology (Frozen)

Three-tier lifecycle for Evidence Topics:

| Status | Definition |
|---|---|
| **Seed Evidence** | Initial evidence established; ET created but not yet reviewed |
| **Conditionally Ready** | Core evidence present; gaps remain; ET active but incomplete |
| **Full Evidence** | Evidence Coverage complete for defined scope; ET upgraded |

**Usage rule:** Repository Status describes Evidence Maturity, not Document Type.
Do not use "Full Evidence ET" — use "Full Evidence" as the Status value.

---

## Version History

| Sprint | Update |
|---|---|
| Sprint 22 | Cross-concept structure first established |
| Sprint 23 | Template v1.3 governance; Evidence Upgrade Event mechanism proposed |
| Sprint 24 | Shared Dataset Pattern (Validated); Environment-specific Pattern (Strong Candidate); Gap Classification (Strong Candidate); Relationship Direction node; Evidence Level Scale; Repository Status terminology frozen |
