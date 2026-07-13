# Evidence Contract
**Version: 1.0 · Frozen: 2026-07-12**

这是 Anori 知识生产的不可违反规则。  
Guide 可以优化，Checklist 可以扩展，但 Contract 尽量不改。  
每一条都有其存在的原因，修改前必须经过完整的架构讨论。

---

## C1 · EA 只能描述文献真正支持的结论

EA 是对真实文献的结构化解构，不是对领域知识的综述。

**允许：**
- 该文献的直接发现（以文献摘要、全文或可靠引用为依据）
- 该文献作者明确陈述的推论
- 文献的局限性和作者自述的注意事项

**禁止：**
- 将其他研究的发现归入此 EA
- 基于本文推断"其他研究也表明……"
- 超出该文献研究问题的结论（如比较型元分析的结论不等于因果结论）

---

## C2 · ET 的内容不得超出 source_ea 的证据范围

ET 是 EA 到家长语言的桥梁，不是独立的内容创作。

**允许：**
- 对 source_ea 发现的重新表达（语言转化，不是内容扩充）
- 基于 source_ea 的合理情感共鸣（"很多家长后来才发现……"）
- 指向同一 EA 的行动提示（"今天可以做什么"必须可追溯到 source_ea）

**禁止：**
- 在 ET 中引入 source_ea 未涵盖的研究结论
- 将领域常识或其他文献的内容混入 ET 正文
- 声称"研究发现"而未有对应的 source_ea 支撑

如需表达 source_ea 以外的内容，必须先建立新的 EA，再由该 EA 派生 ET。

---

## C3 · KA 必须列明来源 ET，且只综合有 ET 支撑的内容

KA 是面向家长的综合知识文章，可以综合多个 ET 的内容。

**要求：**
- KA 必须在 `related_ea` 字段中列出支撑的 EA
- KA 的每一个核心主张，必须可追溯到至少一篇 ET（进而追溯到 EA）
- KA 中不得出现"研究表明……"而无对应 EA/ET 的表述

---

## C4 · secondary concept_refs 必须有独立文献支持

concept_refs 中的 `secondary` 不是标签，而是 Knowledge Graph 的边。

**规则：**
- primary：该对象的核心主题，必须由 source_ea 或文章内容直接支持
- secondary：跨主题关联，必须有该 Concept 的独立 EA（或等效证据）支撑
- 尚未建立对应 EA 的 Concept，不得挂入 secondary
- 不以"内容相关"为由添加 secondary；相关性不等于证据关系

---

## C5 · Active 状态必须通过 Review Checklist

内容对象（EA / ET / KA / Series）的状态流程：

```
Draft → Review → Active
```

**Draft：**
- 允许发布到 Repository，但 Coverage 计 0.5（非满分）
- 不视为已完成，Analytics 不将其标记为 Established

**Active：**
- 必须完整通过 `REVIEW-CHECKLIST.md` 的全部必填项
- 由作者自查 + 另一人交叉审核后标记
- 一旦标记 Active，不得无审核直接降回 Draft

---

## C6 · Draft 不计入 Coverage 满分

**规则（与 Analytics 实现绑定）：**
- Draft 对象：Coverage Score = 0.5
- Active 对象：Coverage Score = 1.0
- Lifecycle Established 要求该 Concept 下所有 primary 对象全部 Active（≥ 1.0）

这条规则防止通过创建空壳 Draft 虚增 Coverage。  
一个 Concept 只有在其知识链路（EA → ET → KA → Series）全部 Active 后，才标记为 Established。

---

## 修订说明

如需修改 Contract，必须满足：
1. 明确说明哪条规则无法适用于当前场景，以及为什么
2. 经过 Repository 架构讨论
3. 更新版本号和日期，并在 Git 提交中明确标注 Contract 修订

Contract 不因"临时方便"而修改。

---

*Evidence Contract v1.0 · Anori Knowledge Platform · 2026-07-12*
