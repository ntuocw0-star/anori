# Literature Library Spec v1.1

**Sprint 15 · Phase 0**
**版本：** v1.1（从 v1.0 升级，增加 Topic 层）
**状态：** 冻结

---

## 核心定义

Literature Library 是：

```
Topic（领域）
    ↓
Series（主题系列）
    ↓
KA（家长语言的知识文章）
    ↓
EA（原始证据，供深入阅读）
```

**为什么需要 Topic 层：**
未来即使有几百篇 EA，Topic 层保证导航不乱。
Topic 是领域级分类，Series 是主题级，KA 是文章级，EA 是证据级。

---

## Topic 规划

### 当前（Sprint 15）

| Topic | Series（已有/规划）| 状态 |
|-------|-----------------|------|
| Communication 沟通 | AAC · Speech · Gesture | AAC ✅，其余待建 |
| Sensory 感觉处理 | Touch · Sound · Vestibular · Proprioception | 待建 |
| Emotion 情绪 | Regulation · Meltdown · Anxiety | 待建 |
| Family 家庭 | Caregiver · Sibling · Extended Family | 待建 |
| School 学校 | Transition · Inclusion · IEP | 待建 |

### 未来扩展

```
Sleep 睡眠
    └── Onset · Night Waking · Routine

ADHD 注意力
    └── Focus · Impulsivity · Executive Function

Feeding 进食
    └── Texture · Oral Sensory · Mealtime
```

---

## 页面结构（四层）

### `/library`（Library 首页）

```
Knowledge Library

以下内容来自真实的研究，整理成家长能读懂的文章。

[Communication 沟通]
  AAC 辅助沟通 ——— (3 篇 Evidence)

[Sensory 感觉处理]
  触觉               (待建)
  听觉               (待建)
  前庭觉             (待建)

[Emotion 情绪]
  ...（待建）
```

### `/library/topic/[topic-id]`（Topic 页）

```
Communication 沟通

帮助孩子找到表达自己的方式——
不只是语言，还有图片、手势、设备，以及理解他的家长。

系列：
AAC 辅助沟通 ——— 3 篇 Evidence
  ① 为什么很多家长坚持不下去？
  ② 学校和家里怎样才能说同一种语言？
  ③ AAC 到底有没有用？（待建）
```

### `/library/series/[series-id]`（Series 页）

```
AAC 知识系列

这个系列回答三个问题：
为什么难、为什么家校脱节、以及为什么值得。

① 为什么很多家长坚持不下去？     [阅读 →]
   Berenguer et al. 2022 · 297位家长

② 学校和家里怎样才能说同一种语言？ [阅读 →]
   Kim & Soto 2024 · 319位照顾者

③ AAC 到底有没有用？（待建）

深入原始研究：
[EA-000001]  [EA-000002]  [EA-000003]
```

### `/library/ea/[ea-id]`（EA 页，选做 Sprint 16）

面向专业人员的 EA 详情页，呈现 Layer 0–6。

---

## 数据结构

### 新增 `topic-index.json`

```json
{
  "topics": [
    {
      "id": "communication",
      "title": "Communication",
      "title_zh": "沟通",
      "description": "帮助孩子找到表达自己的方式",
      "series_ids": ["AAC", "Speech", "Gesture"],
      "status": "active"
    },
    {
      "id": "sensory",
      "title": "Sensory Processing",
      "title_zh": "感觉处理",
      "description": "理解孩子的感觉世界",
      "series_ids": ["Touch", "Sound", "Vestibular"],
      "status": "planned"
    },
    {
      "id": "family",
      "title": "Family",
      "title_zh": "家庭",
      "description": "照顾孩子，也照顾自己",
      "series_ids": ["Caregiver", "Sibling"],
      "status": "planned"
    }
  ]
}
```

### 升级 `series-index.json`（增加 topic 字段）

```json
{
  "series": [
    {
      "id": "AAC",
      "topic_id": "communication",
      "title": "AAC 辅助沟通",
      "description": "从家长体验、家校协作到干预效果",
      "ka_ids": ["KA-000001", "KA-000002", "KA-000003"],
      "ea_ids": ["EA-000001", "EA-000002", "EA-000003"],
      "status": "active",
      "anori_voice": "不是 AAC 在等他，而是 AAC 在帮他进入语言。"
    }
  ]
}
```

---

## 导航层级

```
/library                        Library 首页（Topic 列表）
/library/topic/communication    Communication Topic 页
/library/series/aac             AAC Series 页
/knowledge/ka-000001            KA 文章页（已存在）
/library/ea/ea-000001           EA 详情页（Sprint 16）
```

---

## 实现顺序

**Sprint 15（最小可用）：**
1. 建立 `topic-index.json`
2. 建立 `series-index.json`（含 topic_id）
3. `/library` 首页（Topic 列表）
4. `/library/series/[id]` 系列页
5. KA 页面增加"所属系列 → Topic"面包屑

**Sprint 16：**
6. `/library/topic/[id]` Topic 页
7. `ea-index.json` + `/library/ea/[id]` EA 页
8. Topic 页面显示进度（X 篇 Evidence，Y 篇 KA）

---

## 未来规模预估

| Topic | 预计 Series | 预计 KA | 预计 EA |
|-------|------------|--------|--------|
| Communication | 3–5 | 10–20 | 15–30 |
| Sensory | 4–6 | 12–24 | 20–40 |
| Emotion | 3–5 | 9–18 | 15–30 |
| Family | 2–4 | 6–12 | 10–20 |
| School | 3–5 | 9–18 | 15–30 |
| **合计** | **15–25** | **46–92** | **75–150** |

Topic 层保证了这个规模下导航仍然清晰。

---

*Literature Library Spec v1.1 · 冻结 · 2026-07-10*
*升级内容：增加 Topic 层 · topic-index.json · 四层导航结构*
