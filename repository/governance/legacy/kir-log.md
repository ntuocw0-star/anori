# Knowledge Integrity Review (KIR) Log

**Anori Knowledge Operating System**
Created: 2026-07-07
Purpose: 记录 Knowledge Base 的完整性问题及处理状态。

职责边界：
- **KIR**：发现问题，标记状态
- **Network Review**：结构性修复（Merge / Delete）
- **KGO**：证据生产
- **Workflow**：证据升级

核心原则：
> **Not every duplicate becomes a deletion.**
> 不可逆的知识库变更（Merge / Delete）在 Network Review 中统一执行，不在单次 KIR 中执行。

---

## Issue Registry

---

### KIR-001 — Semantic Duplicate REL

**Date:** 2026-07-07
**Status:** Flagged — Pending Network Review
**Priority:** Medium

**Issue:**
REL-000096 is a semantic duplicate of REL-000063.

| 字段 | REL-000063 | REL-000096 |
|------|-----------|-----------|
| Source | VAR-000036 Transition Readiness | VAR-000036 Transition Readiness |
| Relation | enables | enables |
| Target | VAR-000023 Community Participation | VAR-000023 Community Participation |
| Effect | Protective | Protective |
| Primary Citation | Lindsay et al. 2018（SR） | Strnadová et al. SR |
| Status | Active | **duplicate_candidate** |

**Five-point Semantic Check:**
- Source：✅ identical
- Relation：✅ identical
- Target：✅ identical
- Effect：✅ identical
- Context（semantic）：✅ identical

**Action Taken:**
- REL-000096 status updated to `duplicate_candidate`
- Fields added: `duplicate_of: REL-000063`, `review_stage: Network Review`, `kir_note`
- No deletion, no merge — pending Network Review

**Pending Decision（Network Review）:**
- Merge REL-000096 into REL-000063（将 Strnadová 作为第二 primary citation）
- Or retain as separate REL if context difference confirmed

**Note:**
REL-000064（Transition Readiness **increases** Community Participation）保留，Relation 语义不同，不是 Duplicate。

---

### KIR-002 — Wrong Mapping

**Date:** 2026-07-07
**Status:** Corrected
**Priority:** High（已修正）

**Issue:**
Evidence Index 中 Lit 5（Strnadová et al.）被错误标注为支持 REL-000095。

**Root Cause:**
REL-000095 的 source 是 VAR-000011（Friendship Support Satisfaction），与 Strnadová 的主题（Transition Planning）完全不符。

**Correct Mapping:**
```
Lit 5（Strnadová et al.）
↓
REL-000096（primary_citation 字段已确认）
```

**Action Taken:**
- Evidence Index Section 2 中 Lit 5 的 Supported REL 从 REL-000095 修正为 REL-000096
- REL-000096 已标记为 duplicate_candidate，Lit 5 最终归属待 Network Review 后迁移至 REL-000063

**Future Action（Network Review）:**
如果 REL-000096 与 REL-000063 合并，则 Lit 5 的最终映射更新为 REL-000063。

---

## Duplicate Candidate Registry

| REL | Duplicate of | Confirmed Date | Review Stage |
|-----|-------------|---------------|--------------|
| REL-000096 | REL-000063 | 2026-07-07 | Network Review |

---

## Wrong Mapping Registry

| Lit ID | 原始错误 REL | 正确 REL | 修正日期 | 状态 |
|--------|------------|---------|---------|------|
| Lit 5 | REL-000095 | REL-000096 | 2026-07-07 | Corrected |

---

## Semantic Duplicate Review Checklist

判断 Semantic Duplicate 需五项全部确认：

| 项目 | 说明 |
|------|------|
| Source | 同一 VAR |
| Relation | 同一关系类型（enables / increases / decreases 等） |
| Target | 同一 VAR |
| Effect | 同一极性（Protective / Risk） |
| Context（semantic） | 语义上下文实质相同 |

**五项全部一致 → Semantic Duplicate（标记，待 Network Review）**
**任一项不同 → 保留，记录区别**

---

## KIR Status Lifecycle

```
Detected
    ↓
Flagged（KIR Log 记录）
    ↓
Network Review（结构性决策）
    ↓
Resolved（Merged / Retained / Deleted）
```

---

*KIR Log v1.0 — Created 2026-07-07*
*Next review trigger: Network Review（5条 EUQ 完成升级后，或 duplicate_candidate 累积 3 条以上）*

---

### KIR-003 — Citation Attribution Unconfirmed

**Date:** 2026-07-07
**Status:** Open — Pending Citation Verification
**Priority:** Medium

**Issue:**
REL-000013（Caregiver Burden → Community Participation）的 Lit 20 映射存在引用归属不确定性。

**Details:**
- Verdonschot et al. 发表了两篇相关综述：
  - **2009a**（Lit 20）：*Community participation — a review of empirical findings* — 主题为参与水平与结果（QoL / Well-being）
  - **2009b**：*Impact of environmental factors on community participation* — 主题为环境因素对参与的影响，包含 family involvement、social support 等变量
- REL-000013 的核心关系（Caregiver Burden → Community Participation）在内容上更接近 2009b，但文献库标注的是 Lit 20（2009a）
- 未能通过现有访问渠道确认 2009a 是否直接讨论 Caregiver Burden 作为参与的约束因素

**Gap Type:** Citation Attribution Uncertainty（新识别，见 Governance Notes OBS-004）

**Action Taken:**
- 不生成 EA
- 不修改 REL-000013
- 标记为 KIR Follow-up

**Required Action（Resolution）:**
- 获取 Verdonschot 2009a 全文，确认是否包含 Caregiver Burden → Participation 的直接证据
- 或获取 2009b 全文，确认 REL-000013 是否应改引 2009b
- 确认后更新文献库 Lit 20 的 relevant_rels 标注

---

---

### KIR-004 — Wrong EPQ Mapping

**Date:** 2026-07-07
**Status:** Resolved
**Priority:** Medium

**Issue:**
EPQ 中 Lit 4（Carter et al. 2016）被错误映射到 REL-000094。

**Root Cause:**
- Lit 4 主题：Peer Support Arrangements → School Inclusion / Social Participation
- REL-000094 Source：VAR-000010 Peer Victimization（构念完全不同）
- REL-000094 的正确 primary_citation 是 Lit 1（Peer Victimization in Youth with ASD），与 Carter 2016 无关

**Issue Type:** Wrong EPQ Mapping（问题在 EPQ/Literature Index，不在 REL）

**Action Taken:**
- EPQ 中移除 Lit 4 → REL-000094 映射
- 记录 Candidate REL（见下）

**Candidate REL Identified:**
```
Peer Support Arrangements
    ↓
Community Participation / School Inclusion
Effect: Protective
Evidence: Carter et al. 2016 RCT（Tier 2）
Status: Candidate REL — 待 Network Review
```

---

### KIR-005 — Source–Citation Mismatch

**Date:** 2026-07-07
**Status:** Open — Pending Network Review
**Priority:** High

**Issue:**
REL-000095 的 Source Definition 与 Primary Citation 指向不同的构念。

| 字段 | 内容 |
|------|------|
| Source VAR | VAR-000011 Friendship Support Satisfaction |
| Primary Citation | Carter et al. 2016（Peer Support Arrangements RCT） |
| 矛盾 | Peer Support Arrangements ≠ Friendship Support Satisfaction |

**Issue Type:** Source–Citation Mismatch
- 不是 Wrong Mapping（Citation 本身没有挂错文献）
- 不是 Citation Attribution Uncertainty（Citation 可以访问确认）
- 而是 REL 内部的 Source Definition 与 Primary Citation 所代表的构念不一致

**修复选项（待 Network Review 决定）：**

| 选项 | 动作 | 影响 |
|------|------|------|
| A | 修改 Source VAR → Peer Support / Peer Support Satisfaction | REL 定义改变 |
| B | 修改 Primary Citation → 真正支持 Friendship Support Satisfaction 的文献 | Citation 改变 |
| C | 拆分为两条 REL | 图谱扩展 |

**Action Taken:**
- 不修改 REL-000095
- 不生成 EA
- 标记为 Source–Citation Mismatch，待 Network Review

---

## KIR Type Registry（更新）

| Issue Type | 修复对象 | 案例 |
|-----------|---------|------|
| Semantic Duplicate | REL | KIR-001 |
| Wrong Mapping | Literature Index | KIR-002 |
| Citation Attribution Uncertainty | Citation | KIR-003 |
| Wrong EPQ Mapping | EPQ | KIR-004 |
| **Source–Citation Mismatch** | **REL Definition** | **KIR-005** |

---
