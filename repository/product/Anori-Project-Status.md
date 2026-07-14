# Anori · Project Status

**更新：** 2026-07-14（Connection Standard v1.0 冻结 · Sprint 23 基础设施完成）
**性质：** 长期维护的状态参考文档，不属于任何 Sprint

---

## 三层底层能力（架构级里程碑）

| 能力 | 建立于 | 状态 |
|------|--------|------|
| Original Resource Production | Sprint 20 | ✅ 完成 |
| External Resource Governance | Sprint 21 | ✅ 完成 |
| Foundation Knowledge Layer | Sprint 22 | ✅ 完成 |
| Connection Layer | Sprint 23C | ▶️ 规划中 |

这三层不是独立模块，而是整个 Anori 的底层结构：

```
Evidence
    ↓
External Resource Governance（治理规则）
    ↓
Foundation Knowledge（基础解释框架）
    ↓
Connection Layer（连接层）← Sprint 23C 目标
    ↓
Journey / Resource / Knowledge（面向家庭的产品层）
```

**Connection Layer 定义：** 不是页面，而是内容如何流动的一套系统。包括 Journey → Knowledge、Knowledge → Resource、Resource → Knowledge、KA ↔ KA、Resource ↔ Resource 等双向连接。

以后每个 Sprint 都是在这个结构上继续扩展，而不是一串任务列表。

---

## Standards & Models

| 资产 | 版本 | 状态 |
|------|------|------|
| Original Resource Standard (ORS) | v1.0 | ✅ Frozen |
| Resource Item Data Model | Sprint 20A | ✅ Stable |
| Knowledge Article Model | Sprint 21B | ✅ Stable |

## Governance Assets

存放于 `repository/governance/external-resource-policies/`

| 资产 | 状态 | 核心结论 |
|------|------|---------|
| WHO-Policy（CC BY-NC-SA 3.0 IGO）| ✅ Frozen | summary_only；中文导读需独立撰写 |
| NICE-Policy v1.0 | ✅ Frozen | link_only；国际使用须申请授权；KA 独立撰写 |
| Connection Standard v1.0 | ✅ Frozen · Sprint 23C-0 | 五种连接类型，四条设计原则，Connection ≠ Navigation |

**三组织默认策略矩阵：**

| 组织 | 默认策略 | Anori 主要工作 |
|------|---------|---------------|
| CDC | open_license · 精选 + 直链 | Resource Item + url_verified |
| WHO | CC BY-NC-SA · 非商业可摘要 | 中文导读 KA |
| NICE | Crown Copyright · 国际须授权 | 官方链接 + 独立 KA |

---

## Foundation Knowledge Layer

> Foundation Knowledge Layer 是 Anori Knowledge 的第一层骨架，用于回答跨主题、跨资源、跨 Journey 的基础问题。

| ID | 名称 | 状态 | 知识角色 | 系列 |
|----|------|------|---------|------|
| KA-Visual-001 | 视觉支持：为什么它能帮助孩子 | internal_review | 工具层 | Visual 系列 |
| KA-Family-001 | 孩子的发展，不只是孩子自己的事 | internal_review | 环境层 | Family 系列 |
| KA-Participation-001 | 为什么技能不等于参与 | internal_review | 目标层 | Participation 系列 |

**逻辑链：**
工具帮助孩子理解和表达 → 环境支持孩子持续发展 → 参与是发展的最终目标

**第七章连接方式（固定）：**
每篇 Foundation KA 的第七章（或最后正文章）显式引用这条链，让新读者知道自己在哪里。

---

## Original Resources

| ID | 名称 | 状态 | 版本 | 备注 |
|----|------|------|------|------|
| RI-ANORI-0001 | First–Then Visual Support Card | ✅ ready | v1.0.0 | Screen Edition 待 v1.1 |
| RI-ANORI-0002 | 每周家庭观察记录 | ✅ ready | v1.0.0 | 物理打印 QA 待 v1.1 |

---

## External Resources (CDC)

| ID | 名称 | 状态 | 中文版 | anori_effort | related_ka |
|----|------|------|--------|-------------|------------|
| RI-CDC-0001 | Developmental Milestones | url_verified | ❌ | summary | — |
| RI-CDC-0002 | Milestone Checklists | url_verified | ✅ PDF | direct_link | — |
| RI-CDC-0003 | LTSAE Family Materials | url_verified | ✅ PDF | direct_link | — |

## External Resources (WHO)

| ID | 名称 | 状态 | 中文版 | anori_effort | knowledge_level | related_ka |
|----|------|------|--------|-------------|----------------|------------|
| RI-WHO-0001 | Nurturing Care Framework | url_verified | ❌ | summary | foundation | KA-Family-001 |
| RI-WHO-0002 | ICF Framework | url_verified | ❌ | summary | framework | KA-Participation-001 |
| RI-WHO-0003 | Nurturing Care Practice Guide | url_verified | ❌ | summary | practice | KA-Family-001 |

## External Resources (NICE)

| ID | 名称 | 状态 | anori_effort | guideline_scope | clinical_pathway |
|----|------|------|-------------|----------------|-----------------|
| — | NICE-Policy v1.0 | ✅ policy_verified | — | — | — |
| RI-NICE-0001 | Autism in under 19s: recognition, referral & diagnosis (CG128) | url_verified | link_only | recognition · referral · diagnosis | early_identification |
| RI-NICE-0002 | Autism in under 19s: support & management (CG170) | roadmap | link_only | support · management | ongoing_support |
| RI-NICE-0003 | Autism in adults: diagnosis & management (CG142) | roadmap | link_only | diagnosis · management | adult_services |

---

## Known Gaps

| 类型 | 内容 | 优先级 |
|------|------|--------|
| Knowledge Gap | 三篇 KA 的 EA ID 待补充 | 中 |
| Knowledge Gap | KA-Attachment-001（规划中） | 低 |
| Knowledge Gap | KA-EarlyIntervention-001（规划中） | 低 |
| Inventory Gap | WHO 3 条 url_verified · NICE CG128 url_verified · CG170/CG142 在 Roadmap | — |
| Verification Gap | CDC reuse_status 细则（摘要边界） | 中 |
| Resource v1.1 | RI-ANORI-0001 Screen Edition | 低 |
| Resource v1.1 | RI-ANORI-0002 物理打印 QA + 细节优化 | 低 |

---

## Sprint 状态

| Sprint | 内容 | 状态 |
|--------|------|------|
| Sprint 18 | Analytics · EA Pipeline · Library 导航 | ✅ 完成 |
| Sprint 19 | Resource 筛选 · Enriched 卡片 · Journey early action | ✅ 完成 |
| Sprint 20A | Resource Item Data Model | ✅ 完成 |
| Sprint 20B-1 | ORS v1.0 | ✅ 冻结 |
| Sprint 20B-2 | RI-ANORI-0001 | ✅ Ready |
| Sprint 20B-3 | RI-ANORI-0002 | ✅ Ready |
| **Sprint 20** | **Original Resource Production** | **✅ 正式冻结** |
| Sprint 21A | CDC Resource Inventory（3 条） | ✅ 冻结 · 3 Items url_verified |
| Sprint 21B | KA-Visual-001 | ✅ 收口（internal_review） |
| Sprint 21C-1 | WHO Resource Inventory（3 条） | ✅ 冻结 · 3 Items url_verified |
| Sprint 21C-2 | NICE Rights & Resource Strategy | ✅ 冻结 · NICE-Policy v1.0 |
| **Sprint 21** | **External Resource Governance** | **✅ 正式冻结** |
| Sprint 22A | KA-Family-001 | ✅ 收口（internal_review） |
| Sprint 22B | KA-Participation-001 | ✅ 收口（internal_review） |
| Sprint 22C | RI-NICE-0001 (CG128) | ✅ 冻结 · url_verified · 验证 NICE Policy 可执行性 ✅ |
| Sprint 22D | RI-ANORI-0001 v1.1 | 待定（需真实使用反馈） |

---

## 暂缓事项

- 第三个 Knowledge Hub 建设
- Resource 页面大规模重构
- 批量导入剩余 46 条 EA
- 37 个 Seed 概念扩充
- 资源封面统一模板（Cover Template）

---

## 内容生产流水线（三种模式）

| 类型 | 流程 | 说明 |
|------|------|------|
| Original Resource | ORS → QA → Ready | 原创资源，完整生命周期 |
| External Resource | Evidence-first → Verification → url_verified | 外部资源，核实驱动 |
| Foundation KA | Scope → Internal Review | 知识文章，先边界后正文 |

不同类型的内容有不同的生产流程。核实层是数据生产的一部分，不是 QA。

---

## Repository 原则

每完成一个 Sprint，只保留三样东西：
1. **正式资产**（文档、JSON、资源文件）
2. **状态同步文档**（本文件）
3. **Backlog**

规范应该服务产品，而不是驱动产品。

---

*本文件在每个 Sprint 收口时更新，不记录过程，只记录状态。*
