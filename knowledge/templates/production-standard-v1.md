# Knowledge Production Standard v1.0
_冻结于 2026-07-07 / Sprint E3-01_

---

## 定位

每个 KA 的生产输出必须同时满足四条标准。
这四条标准确保所有 KA 的内容在任何环境下——网站、AI、Claude、前端组件——都保持一致的质量和风格。

---

## 四条标准

### ① AI-ready（AI 可引用）

每个 KA 必须包含：

- `ai_retrieval.trigger_questions`：6 个以上触发问题
- `ai_retrieval.citation_priority`：≤3 条最优先引用的 REL（AI 输出时优先引用这几条，不自行排序）
- `ai_retrieval.memorable_sentence`：家长会记住的一句话（AI 回答时可直接引用）
- `ai_retrieval.core_answer`：核心回答框架
- `ai_retrieval.escalation`：超出范围时的引导路径

### ② Parent-first（家长易理解）

- `parent_version.memorable_sentence`：每个 KA 必须有一句家长会记住的话，全站可复用
- 所有专业术语要么避免，要么在同一句话里解释
- Evidence Card 的 `headline` 用家长语言，不用研究语言
- `parent_version.what_you_can_do`：至少 3 条今天就能做的事，不是大道理

**判断标准：** 一个没有专业背景的家长读完，能不能用自己的话说出这个概念。

### ③ Progressive Disclosure（弹窗渐进展开）

每个 KA 必须有四层展开结构：

```
Layer 1  「一句话理解」     → memorable_sentence
Layer 2  「为什么会这样？」 → 3条机制说明（家长语言）
Layer 3  「研究怎么说？」   → 3条 High grade Evidence Card
Layer 4  「可以看看哪些？」 → 相关 Concept + 相关页面
```

**目的：** 家长可以选择读多少，不会因为内容太多而流失。

### ④ UI-ready（组件可直接渲染）

每个 KA 必须包含 `ui_ready` 字段：

```json
{
  "component_type": "concept_card",
  "color_theme": "...",
  "icon": "...",
  "evidence_badge": "N 条高质量研究支持",
  "astro_component": "ConceptCard",
  "react_component": "KAConceptCard",
  "render_fields": {
    "card_title": "...",
    "card_tagline": "...",
    "popup_layer_1": "...",
    "popup_layer_2": "...",
    "popup_layer_3": "...",
    "popup_layer_4": "..."
  }
}
```

**目的：** Claude、Astro、React 读同一个 JSON，不需要重新设计页面。

---

## QA Checklist（12 项）

每个 Production Package 发布前必须通过：

**基础八项（E3-01 建立）**
- [ ] 每条 Evidence Card 都有 rel_id 对应
- [ ] Evidence Card 只使用 High/Low grade REL
- [ ] Parent Version 没有专业术语或都已解释
- [ ] Common Misunderstanding 先说误解再说实际
- [ ] Reframe 不是鼓励也不是评判
- [ ] AI Retrieval 有明确的触发问题
- [ ] Problem Mapping 有对应 PRB ID
- [ ] Website Card tagline 符合 Anori Voice

**Production Standard v1.0 新增四项**
- [ ] AI citation_priority 已设定（≤3 条最优先 REL）
- [ ] memorable_sentence 已定义（家长会记住的一句话）
- [ ] popup_layers 四层完整（Layer 1-4）
- [ ] ui_ready.render_fields 完整映射到 JSON 字段

---

## 输出文件命名规范

```
PROD-{KA-ID}-{slug}.json
```

例：`PROD-KA-PAR-00002-community-participation.json`

---

## 参考实现

`PROD-KA-PAR-00002-community-participation.json` v1.1
→ Sprint E3-01 的 Reference Implementation，所有后续 KA 按此模板生产。


---

## PS Rule 1：Production 不产生新知识，只负责转换知识

这是 Era 2 和 Era 3 的边界。

**Production 阶段不能：**
- 新建 REL
- 修改 Evidence Grade
- 修改 KA 定义
- 修改 Core Pathway
- 修改 Knowledge Domain

**Production 阶段只能：**
- 翻译（Research → Parent）
- 组织（Evidence → Card）
- 呈现（Card → UI）
- 检索（AI Retrieval）
- 映射（Problem Mapping）

如果在生产过程中发现需要修改 KA 或 REL，停止生产，返回 Era 2 流程处理，再重新生产。


---

## PS Rule 2：Reference Implementation 只增加，不修改

四个 Reference Implementation 保持冻结：
- `PROD-KA-PAR-00002` Community Participation（Knowledge Translation）
- `PROD-KA-PAR-00003` Belonging（Concept Translation）
- `PROD-KA-FAM-02003` Caregiver Burden（Anori Voice）
- `PROD-KA-FAM-05001` Family Quality of Life（System Integration）

Production Standard 升级时（v1.1、v2.0），新增新的 Reference Implementation，不回头修改这四个。这样演进历史完整可追溯。

---

## Production Pipeline 状态

```
Status: Stable
Mode: Batch Production

Batch 1（完成）
  ✅ Community Participation
  ✅ Belonging
  ✅ Caregiver Burden
  ✅ Family Quality of Life

Batch 2（当前）
  ① Parent Stress
  ② Family Functioning
  ③ Family Support
  ④ School Participation

Batch 3（计划）
  Transition / Employment / Leisure / ...
```


---

## PS Rule 3：Automation First

只要 KA 提供的信息足够完整，Production 应优先自动生成，而不是人工重新编写。

```
KA 完整度 ↑  →  自动生产 ↑  →  人工编辑 ↓
```

**自动生成（来自 KA JSON）：**
- concept_page.definition / why_it_matters
- common_misunderstanding
- ai_retrieval.trigger_questions / answer_template
- problem_mapping
- popup_layers.layer_2/3/4

**人工判断（Human Layer，每个 KA 唯一）：**
- memorable_sentence
- theme
- citation_priority（≤3条最重要的 REL）
- Anori Voice 验证
- visual configuration（color_theme / icon）
- Bridge Validation（桥接型 KA 专用）

人工只负责真正需要判断和创造的部分，其余来自 KA，不重复维护两份知识。

---

## Era 3 三个阶段

| Phase | 内容 | 状态 |
|---|---|---|
| Phase A | Reference Implementation — 验证 Production Standard | ✅ 完成 |
| Phase B | Batch Production — 验证 Production Pipeline 可扩展 | ✅ 完成 |
| Phase C | Production Automation — 建立 Production Engine | 🚀 当前 |


---

## PS Rule 4：Single Source of Truth（SSOT）

KA 是唯一知识源，Production 不保存独立知识。

```
KA JSON（唯一维护对象）
  ↓
Production Engine
  ↓
PROD JSON（可随时重新生成）
```

**如果发现任何内容需要修改：**
1. 修改 KA JSON
2. 重新运行 Engine
3. 生成新的 PROD JSON

**永远不要直接修改 PROD JSON。** PROD 是生成物，不是维护对象。

---

## Era 3 完整平台结构

```
Production Standard v1.0
  ├── PS Rule 1：Production 不产生新知识，只负责转换知识
  ├── PS Rule 2：Reference Implementation 只增加，不修改
  ├── PS Rule 3：Automation First（KA 完整度 ↑ → 自动化 ↑）
  └── PS Rule 4：Single Source of Truth（KA 是唯一知识源）

Production Engine v1.0（Frozen）
  ├── Auto Layer：~80% 自动映射（来自 KA）
  └── Human Layer：~20% 人工判断（memorable_sentence / theme / citation_priority）

Production Platform
  Standard → Rules → Engine → Human Layer → QA → PROD → Astro → 网页
```

**Engine v1.0 状态：Frozen**
不再修改 Engine 本身。如需新功能，建立 Engine v1.1，保留 v1.0 不变。

---

## Era 3 四个阶段

| Phase | 内容 | 状态 |
|---|---|---|
| A | Reference Implementation | ✅ |
| B | Batch Production | ✅ |
| C | Production Automation（Engine v1.0）| ✅ Frozen |
| D | Website Rendering（KOS → 网页）| 🚀 当前 |
