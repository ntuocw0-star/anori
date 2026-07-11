# Evidence Upgrade Workflow v1.3 — Draft

**Anori Knowledge Operating System**
Status: **DRAFT — Candidate Only**
Based on: Workflow v1.2（Current Frozen）
Created: 2026-07-07

> 本文件收录尚未正式写入 Workflow 的 Candidate 原则。
> 所有条目均经过至少两个独立案例验证，但尚未正式冻结。
> 正式发布时合并入 Workflow v1.3。

---

## Candidate Addition 1 — Repository Gap（OBS-011）

**来源：** Sprint 5 Phase A，REL-000003，EA-000027
**验证次数：** 1次（建议再积累 1 次再正式写入）

**原则：**

> Repository Gap is a normal production state, not a governance exception.
> External Literature Search is the standard procedure for Repository expansion.

**建议写入位置：** Step 3（Direct Search）之前，新增 Repository Check 步骤

**流程草案：**

```
Repository Check
        ↓
Hit → Evidence Appraisal
        ↓
Miss → Repository Gap Confirmed
        ↓
External Literature Search（正式触发）
        ↓
Stopping Rule（≥5轮）
        ↓
EA Generated / Best Available Evidence
```

---

## Candidate Addition 2 — Strategic Network Review Trigger（OBS-012）

**来源：** NR-002，Sprint 5 Phase B
**验证次数：** 1次

**原则：**

> When Evidence Production is blocked primarily by accumulated KIRs, a strategic Network Review may be initiated before the formal threshold if it is expected to unlock multiple High REL Evidence Cards. This is a scheduling decision rather than a workflow change.

**建议写入位置：** Network Review 触发条件，新增 Strategic Trigger 分支

**触发条件草案：**

| 触发类型 | 条件 | 说明 |
|---------|------|------|
| Threshold Trigger | Fresh Open KIR ≥ 5 | 正式规则（Workflow v1.2） |
| Strategic Trigger | Evidence Production blocked by KIR accumulation | 调度决策，项目负责人判断 |

---

## Candidate Addition 3 — Citation Recovery Valid Termination（OBS-013）

**来源：** KIR-008（REL-000094）+ KIR-005（REL-000095）
**验证次数：** ✅ **2次独立案例验证完成**

**原则：**

> Citation Recovery may legitimately terminate with "Pending Assignment" when exhaustive search confirms an Outcome Gap. This is a valid completion state rather than a failed recovery.

**建议写入位置：** Step 10 Citation Recovery，新增终止分支

**流程草案（正式语言）：**

```
Citation Recovery
        ↓
Three-Stage Search
        ↓
──────────────────────────────────────────
Branch A: Direct Evidence Found
        ↓
Primary Citation Assigned
        ↓
KIR Resolved
──────────────────────────────────────────
Branch B: No Direct Evidence After 3 Rounds
        ↓
Confirm: Outcome Gap / Construct Gap / Direction Gap
        ↓
citation_status: pending_assignment（Stable）
        ↓
KIR Status: Pending（Not Failed）
        ↓
Record evidence_gap_type
        ↓
Valid Termination — Await Future Evidence
──────────────────────────────────────────
```

**关键区分：**

| 状态 | 含义 |
|------|------|
| Citation Assigned | 找到直接证据，Citation Recovery 成功 |
| Pending Assignment（Stable） | Outcome Gap 确认，Recovery 完成但无法指定 Citation |
| Failed | 不使用此状态——Recovery 过程有缺陷，需重新执行 |

---

## Promotion Checklist

| OBS | 验证次数 | 是否可写入 v1.3 |
|-----|---------|--------------|
| OBS-011（Repository Gap） | 1 | 建议再积累 1 次 |
| OBS-012（Strategic Trigger） | 1 | 建议再积累 1 次 |
| OBS-013（Citation Recovery Termination） | **2** | **✅ 可正式写入** |

---

## Next Review Trigger

Workflow v1.3 正式发布条件：
- OBS-011 再积累 1 个案例
- OBS-012 再积累 1 个案例
- 或 Workflow v1.2 出现需要结构性修改的新模式

---

*Workflow v1.3 Draft — Created 2026-07-07*
*Status: Candidate — Do not use as authoritative reference*
*Current Frozen Workflow: v1.2*
