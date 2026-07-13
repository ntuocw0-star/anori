# Repository Architecture v2.0
冻结日期：2026-07-12
验证基础：Sprint 18–22 · 五个 Reference Module · 四篇 Cross-concept EA · ET-000027

---

## Layer 1 — Evidence
Evidence Articles（EA）
单一来源的文献证据单元

## Layer 2 — Evidence Integration
Evidence Topics（ET）
跨 EA 的主题综合，聚焦单一 Concept 内的知识层

## Layer 3 — Knowledge
Knowledge Articles（KA）
Concept-level 知识综合，以 ET 为输入

Series
导航与模块概览，组织 EA/ET/KA

## Layer 4 — Analytics
Lifecycle（Seed / Growing / Established）
Coverage Score（UFC / KFC / Overall）
Dependency Map
Repository Statistics

---

## Cross-concept Layer
（Sprint 22 验证，与四层架构并列存在）

Cross-concept EA
  一篇 EA 同时进入多个 Concept 的 ET（Multi-ET Evidence）
  已验证：EA-000016 · EA-000017 · EA-000018 · EA-000019

Cross-concept ET
  连接多个 Reference Module 的跨链 Evidence Topic
  不属于任何单一 Concept 的 KA
  已验证：ET-000027（四 EA 支撑）

Cross-concept KA（Future）
  条件：Cross-concept ET ≥ 3，跨链连接成熟后评估
  不含 Series（当前阶段为 Topic，非 Module）

---

## Shared Evidence Pool 原则
一篇 EA 可以同时：
  ① 属于某个 Concept（concept_refs.primary）
  ② 进入该 Concept 下多个 ET（supported_by）
  ③ 进入 Cross-concept Layer（knowledge_role: Cross-concept）

三个角色不互斥，由 EA 的 knowledge_role 与 concept_refs 字段共同描述

---

## 设计原则
Concept-centric Layer（Layer 1–4）：
  处理单一 Concept 内部的知识组织
  结构：EA → ET → KA → Series

Cross-concept Layer（并列）：
  处理跨 Concept 的连接与综合
  结构：Cross-concept EA → Cross-concept ET → Cross-concept KA（future）

Series 属于 Layer 3（Knowledge），不属于 Layer 4（Analytics）
Analytics 负责计算状态，不承载知识内容
