# Sprint 5 — Final Review

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: **Sprint Closed**

---

## Sprint 5 完整演进

```
Phase A：Repository Gap Resolution
        ↓
Phase B：Citation Recovery
        ↓
Phase C：Knowledge Growth
        ↓
Phase C Final：Intervention REL Assessment
```

---

## Sprint 5 KPI

| 指标 | Sprint 5 Start | Sprint 5 End |
|------|---------------|-------------|
| EA Total | 26 | **31** |
| REL Total | 101 | **104** |
| VAR Total | 49 | **50** |
| High REL Coverage | 81.3% | **84.4%** |
| Repository Gaps Open | 1 | **0** |
| Candidate RELs Promoted | 0 | **3** |
| New Ontology VARs | 0 | **1（VAR-000050）** |
| New Design Patterns | 0 | **2（population field / Ontology Expansion）** |

---

## Sprint 5 方法学产出

| OBS | 内容 | 状态 |
|-----|------|------|
| OBS-011 | Repository Gap = Normal State | Candidate（1 case） |
| OBS-012 | Strategic NR Trigger | Candidate（1 case） |
| **OBS-013** | Citation Recovery Valid Termination | **✅ v1.3 Ready（2 cases）** |
| **OBS-014** | Citation Recovery as Knowledge Discovery | **✅ v1.3 Ready（2 cases）** |
| OBS-015 | Ontology vs Metadata Extension | Active（1 case） |

---

## Sprint 5 最重要的成果

**不是 EA 数量，而是三种知识增长机制的验证：**

| 机制 | 案例 | 意义 |
|------|------|------|
| Metadata Expansion | REL-000102（population field） | Concept 不变时的轻量扩展 |
| Ontology Expansion | VAR-000050（Unmet Family Needs） | Concept 范围变化时的正确扩展 |
| Candidate REL Promotion | REL-000102/103/104 | Governance → Knowledge Discovery |

**以及最重要的架构决策：**

> Intervention is not a relationship pattern — it is a causal mechanism activated by design. Natural Knowledge Graph 与 Intervention Knowledge Graph 应分层，而不是混合。

---

## Sprint 5 Closing Statement

> Sprint 5 不仅扩展了 Knowledge Graph，还定义了它的边界。
> 知道什么不应该放进来，和知道什么应该放进来，同等重要。

---

# Sprint 6 — Starting State

**主题：Intervention Layer Design**

---

## 设计原则（冻结）

> **Natural Knowledge Graph 与 Intervention Knowledge Graph 分层，而不是混合。**

**分层的依据：**

| 维度 | Natural REL | Intervention REL |
|------|-------------|-----------------|
| 存在方式 | 自然状态间的关系 | 程序运行时才存在 |
| 测量 | 连续变量（高/低）| 是否实施 + 充实度 |
| 证据类型 | SR, Longitudinal, Regression | RCT, Quasi-experimental |
| Tier 标准 | 现有 Workflow v1.2 | 需要独立定义 |

---

## Sprint 6 四个核心问题

```
Q1：Intervention Concept 建模
        如何定义 Intervention VAR？
        与 Natural VAR 的区别是什么？

Q2：Intervention Evidence Tier
        RCT 与 SR 的 Tier 如何定义？
        Fidelity 如何纳入评估？

Q3：Intervention → Outcome 连接方式
        Intervention 如何连接现有 Outcome VAR？
        是新 REL 类型，还是独立 IREL？

Q4：与现有 Knowledge Graph 的关联
        Intervention Layer 如何引用 Natural REL 的概念？
        是继承还是引用？
```

---

## Sprint 6 第一个评估目标

完成设计框架后，第一个重新评估的 Candidate：

```
Peer Support Arrangements
        ↓
Community Participation
（Carter et al. 2016 RCT）
```

---

*Sprint 5 Final Review — 2026-07-07*
*Sprint 6 Starting State — Intervention Layer Design*
