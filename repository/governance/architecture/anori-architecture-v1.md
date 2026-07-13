# Anori Architecture v1.0

---

## 1. Purpose

Anori 是一套围绕家长心理过程设计的知识体验系统。

它不是内容网站，不是资源目录，不是搜索引擎。
它的核心设计假设是：**家长在不同的心理节点上，需要不同类型的语言回应。**
系统的所有组成部分，都在服务这个假设。

---

## 2. Four-layer Architecture

四层从上到下依次建立，每一层以下一层为基础：

```
Experience Architecture
        ↓
Knowledge Narrative
        ↓
Knowledge Content
        ↓
Evidence Infrastructure
```

### Layer 1：Experience Architecture

**回答的问题：** 家长在每个心理节点上需要什么？

**输入：** 用户行为（搜索、点击、滚动）
**输出：** 对应心理节点的语言响应

**包含：**
- 用户路径设计（Recognition → Confirmation → Action → Decision）
- 语言字段（`search_reason` / `intro` / `first_step` / `why_worth_reading` / `why_recommended`）
- 交互节点（Anchor Cards、Progress Indicator）

**不负责：**
- 知识内容本身
- 证据来源
- 概念定义

---

### Layer 2：Knowledge Narrative

**回答的问题：** 这一页应该帮家长重新定义什么？

**输入：** 一个核心问题（每页唯一）
**输出：** 围绕这个核心问题展开的叙事结构

**包含：**
- 每页的核心问题（Core Question）
- 字段写法原则（`why_this_happens` / `common_misreading` / `faq` / `ending`）
- Anori Voice（承认现实，保留可能；不鼓励，不评判）
- Reframe 操作（每页 Ending 完成一次有效的意义重构）

**不负责：**
- 用户从哪里进入
- 研究证据是否存在
- 概念在其他页面叫什么

---

### Layer 3：Knowledge Content

**回答的问题：** 读完之后，家长带走了什么？

**输入：** Narrative 定义的结构 + Evidence 提供的研究基础
**输出：** 可交付、可阅读的页面内容

**包含：**
- Knowledge Page 完整内容（`page-content.json`）
- Problem 语言字段（`problems.json`）
- Method 内容（`methods.json`）
- Knowledge Template v1.0（字段顺序和写法规范）

**不负责：**
- 内容如何渲染成页面
- 研究引用的追踪
- 概念的跨页统一

---

### Layer 4：Evidence Infrastructure

**回答的问题：** 我们为什么这样说？

**输入：** 研究文献（SR / Meta-analysis / Guideline / Longitudinal Study）
**输出：** 可追溯的 evidence_cards，家长可读的研究发现

**包含：**
- Evidence Cards（每页 2-5 张，附 `rel_id`）
- Relations（`rels.json`，54 条，含 evidence_grade）
- Variables（`vars.json`，44 个测量变量）
- Knowledge Translation 原则（Evidence → 家长语言，不是 Evidence → 中文）
- Evidence Freshness 追踪（`primary_citation_year`）

**不负责：**
- 如何展示研究发现
- 概念的 Narrative 定义
- 用户体验路径

---

## 3. Cross-layer Assets

Cross-layer Assets 横跨四层，为所有层提供共享的语义基础。
它们不属于任何单一层，也不是第五层。

### 为什么不是第五层

第五层意味着它有上下游的层级关系。
Cross-layer Assets 没有层级关系——它们是公共资源，四层都可以引用，但任何一层都不依赖它运行。

### Concept Registry

**文件：** `concept-registry.json`
**职责：** 统一命名，消除跨层的同义词混用

每个 Concept 包含：
- `canonical`：唯一规范名称
- `aliases`：跨层出现的所有变体名
- `anori_definition`：系统视角的定义（家长语言）
- `research_definition`：研究层定义（可引用 VAR）
- `anori_reframe`：这个概念在 Anori 里的意义重构
- `evidence`：关联的 VAR 和 REL
- `appears_in`：在哪些层、哪些文件里出现

**当前状态：** Repository Asset（不参与页面渲染）

**Tier 划分：**
- Tier 1：系统根概念，已横跨四层（Family Quality of Life / Caregiver Burden / Community Participation / Help-seeking）
- Tier 2：Anori 原创概念，从 Narrative 生长出来（Rhythm / Priority / Rest）
- Knowledge Operation：描述 Anori 对知识的处理方式（Reframe）

---

## 4. Layer Relationships

```
用户行为
    ↓
Experience Architecture      ← 路径设计、语言字段、交互节点
    ↓
Knowledge Narrative          ← 核心问题、叙事结构、Voice、Reframe
    ↓
Knowledge Content            ← 页面内容、Problem 字段、Method 内容
    ↓
Evidence Infrastructure      ← Evidence Cards、REL、VAR、Knowledge Translation

        ←────────────────────────────────────────────────────────→
                        Concept Registry（横跨四层）
        ←────────────────────────────────────────────────────────→
```

**数据流向：**
- Evidence 为 Content 提供研究基础
- Content 按照 Narrative 定义的结构组织
- Narrative 在 Experience 定义的节点上触发
- Concept Registry 为所有层提供统一命名

**不允许的流向：**
- Experience 直接引用 Evidence（中间必须经过 Narrative 和 Content）
- Evidence 改变 Narrative 的写法（Evidence 只提供素材，不决定表达方式）

---

## 5. Responsibility Matrix

| 职责 | Experience | Narrative | Content | Evidence | Concept |
|---|---|---|---|---|---|
| 用户路径设计 | ✅ | — | — | — | — |
| 语言字段（search_reason 等） | ✅ | — | — | — | — |
| 核心问题定义 | — | ✅ | — | — | — |
| 页面叙事结构 | — | ✅ | — | — | — |
| Anori Voice / Reframe | — | ✅ | — | — | — |
| 页面可读内容 | — | — | ✅ | — | — |
| Problem / Method 数据 | — | — | ✅ | — | — |
| 研究证据引用 | — | — | — | ✅ | — |
| Evidence 可追溯性 | — | — | — | ✅ | — |
| 统一概念命名 | — | — | — | — | ✅ |
| 跨层语义一致性 | — | — | — | — | ✅ |

---

## 6. System Principles

**边界清晰：** 每一层的职责在建立时冻结，新增能力只能扩展，不能改变已有层的职责。

**职责单一：** 每一层只回答一个核心问题。当一个新的工作回答不了「它属于哪一层」，说明设计有问题。

**Cross-layer 不替代层级：** Concept Registry 提供公共语言，但不承担任何层的核心职责。引用 Concept 的层，仍然负责自己的工作。

**Repository 先于 Runtime：** 新的资产先以 Repository 形式稳定，边界清晰之后再接入 Runtime。防止过早耦合导致职责边界模糊。

---

## 7. Reading Order

```
anori-architecture-v1.md          ← 系统是什么（本文档）
        ↓
anori-evolution-rules-v1.md       ← 系统怎样成长
        ↓
system-snapshot-YYYY-MM-DD.json   ← 系统现在在哪里
        ↓
anori-writing-guide-v1.md         ← 内容怎么写
knowledge-template-v1.md          ← Knowledge Page 结构
        ↓
page-content.json                 ← 知识内容
problems.json                     ← Problem 数据
concept-registry.json             ← 概念注册表
        ↓
rels.json / vars.json             ← 证据层原始数据
        ↓
[id].astro / search.astro         ← 渲染层
```


---

## 补充：Knowledge Operating System v2.0（2026-07-07）

### 系统能力升级

v1.0：管理已有知识（四层架构 + Concept Registry）
v2.0：主动识别知识缺口，生成下一步研究任务

### REL Schema v2.0

REL 是稳定对象，Evidence Grade 是生命周期属性。

```json
{
  "id": "REL-XXXXXX",
  "source": "VAR-XXXXXX",
  "relation": "...",
  "target": "VAR-XXXXXX",
  "evidence_grade": "当前最高等级",
  "primary_citation": "当前最强文献",
  "primary_citation_year": 2024,
  "evidence_timeline": [
    {"date": "2017", "grade": "Very Low", "note": "初始建立"},
    {"date": "2024", "grade": "High", "note": "SR 升级"}
  ],
  "evd_todo": "待填入时标注搜索目标，完成后删除",
  "status": "Active"
}
```

### Search Target Registry（STR）

**文件：** `evidence-search-targets.md`
**职责：** 由骨架 REL 自动驱动的精准文献搜索清单

```
新建骨架 REL（evd_todo 标注）
  ↓
自动生成 STR 条目
  ↓
执行文献检索（SR/Meta 优先）
  ↓
更新 REL：evidence_grade / timeline / primary_citation
  ↓
生成 evidence_card 写入页面
  ↓
关闭 evd_todo
  ↓
Dashboard 自动更新
```

这是从「主动探索」到「系统驱动精准补全」的范式转换。
系统不再被动等待文献投入，而是主动告诉研究者它缺什么。

### 当前 STR 状态（2026-07-07）

- Priority A（Caregiver Identity & Values）：6 条
- Priority B（原有 EVD-TODO 系列）：5 条
- 目标：全部升级至至少 Low grade，`values` 页面获得 2 张 High grade evidence_card

---

## 补充：Knowledge Network（2026-07-07 正式确立）

### 完整层级

```
Evidence
  ↓
Variable (VAR)
  ↓
Relation (REL)
  ↓
Knowledge Asset (KA)
  ↓
Core Pathway (CP)
  ↓
Knowledge Domain (KD)
  ↓
Knowledge Network
```

### 当前 Knowledge Network

两个 Knowledge Domain 通过跨域关系形成网络：

```
Family Science (KD-FAM)
  ↓ REL-000078 [Bridge]
Participation Science (KD-PAR)
  ↓ REL-000098 [Feedback]
Family Science (KD-FAM)
```

这不是两条独立主链，而是一个闭环的知识网络。

### 扩展原则

新增 Domain（KD-TRA / KD-DEV / KD-EI）时：
1. 先建 Core Pathway（机制层 + 情境层）
2. 识别与现有 Domain 的桥接点（Bridge REL）
3. 识别反馈关系（Feedback REL）
4. 更新 Knowledge Network 总图

系统动力学特征：任何节点的干预效果，会通过桥接和反馈关系在整个网络中传播。

---

## 系统定义（2026-07-07 冻结）

> **Anori KOS 已进入 Maintenance Mode：架构保持稳定，知识持续增长，证据不断成熟，任务由系统状态自动触发，而非人工重新规划。**

### 三个长期特征

**① Structure Stability（结构稳定）**
Architecture、KA、Core Pathway、Knowledge Domain 不随文献增加而改变。新增证据不引发结构重构。

**② Evidence Evolvability（证据可演进）**
REL 的生命周期 = Evidence Grade 的演进（Very Low → Low → High），而不是结构的演进。

**③ Task Self-generation（任务自生成）**

| 触发源 | 触发条件 |
|---|---|
| STR | 发现知识缺口时自动生成 |
| EUQ | 已有关系但需更高等级证据时生成 |
| KD 扩展 | 找到 Bridge REL 才启动（Rule 10） |
| Architecture | 无触发条件，保持冻结 |

### KOS 与 Literature Database 的本质区别

Literature Database 管理的是**资料**。
Knowledge Operating System 管理的是**知识的生命周期**。
