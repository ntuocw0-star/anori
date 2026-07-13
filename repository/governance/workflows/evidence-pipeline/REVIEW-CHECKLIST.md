# Evidence Review Checklist
**Version: 1.0 · 2026-07-12**

发布前逐项核对。`Draft → Active` 需要全部必填项通过。  
建议：写作者自查一遍，另一人交叉审核一遍。

---

## EA Checklist

### Source 完整性（必填）
- [ ] Title 为英文原文，无截断
- [ ] Authors 格式正确（Last, F. 格式）
- [ ] Journal 为完整期刊名
- [ ] Year 已填写
- [ ] DOI 已填写（或说明了为什么没有 DOI）
- [ ] Method 与文献实际研究方法一致
- [ ] Scope 包含样本量和人群描述

### Metadata 完整性（必填）
- [ ] `id` 格式为 EA-XXXXXX
- [ ] `quality_level` 已根据研究方法评级（High/Medium/Low）
- [ ] `concept_refs.primary` 已填写有效 Concept ID
- [ ] `concept_refs.secondary` 的每个 Concept 都有独立文献支撑（或为空数组）

### 内容边界（必填）
- [ ] Layer 2 的每个发现都可在文献原文中找到依据
- [ ] Layer 2 中没有"所有研究均显示……"等未经核实的泛化表述
- [ ] Layer 2 中的数据（效应量/样本量/百分比）来自文献原文
- [ ] Layer 3 的每条 Parent Meaning 都可追溯到 Layer 2 的具体发现
- [ ] Layer 5 的每条行动建议都可追溯到 Layer 2 的发现
- [ ] 没有将其他文献的结论归入此 EA

### 常见错误排查（必填）
- [ ] 没有使用"高出一个量级"（large effect size ≠ 数量级差异）
- [ ] 没有使用"方向一致"（除非文献明确报告 heterogeneity 低）
- [ ] secondary concept 没有因"内容相关"而添加（相关性 ≠ 证据关系）
- [ ] 比较型研究的结论没有被表述为因果关系

### 可选项（Active 强烈建议完成）
- [ ] `translation_priority` 已根据对 Anori 的重要性评级
- [ ] `confidence` 按维度（parent_meaning / actionability）填写
- [ ] `primary_use_in_anori` 说明了此 EA 的主要用途
- [ ] ET 素材池已填写（至少 5 条）
- [ ] Layer 6 Anori Mapping 已完成

---

## ET Checklist

### Metadata（必填）
- [ ] `source_ea` 列表中的所有 EA ID 存在于 Repository
- [ ] `topic` 用家长语言描述（不是学术标题）
- [ ] `concept_refs.primary` 已填写

### 内容边界（必填）
- [ ] ET 正文中每个"研究发现"都可追溯到 source_ea 的 Layer 2
- [ ] 没有引入 source_ea 未涵盖的研究结论
- [ ] "今天可以做什么"的每条建议都可追溯到 source_ea

### 常见错误排查（必填）
- [ ] 没有"所有研究都显示……"等泛化表述
- [ ] 没有将比较型研究的结论表述为干预效果（如"A 能改善 B"）
- [ ] `secondary concept_refs` 的每个 Concept 有独立 EA 支持（或为空）

---

## KA Checklist

### 结构（必填）
- [ ] `related_ea` 列出了所有支撑 EA
- [ ] `one_sentence` 已填写
- [ ] `series` 字段格式正确（`name` 可通过 series.source_keys 解析）
- [ ] `related_path` 使用 user-paths.json 格式（p001 等）

### 内容边界（必填）
- [ ] 每个核心主张可追溯到 ET（进而追溯到 EA）
- [ ] 没有"研究表明……"而无对应 EA/ET 的表述

---

## Series Checklist

### 结构（必填）
- [ ] `content_refs` 中的所有 EA/ET/KA ID 存在于 Repository
- [ ] `statistics` 数量与 `content_refs` 实际数量一致
- [ ] draft Series：topic 可省略 / active Series：topic 必须存在

---

## 状态更新规则

```
Draft   通过 Metadata 必填项 + Source 完整性 = 可进入 Repository
Review  通过全部必填项（包括内容边界 + 常见错误）= 可标记 Review
Active  另一人交叉核查无误 = 可标记 Active，Coverage 计 1.0
```

---

*Evidence Review Checklist v1.0 · Anori Knowledge Platform · 2026-07-12*
