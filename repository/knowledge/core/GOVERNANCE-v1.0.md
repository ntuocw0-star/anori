# Repository Governance v1.0
冻结日期：2026-07-12
适用范围：Anori Knowledge Repository
配套文档：Repository Architecture v2.0 · Template v1.2

---

## 定位
Architecture v2.0 定义 Repository 的结构形态。
Governance v1.0 定义 Repository 的演化规则。

---

## G1 — Evidence-first Principle
任何知识节点必须由 EA 支撑，不能为填补结构而创建。

EA → ET → KA

具体规则：
- ET 必须在至少一篇 Validator PASS 的 EA 建立后才能创建
- KA 必须在覆盖其主要章节的 ET 全部 Validator PASS 后才能建立为 Functional Complete
- Cross-concept ET 必须在 ≥ 3 篇 Cross-concept EA 确认共同 Pattern 后才能建立
- 不允许以"预留结构"为理由创建内容为空的 ET 或 KA

---

## G2 — Pattern-before-Template Principle
规范必须从验证案例中归纳，不能从假设设计中演绎。

冻结流程：
  实际案例出现 → 多个独立案例验证（通常 ≥ 3）→ Pattern 提炼（记入 Backlog）
  → 再次积累案例 → 正式冻结为 Template / Vocabulary / Architecture

违禁操作：
- 不能先设计 Template 再找案例套用
- Backlog 候选不等于已冻结规范，不能作为强制标准执行
- 一个案例不足以冻结，无论案例质量多高

---

## G3 — Multi-use Evidence Principle
一篇 EA 可以同时服务于多个知识层级，不产生冲突。

一篇 EA 可以同时：
- 属于某个 Concept（concept_refs.primary）
- 进入该 Concept 下的多个 ET（supported_by）
- 进入其他 Concept 的 ET（concept_refs.secondary）
- 进入 Cross-concept Layer（knowledge_role: Cross-concept）

规则：
- EA 的 primary Concept 唯一，secondary Concept 可以多个
- Cross-concept EA 必须在 Cross-concept Position 中清楚说明其对各 Concept 的定位

---

## G4 — Boundary Principle
知识边界必须在 EA 层面明确，不能在 ET 或 KA 层面隐含扩展。

已确认边界规则：
| 边界 | 规则 |
|------|------|
| QoL vs FQOL | Parent QoL ≠ Family Quality of Life；不能互换使用 |
| Correlation vs Causation | Meta-analysis 提供相关证据，不支持因果推断 |
| Conceptual Reference vs Measurement Evidence | 概念相关 ≠ 直接测量证据 |
| Candidate vs Frozen | Backlog 候选 ≠ 已冻结规范 |
| Attendance vs Involvement | fPRC 双维度不互换，测量策略不同 |

---

## G5 — Freeze Principle
冻结是 Repository 架构稳定性的核心机制，须遵循统一标准。

冻结条件（通用）：
① 多个独立案例验证（通常 ≥ 3，Cross-concept 类 ≥ 4）
② 案例之间无结构冲突
③ 冻结后不需要立即进行 Revision
④ 有明确的适用范围描述

升版规则：
- Minor Revision（v1.1 → v1.2）：修正措辞，无结构变化
- Major Revision（v1 → v2）：增加新层级或改变核心原则，需独立案例验证

---

## 状态三系统分离原则
Validator    → 判断文档质量（结构、引用、边界、逻辑）
Repository Status → 判断证据成熟度（Conditionally Ready / Full）
Analytics    → 判断生命周期（Seed / Growing / Established）

三个系统彼此独立，Analytics 重新计算不影响 Validator。
