# Intervention Production Workflow v1.0

**Anori Knowledge Operating System**
Created: 2026-07-07
Status: Active（Sprint 7 起正式运行）

---

## 设计原则

> 每一个进入 KOS 的 Intervention，都应该经过相同的生产流程，确保 INT / IREL / IEA 三层资产的一致性与可追溯性。

---

## 完整流程

```
Literature / Evidence Source
        ↓
Step 1：Intervention Identification
        ↓
Step 2：Concept Mapping
        ↓
Step 3：INT Check（重复检查）
        ↓
Step 4：IREL Check（关系检查）
        ↓
Step 5：Evidence Appraisal
        ↓
Step 6：Tier Assignment
        ↓
Step 7：INT Creation
        ↓
Step 8：IREL Creation
        ↓
Step 9：IEA Creation
        ↓
Step 10：Repository Integration
```

---

## 各步骤详述

### Step 1 — Intervention Identification

**目标：** 确认候选是否为真正的 Intervention。

**判断标准（必须全部满足）：**

```
✅ 意도성（Intentionality）：为特定目的设计
✅ 구조성（Structure）：有协议或指南
✅ 실행조건（Activation Condition）：需要人为实施才有效果
✅ 목표대상（Target）：针对特定人群或系统
```

如果不满足任一条件 → 不进入 IREL，考虑作为 Natural REL。

---

### Step 2 — Concept Mapping

**目标：** 确认 Intervention 的构念边界。

检查三轴分类：
- **Target**：Child / Parent / Family / School / Community / System
- **Delivery Mode**：Individual / Group / Technology / Environment
- **Domain**：Educational / Clinical / Family Support / Community / Transition

---

### Step 3 — INT Check

**目标：** 确认 KOS 中是否已存在相同 Intervention。

```
搜索 INT Registry
        ↓
已存在 → 使用现有 INT，进入 Step 4
不存在 → 进入 Step 7（INT Creation）
别名重复 → 合并 Aliases，不重复建立 INT
```

---

### Step 4 — IREL Check

**目标：** 确认 Intervention → Outcome 关系是否已存在。

```
搜索 IREL Registry
        ↓
已存在 → 进入 Step 5（Evidence Appraisal，补充证据）
不存在 → 进入 Step 8（IREL Creation）
```

**检查项目：**
- Source INT ID 是否一致
- Target VAR ID 是否一致
- Effect Polarity 是否一致

---

### Step 5 — Evidence Appraisal

**目标：** 评估证据质量。

**IREL Tier 判定：**

| Tier | 设计类型 |
|------|---------|
| 1 | Meta-analysis of RCTs |
| 2 | Single / Multi-site RCT |
| 3 | Quasi-experimental / SCED |
| 4 | Pre-post without control / Observational |

**必查项目：**
- Study design（确认 Tier）
- N（样本量）
- Fidelity reporting（是否报告，水平如何）
- Outcome measurement（与 VAR 是否对齐）
- Effect size（大/中/小）

---

### Step 6 — Tier Assignment

**目标：** 确定 Evidence Grade。

```
Tier 1 → Grade: High
Tier 2（High Fidelity）→ Grade: High
Tier 2（Low/Unknown Fidelity）→ Grade: Moderate
Tier 3 → Grade: Moderate
Tier 4 → Grade: Low
Only Expert Opinion → Grade: Insufficient
```

---

### Step 7 — INT Creation

**目标：** 建立 Intervention Object。

**必填字段：**
```
id: INT-00000X
name: 官方名称
aliases: 常用别称
definition: 内容与机制
target_population: 目标人群
delivery_mode: 传递方式
domain: 领域
intensity: 强度（会话数/时长/频率）
implementation_context: 实施环境
fidelity_instrument: 忠实度测量工具（如有）
```

---

### Step 8 — IREL Creation

**目标：** 建立 Intervention → Outcome 关系。

**必填字段：**
```
id: IREL-00000X
source_type: Intervention
source_id: INT-00000X
relation: affects（固定）
target_var: VAR-00000X
effect_polarity: Positive / Negative / Mixed
effect_size: Large / Moderate / Small / Unknown
evidence_grade: High / Moderate / Low / Insufficient
evidence_tier: 1 / 2 / 3 / 4
fidelity_reported: true / false
fidelity_level: High / Moderate / Low / Not reported
primary_evidence: 文献引用
population: [可选]
```

---

### Step 9 — IEA Creation

**目标：** 建立 Intervention Evidence Card。

**格式：** 与 Natural EA 平行，但增加 IREL 专有字段：
```
id: IEA-00000X
supports_irel: IREL-00000X
supports_int: INT-00000X
evidence_tier: IREL Tier
study_design: 设计类型
n: 样本量
fidelity: 忠实度信息
```

---

### Step 10 — Repository Integration

**更新以下内容：**
- INT Registry（新增或更新条目）
- IREL Registry（新增条目）
- IEA Index（新增条目）
- KGO Log（记录本次操作）
- Backup（rels.json / vars.json 如有更新）

---

## Pattern 支持

**IRM 三种连接模式均支持：**

```
Pattern 1（单一 Outcome）：
INT → IREL → VAR_A

Pattern 2（链式 Outcome）：
INT → IREL → VAR_A → REL → VAR_B → REL → VAR_C

Pattern 3（多重 Outcome）：
INT → IREL_A → VAR_A
INT → IREL_B → VAR_B
INT → IREL_C → VAR_C
```

Parent Training 将验证 **Pattern 3**（首次验证）。

---

## Sprint 7 KPI Dashboard

| 指标 | Sprint 7 起始 | Sprint 7 目标 |
|------|-------------|-------------|
| INT | 1 | **6–10** |
| IREL | 1 | **6–10** |
| IEA | 1 | **6–10** |
| Intervention Domains | 1（Educational） | **≥5** |
| IREL Tier 1–2 Coverage | 100%（1/1） | 维持 ≥90% |
| Natural Layer EA | 31 | 持续增长 |

---

## 生产优先级

| 优先级 | Intervention | 预期 IREL | 验证模式 |
|--------|-------------|---------|---------|
| **P1** | **Parent Training** | Parent Stress / Parenting Quality / Family Functioning / FQoL | Pattern 3（首次）|
| P2 | Family-centered Practice | Family Functioning / FQoL | Pattern 3 |
| P3 | Social Skills Training | Community Participation / Belonging | Pattern 1/3 |
| P4 | AAC Intervention | Community Participation / QoL | Pattern 1 |
| P5 | Positive Behavior Support | Child Mental Health / Participation | Pattern 3 |

---

## 与 Natural REL Workflow 的对比

| 步骤 | Natural Workflow | Intervention Workflow |
|------|----------------|----------------------|
| 主要输入 | 文献 + VAR 映射 | 文献 + Intervention 识别 |
| 核心资产 | REL + EA | INT + IREL + IEA |
| 关系动词 | increases/decreases/enables | affects（固定）|
| 额外字段 | 无 | Fidelity（必填）|
| Tier 体系 | Workflow v1.2 | IREL Tier 1–4 |

---

*Intervention Production Workflow v1.0 — Created 2026-07-07*
*Sprint 7 Phase A 产出*
*Next: Phase B — Parent Training Production（INT-000002）*
