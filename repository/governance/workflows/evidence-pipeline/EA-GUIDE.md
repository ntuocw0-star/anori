# EA Writing Guide
**Version: 1.0 · 2026-07-12**

> 本 Guide 解释"怎么写得好"。不可违反的边界请见 `EVIDENCE-CONTRACT.md`。

---

## EA 的定位

EA（Evidence Deconstruction · 证据解构）是对一篇真实学术文献的结构化拆解。  
它不是摘要，也不是综述——它是把一篇论文翻译成"Anori 可以使用的格式"。

一篇 EA 对应且只对应一篇文献。  
如果需要引入第二篇文献的内容，建立第二篇 EA。

---

## Source 字段（必填）

```markdown
**Title:**    完整论文标题（英文原文）
**Authors:**  作者列表（Last, F.; Last, F. 格式）
**Journal:**  期刊全名
**Year:**     出版年份 · 卷期 · 页码（如已知）
**DOI:**      完整 DOI（https://doi.org/... 格式）
**Access:**   Open Access / Subscription / 预印本
**Method:**   研究方法（Meta-Analysis / Systematic Review / RCT / Qualitative 等）
**Scope:**    研究范围（样本数、人群、诊断类型）
```

**DOI 和 PubMed PMID 至少提供一个。**  
没有 DOI 的文献需在 Source 下方说明原因（例：会议摘要、未发表稿）。

---

## Metadata 字段

### 必填

| 字段 | 说明 |
|---|---|
| `id` | EA-XXXXXX 格式，六位数字 |
| `type` | 研究方法简述（与 Source.Method 一致）|
| `topic` | 1~3 个关键词，中英文均可 |
| `population` | 研究人群（谁参与了这项研究）|
| `sample` | 样本描述（研究数 / 参与者数）|
| `year` | 出版年份（数字）|
| `quality_level` | High / Medium / Low（见评级说明）|
| `evidence_type` | Qualitative / Quantitative / Mixed |
| `reading_time` | 预估阅读时间（分钟）|
| `concept_refs` | primary 必填，secondary 需有文献支持 |

### 可选

| 字段 | 说明 |
|---|---|
| `diagnosis_scope` | 特定诊断类型（如仅适用）|
| `translation_priority` | High / Medium / Low |
| `confidence` | 分维度置信度（parent_meaning / actionability）|
| `primary_use_in_anori` | 本 EA 在 Anori 中的主要用途 |
| `related_et` | 已派生的 ET ID 列表 |
| `related_ka` | 已关联的 KA ID |
| `related_prb` | 关联的 Problem ID |
| `related_path` | 关联的 User Path（user-paths.json 格式，如 p001）|

### quality_level 评级说明

```
High    系统综述、元分析、大样本 RCT、有同行评审的纵向研究
Medium  横断面研究、小样本纵向、有方法限制的定性研究
Low     案例研究、专家意见、非同行评审来源
```

---

## Seven Layers

### Layer 0 · 为什么值得读

**格式：** 1~2 段，以引语（blockquote `>`）开头，简述本文的独特价值。

**写作原则：**
- 回答"为什么读这篇，而不是随便一篇关于这个话题的文章"
- 针对家长读者，不需要学术语言
- 不要写"本文研究了……"——那是摘要，不是 Layer 0

**示例：** `> 它不是告诉你 AAC 有没有用，而是告诉你家长为什么坚持不下去。`

---

### Layer 1 · Research Question

**格式：** 1~2 段 + blockquote 引用核心研究问题。

**写作原则：**
- 用一句话说清楚这篇文献真正回答了什么问题
- 明确说明研究设计类型（比较型 / 干预型 / 现象探索型）及其含义
- 如果研究不回答某类问题（如比较型研究不回答因果），在这里说清楚

---

### Layer 2 · Key Findings

**格式：** 分主题的结构化列表，3~5 个主题。

**写作原则：**
- 严格限定在文献实际报告的发现内（Contract C1）
- 每个发现来自文献原文，可以重新表达，不能自行推论
- 数据（效应量、样本量、百分比）能引用就引用，不要模糊化
- 用 `⚠️ 注：` 标注"本文不回答但读者可能误以为它回答了"的问题

---

### Layer 3 · Parent Meaning

**格式：** 3~5 条 `**很多家长后来才发现……**` 格式的段落。

**写作原则：**
- 从研究发现提炼对家长有意义的"认知更新"
- 每条对应一个 Layer 2 发现（可多对一，不可无对应）
- 语气：理解、陪伴，不说教，不给建议（建议留在 Layer 5）
- 允许情感共鸣，但每条共鸣都必须可追溯到 Layer 2 的具体发现

---

### Layer 4 · Professional Meaning

**格式：** 列表，面向专业人员（语言治疗师、特教老师、OT、医生等）。

**写作原则：**
- 从文献发现提炼对专业实践的含义
- 语气直接，面向专业读者，可以使用专业术语
- 此 Layer 同样受 Contract C1 约束——只写文献支持的实践含义

---

### Layer 5 · Actionable Implications

**格式：** 三个子节：`今天可以做什么` / `什么时候寻求专业帮助` / `什么是正常的困难`

**写作原则：**
- 每条行动建议必须可追溯到 Layer 2 的发现
- "什么时候寻求专业帮助"：具体、有门槛，不要过度渲染
- "什么是正常的困难"：帮助家长减少不必要的自我怀疑
- 语气：赋能，不焦虑

---

### Layer 6 · Anori Mapping

**格式：** 代码块中的关联图。

**写作原则：**
- 列出已派生 / 计划派生的 ET
- 列出关联的 KA、User Path、Problem、Search 关键词
- 这是编辑工作图，不是用户可见内容
- 用 `（待建）` 标注尚未建立的对象

---

### ET 素材池

**格式：** 表格，两列：研究语言 | ET 方向（Anori Voice）

**写作原则：**
- 从 Layer 2 提取 5~8 条最重要的发现
- 每行右列是"如果把这个发现转化为 ET，第一句话怎么说"
- 不是翻译，是转化——用家长会说的语言

---

## Status 流程

```
Draft   → 初稿完成，Source 和 Metadata 必填项齐全
Review  → 自查 REVIEW-CHECKLIST.md 全部必填项通过
Active  → 另一人交叉审核确认，无 Contract 违反
```

Draft 可以进入 Repository 和 Series，但 Coverage 计 0.5。  
Active 才计 1.0，Concept 才有机会进入 Established。

---

*EA Writing Guide v1.0 · Anori Knowledge Platform · 2026-07-12*
