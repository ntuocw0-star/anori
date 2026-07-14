# EA Standard v2.0

**冻结日期：** 2026-07-14
**适用范围：** EA-000001 ～ 所有未来 EA
**迁移范围：** EA-000001～EA-000017（全部）

---

## 标准字段（Metadata Block）

```yaml
id: EA-XXXXXX                          # 全局唯一连续编号，永不含主题前缀
tier: 1                                # 1=Sys Review/Meta | 2=Guideline/EBP | 3=RCT/SCD | 4=Practice Guide
topic: ""                              # 对应 topics.json 中的 topic id，如 topic-communication
series: ""                             # 对应 series.json 中的 series id，如 series-communication
evidence_type: systematic_review       # systematic_review | meta_analysis | rct | scoping_review | guideline | ebp_report | practice_guide | qualitative
confidence: High                       # High | Moderate | Low | Very Low（基于 GRADE 或综述质量）
is_foundational: false                 # true = 知识域核心文献，KA 会反复引用
reading_time: "X min"                  # 内部阅读时间估算
source:
  paper_title: ""                      # 完整论文标题
  authors: []                          # 作者列表
  journal: ""
  year:
  volume:
  issue:
  pages: ""
  doi: ""
  pubmed:                              # PMID（如有）
  access: ""                           # Open Access | Paywall | Preprint
  url: ""                              # 开放获取链接（如有）
population: ""                         # 研究人群，如 "ASD 儿童，2–12 岁"
setting: ""                            # 研究场景，如 "家庭、学校、临床"
intervention: ""                       # 干预内容
comparator: ""                         # 对照组（无则留空）
outcome: ""                            # 主要结果指标
evidence_summary: ""                   # 2–3 句：研究发现了什么
quality_assessment: ""                 # 方法学质量评估简述
supports_et: []                        # 本 EA 支撑的 ET ID 列表
related_journey: []                    # 相关 Journey ID
related_ka: []                         # 相关 KA ID
concept_refs:
  primary: ""
  secondary: []
```

---

## 文档结构（Layer 结构）

```
## Source
[完整引用信息]

## Metadata
[yaml block]

## Layer 0 · 为什么值得读
[一段话，说明这篇 EA 在 Anori 知识体系里的独特价值]

## Layer 1 · Research Question
[研究真正回答的问题]

## Layer 2 · Key Findings
[核心发现，分主题列出]

## Layer 3 · Parent Meaning
[转译给家长的含义，用"很多家长后来才发现……"格式]

## Layer 4 · Professional Meaning（可选）
[给专业人员的启示，如无则省略]

## Layer 5 · Actionable Implications
[今天可以做什么 / 何时寻求帮助 / 什么是正常的困难]

## Layer 6 · Anori Mapping
[ET / KA / Journey / Path 的关联图]

## ET 素材池（可选）
[研究语言 → Anori Voice 的转译对照表]
```

---

## 字段变更说明（v1 → v2）

| v1 字段 | v2 字段 | 说明 |
|---------|---------|------|
| `type` | `evidence_type` | 字段名统一 |
| `quality_level` | `confidence` | 统一为 GRADE 标准四级 |
| `sample` | `population`（含 sample 信息）| 合并 |
| `translation_priority` | 废弃 | 不需要 |
| `primary_use_in_anori` | Layer 0 正文 | 改为叙述 |
| `related_prb` | 废弃 | PRB 系统已停用 |
| `related_path` | `related_journey` | 字段名统一 |
| 无 | `topic` | 新增，对应 topics.json |
| 无 | `series` | 新增，对应 series.json |
| 无 | `source.paper_title` | 新增，validation 必填 |
| 无 | `is_foundational` | 新增，标记核心文献 |
| Source 区块（非 yaml）| `source` yaml 子块 | 结构化，可程序读取 |

---

*EA Standard v2.0 · Frozen · 2026-07-14*
