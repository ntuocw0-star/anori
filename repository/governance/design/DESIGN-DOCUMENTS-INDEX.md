# Repository Design Documents Index
版本：v2.3（Sprint 23）

---

## 文档体系分工

| 文档类型 | 职责 |
|---------|------|
| Architecture | Repository 是什么（静态结构） |
| Governance | Repository 如何运行（规则） |
| Design Documents | Repository 如何设计（实现规范） |
| Evolution Log | Repository 为什么演化成现在这样（历史） |
| Backlog | Repository 将来可能如何演化（未来） |
| Release Notes（Sprint 24 新增）| 这一版新增了什么（面向使用者） |

---

## Sprint 22 新增 Design Documents

### Repository Design Documents 体系
正式命名时间：Sprint 22
分类：
  Architecture Documents
    Repository Architecture v2.0（冻结）
    Repository Governance v1.0（冻结）
  Knowledge Planning Documents
    Taxonomy · Concept Profile · Coverage Matrix
    Evidence Cluster · Sprint Roadmap · Template Backlog

### Evidence Cluster Format v1.0
字段：cluster_id · cluster_type · cluster_role · included_ea · purpose
已建立 Cluster：
  cluster-beach-center-fqol（Measurement Development）
  cluster-dunst-family-systems（Theory Elaboration）
  cluster-fprc-framework（Framework Evolution）

---

## Sprint 23 新增 Design Documents

### Participation Taxonomy v1.0
内容：Participation 领域分类 · Primary/Secondary Scope · 概念边界
关键决策：
  - 不为各 Domain 独立建立 Concept（当前）
  - Attendance + Involvement 双维度为核心

### Concept Profile Format
字段：id · concept_type · concept_maturity · concept_origin
  primary_unit_of_analysis · primary_measurement_unit
  primary_evidence_type · primary_scope · evidence_cluster
  typical_cross_links · architecture_notes · validation_status
首个案例：concept-participation（Hierarchical · Mature International Framework · Language Harmonization）

### Measurement ET Responsibilities v1.0
Measurement ET 回答：测量什么 · 为什么 · 哪类工具 · 覆盖哪些构念
Measurement ET 不回答：信效度优劣 · 最好工具 · 临床推荐

### Measurement Architecture Notes v1.0
三种测量演化路径：
  Pattern A（Participation）：Framework → Framework Mapping → Instrument
  Pattern B（FQOL）：Concept Generation → Instrument Development → Validation
  Pattern C（Family Functioning）：Framework → Multiple Existing Instruments → Evidence

### Measurement ET Readiness Check v1.0
门槛 A：≥ 2 篇 Measurement Review
门槛 B：1 篇高质量 Review + ≥ 2 篇 Instrument Development

---

## Template v1.2 冻结规范（9条）

① 五层 Repository 架构职责分离（EA → ET → KA → Series → Analytics）
② Concept-specific KA Structure（公共骨架固定，中间层自然形成）
③ Analytics 职责分离（KA/Series 只记录状态值）
④ Lifecycle Gate v1（Seed / Growing / Established）
⑤ Coverage Scoring Rule（Layer Score = 节点平均值）
⑥ Evidence Type Controlled Vocabulary v1.1（4类正式 + 候选）
⑦ Measurement 表列名标准（Instrument · Version · Type · Primary Purpose）
⑧ Series 职责边界（Organize / Navigate / Overview · No Evidence · No Synthesis）
⑨ KA/Series Analytics 字段规范（只写状态）

---

## Template v1.1 Backlog 积累（18+条候选）

Framework Evolution Pattern（候选）
Concept ET Build Pattern（候选）
Knowledge Article Build Pattern（候选）
Reference Module Completion Principle（候选）
Concept Evolution Principle（候选）
Cross-concept EA Pattern（候选）
Multi-ET Evidence Principle（候选）
Cross-concept Implications 标准化格式（候选）
Measurement Development Pattern（候选）
Measurement ET 两类模式（候选）
Concept Development Pattern（讨论中）
Evidence Type：Conceptual Analysis（候选）
Evidence Type：Scoping Review（候选）
concept_type 字段（候选）
concept_maturity 字段（候选）
concept_origin 字段（候选）
Cluster Role 字段（候选）
Growing Gate 语义演化（候选）
QoL vs FQOL 边界规则（已确认 · 待正式冻结）
