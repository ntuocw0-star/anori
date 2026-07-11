# Search Blueprint v1.0
**Sprint 15 · Phase A**
**状态：** 冻结

---

## 核心问题

搜索"抑郁"，系统返回 WHO 抑郁量表。技术上正确，产品上错误。

> 家长搜索"抑郁"，不是在找量表。
> 他在问：我的孩子怎么了？我该怎么办？

这是 Anori 搜索从"能搜到"进入"搜得对"的关键转折。

---

## 设计原则一：Search Result Priority（优先级）

### 当前隐性排序（score 驱动，问题）

```
谁标题命中 → 谁排前
Resource/Concept 标题精确 → 永远排第一
PRB/Path 用家长语言 → 标题不精确 → 排后
```

### 目标排序（意图驱动）

```
PRB（家长真实问题描述）          ← 最高权重
    ↓
Journey（从这里开始的路径入口）
    ↓
KA（知识解释）
    ↓
Path（具体页面）
    ↓
Concept（概念解释）
    ↓
Resource（官方工具、量表、指南）  ← 最低权重（家长极少需要直接看）
    ↓
EA / Paper（研究文献）
```

**原则：** Resource 几乎永远不是家长搜索的第一步目标，应在结果列表末尾。

---

## 设计原则二：Intent-First（意图优先）

同一个词可以有不同意图，不同意图指向完全不同的内容。

### 示例：搜索"抑郁"

| 意图 | 家长真实想问 | 对应内容 |
|------|------------|---------|
| `child_emotion` | 孩子最近一直很难过 | PRB → P002/journey |
| `parent_concern` | 我担心孩子是不是抑郁 | PRB → P002/u001 |
| `concept` | 什么叫抑郁 | Concept 页 |
| `assessment` | 如何判断抑郁 | PRB → sup001 |
| `literature` | 专业量表 | Resource（排最后） |

**只有最后一种意图，才应该返回 WHO 量表。**

### Question Dictionary 的 intents 字段（未来扩展）

```json
{
  "text": "抑郁",
  "intents": ["child_emotion", "parent_concern", "concept", "assessment", "literature"],
  "clarifier_required": true,
  "clarifier_options": [
    { "label": "孩子最近一直很难过，情绪低落", "route": "/paths/p002/journey", "intent": "child_emotion" },
    { "label": "我想知道怎么判断孩子是否需要帮助", "route": "/paths/p002/u001", "intent": "assessment" },
    { "label": "什么是抑郁，想先了解一下", "route": "/concepts/depression", "intent": "concept" },
    { "label": "我在找专业的评估量表", "route": "/resources?topic=depression", "intent": "literature" }
  ]
}
```

---

## 设计原则三：Type Weighting（类型权重）

### 实现方案

在 `score()` 函数基础上，乘以类型权重系数：

```js
const TYPE_WEIGHT = {
  "问题":  2.0,   // PRB — 家长真实描述，最高权重
  "方法":  1.5,   // Method
  "主题":  1.3,   // Path / Journey
  "知识":  1.2,   // KA
  "概念":  0.8,   // Concept
  "资源":  0.4,   // Resource — 大幅降权
};

function weightedScore(item, q) {
  return score(item, q) * (TYPE_WEIGHT[item.type] ?? 1.0);
}
```

然后在 `doSearch()` 里把 `score(item, q)` 改为 `weightedScore(item, q)`。

**效果：**
- "抑郁"命中的 PRB（孩子情绪低落类）得分 × 2.0
- "抑郁"命中的 Resource（WHO量表）得分 × 0.4
- PRB 自然排到 Resource 前面

---

## 设计原则四：Clarifier 触发范围扩展

**当前：** Clarifier 只从 Question Dictionary 的预设词触发
**目标：** 当搜索词命中 Resource 但无对应 PRB 时，也触发 Clarifier

```js
// 未来逻辑
if (topResult.type === "资源" && !hasMatchingPRB) {
  showClarifier("你想了解的是哪方面？", [...]);
}
```

---

## 实现路线

### Sprint 15（立即可做，最小改动）

**Type Weighting（一小时内可完成）：**
在 `search.astro` 的 `doSearch()` 里加入 `TYPE_WEIGHT`，把 `score()` 替换为 `weightedScore()`。

不需要改 INDEX 结构，不需要改 Question Dictionary，只改评分逻辑。

### Sprint 16（中期）

**Intent 字段加入 Question Dictionary：**
- `QD` entries 增加 `intents[]` 字段
- Clarifier 触发时，根据 intent 过滤选项

**Resource 出现时自动触发 Clarifier：**
- 当第一名是 Resource 时，检查是否有 PRB 替代
- 有替代 → 触发 Clarifier
- 无替代 → 正常显示 Resource

### Sprint 17+（长期）

**搜索意图推断：**
- 基于搜索词 + 用户历史 + Dictionary 数据，推断主意图
- 个性化排序

---

## 当前搜索问题汇总（待修复）

| 问题 | 严重程度 | 解决方案 | Sprint |
|------|---------|---------|--------|
| Resource 排序过高（"抑郁"返回量表）| 高 | Type Weighting | 15 |
| 模糊词无 Clarifier（"抑郁"无澄清）| 高 | QD 新增"抑郁"条目 | 15 |
| Intent 识别缺失 | 中 | QD intents 字段 | 16 |
| Resource 出现时无 Clarifier 引导 | 中 | 自动 Clarifier 触发 | 16 |

---

## 立即可做：为"抑郁"添加 QD 条目

```json
{
  "id": "QD-000092",
  "text": "抑郁",
  "normalized_text": "抑郁情绪",
  "source": "manual",
  "source_ref": null,
  "confidence": "high",
  "intent": "child_emotion",
  "related_prb": ["PRB-0001", "PRB-0002", "PRB-0003"],
  "related_path": ["P002"],
  "clarifier_group": "emotion",
  "clarifier_required": true,
  "clarifier_display_text": "你想了解的是哪方面？",
  "clarifier_options": [
    { "label": "孩子最近一直很难过、情绪低落", "route": "/paths/p002/journey" },
    { "label": "我想知道怎么判断孩子是否需要帮助", "route": "/paths/p002/u001" },
    { "label": "什么是抑郁，想先了解一下", "route": "/search?q=情绪" },
    { "label": "我在找专业的评估量表", "route": "/resources" }
  ],
  "frequency": 0,
  "status": "active"
}
```

---

*Search Blueprint v1.0 · 2026-07-10*
*核心结论：搜索优先级应由意图驱动，而非标题匹配驱动*
