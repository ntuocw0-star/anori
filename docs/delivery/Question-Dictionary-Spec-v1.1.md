# Question Dictionary Spec v1.1

**Sprint 15 · Phase 0**
**版本：** v1.1（从 v1.0 升级，调整来源架构）
**状态：** 冻结

---

## 核心定位

Question Dictionary 不是一个 JSON 文件。
它是 Anori 最重要的长期知识资产之一。

它记录的是：家长真实的表达方式。
这是连接家长与证据之间最关键的桥梁。

```
家长表达
    ↓
Question Dictionary（桥梁）
    ↓
PRB / Path / KA
```

---

## 数据来源（五个渠道）

```
来源 1：真实用户搜索      ← Analytics（Phase 2）
来源 2：Problem Universe  ← 已有，Sprint 14 产出
来源 3：文献 Parent Quotes ← EA 的 Layer 3 · ET 素材池
来源 4：人工补充          ← 内容团队日常维护
来源 5：AI 归纳           ← 批量处理 EA · Phase 3
```

**每条 Entry 都必须有来源标注。** 这是 v1.1 对 v1.0 最重要的升级。

---

## 数据结构 v1.1

```json
{
  "schema_version": "1.1",
  "generated_at": "2026-07-10",
  "entries": [
    {
      "id": "QD-000001",
      "text": "剪头发一直哭",
      "source": "problem-universe",
      "source_ref": "P007-problem-universe.md",
      "confidence": "high",
      "expression_type": "scene",
      "prb_candidates": [
        { "id": "PRB-P007-001", "confidence": 0.95 }
      ],
      "clarifier_required": false,
      "frequency": 0,
      "created_at": "2026-07-10",
      "last_seen": null
    },
    {
      "id": "QD-000042",
      "text": "孩子天天发疯",
      "source": "manual",
      "source_ref": null,
      "confidence": "medium",
      "expression_type": "emotion",
      "prb_candidates": [
        { "id": "PRB-P002-001", "confidence": 0.7 },
        { "id": "PRB-P007-006", "confidence": 0.6 }
      ],
      "clarifier_required": true,
      "clarifier_options": [
        { "label": "情绪崩溃，很难平复", "route": "/problems/prb-p002-001" },
        { "label": "到了某些地方就突然爆发", "route": "/problems/prb-p007-006" },
        { "label": "沟通受阻，表达不了需求", "route": "/paths/p001/journey" }
      ],
      "frequency": 0,
      "created_at": "2026-07-10",
      "last_seen": null
    },
    {
      "id": "QD-000087",
      "text": "只有约 39% 的家庭坚持使用超过一年",
      "source": "parent-quote",
      "source_ref": "EA-000001",
      "confidence": "high",
      "expression_type": "symptom",
      "prb_candidates": [
        { "id": "PRB-P001-AAC", "confidence": 0.85 }
      ],
      "clarifier_required": false,
      "frequency": 0,
      "created_at": "2026-07-10",
      "last_seen": null
    }
  ]
}
```

### source 枚举值

| 值 | 来源 | 何时使用 |
|----|------|---------|
| `problem-universe` | Problem Universe 文档 | 手动从 Universe 文档提取 |
| `parent-quote` | EA 的 Layer 3 或 ET 素材池 | EA 产出后同步提取 |
| `analytics` | 真实用户搜索行为 | Phase 2，Analytics 接入后 |
| `manual` | 内容团队人工补充 | 随时 |
| `ai-inferred` | AI 批量归纳 | Phase 3 |

### confidence 枚举值

| 值 | 含义 |
|----|------|
| `high` | 来源明确，PRB 对应清晰 |
| `medium` | 来源明确，但 PRB 对应有歧义 |
| `low` | 来源不明确，或 PRB 对应关系待验证 |

---

## 初始填充来源（Sprint 15 可立即执行）

### 来源 2：从 Problem Universe 提取

P007 Problem Universe 已有 200+ 家长表达，可立即提取：

```
P007-problem-universe.md
        ↓
每一条家长语言 → QD entry（source: problem-universe）
        ↓
匹配到对应 PRB-P007-XXX
```

同理，P006 Problem Universe 也已完成。

**预计可立即生成：** 150–200 条高置信度 entry

### 来源 3：从 EA Layer 3 + ET 素材池提取

已有 EA-000001、EA-000002、EA-000003 的 Layer 3 和 ET 素材池，可提取：

```
EA-000001 ET 素材池
        ↓
每一条"研究语言 → 家长语言"转译
        ↓
家长语言部分 → QD entry（source: parent-quote）
        ↓
匹配到 PRB-P001-AAC 系列
```

**预计可立即生成：** 20–30 条

---

## 成长闭环

```
Problem Universe ──→ Question Dictionary ──→ Search Clarifier
      ↑                      ↑                      │
      │                      │                      ↓
  新增 PRB              Analytics              用户路由成功
      │                （Phase 2）                   │
      └──────────────────────┴──────────────────────┘
              每次用户行为都反哺 Dictionary
```

---

## 实现顺序

**Sprint 15 Week 1（立即）：**
1. 建立 `question-dictionary.json`（schema v1.1）
2. 从 Problem Universe 批量提取 150–200 条（source: problem-universe）
3. 从 EA Layer 3 提取 20–30 条（source: parent-quote）
4. Search Clarifier 从此文件读取数据

**Sprint 16（Phase 2）：**
5. Analytics 接入，记录真实搜索词
6. 每月人工审核高频未命中词
7. 将有效词加入 Dictionary（source: analytics）

**长期（Phase 3）：**
8. AI 批量处理新 EA 的 Layer 3，自动提取候选词
9. 人工审核后入库（source: ai-inferred）

---

## 文件位置

```
src/repository/question-dictionary.json
```

---

*Question Dictionary Spec v1.1 · 冻结 · 2026-07-10*
*升级内容：来源架构（五渠道）· confidence 字段 · 成长闭环*
