# KA Standard v1.0
## Knowledge Translation Standard（知识转译标准）

**版本：** v1.0
**冻结日期：** 2026-07-14
**适用范围：** 所有 Anori Knowledge Article（KA）
**状态：** Frozen · Sprint 25A

---

## 第一原则

> **定义"不写什么"，比定义"写什么"更重要。**

KA 的边界是它最重要的属性。内容可以不够多，但绝不能越界。

---

## Part 1 · Role（职责）

Anori 知识体系的四层职责：

| 层级 | 问题 | 受众 |
|------|------|------|
| Journey | 我现在怎么办？ | 处于困境中的家长 |
| **KA** | **我需要知道什么？** | **准备理解的家长** |
| ET | 为什么这么做？ | 想深入的家长 |
| EA | 证据来自哪里？ | 需要依据的家长／专业人员 |

**KA 的唯一职责：**
把研究证据（EA）和知识拆解（ET）转译成家长今天就能理解、今天就能用的知识。

KA 是**转译（Translation）**，不是摘要（Summary），不是简化版 ET。

---

## Part 2 · Structure（结构）

所有 KA 固定七个模块，顺序不变：

```
① 一句话        → 这件事的本质是什么
② 为什么        → 用生活语言解释原理
③ 怎么判断      → 帮助家长观察自己的孩子
④ 怎么开始      → 一个可以立即执行的动作
⑤ 常见误区      → 纠正最常见的认知偏差
⑥ 今天就能做    → 一件事，今天，现在
⑦ 想继续了解    → 向下连接 ET / EA / Resource / Journey
```

### 规格要求

| 模块 | 建议字数 | 格式 |
|------|---------|------|
| 一句话 | ≤ 20 字 | 纯文本，无标点堆砌 |
| 为什么 | 100–200 字 | 散文或简短对比 |
| 怎么判断 | 50–100 字 | checklist，3–5 条 |
| 怎么开始 | 50–100 字 | 步骤或单一动作 |
| 常见误区 | 50–150 字 | 1–3 条，先说误区再纠正 |
| 今天就能做 | ≤ 50 字 | 一件事，不能是"了解更多" |
| 想继续了解 | 自动生成 | 链接区块，见 Part 4 |

**总阅读时间目标：3 分钟以内。**

---

## Part 3 · Boundary（边界）

每个模块的写作边界：

| 模块 | 写什么 | 不写什么 |
|------|--------|---------|
| 一句话 | 用最少的字说清楚本质 | 不用术语，不加解释，不超过一句 |
| 为什么 | 用生活语言解释原理，可以用对比、比喻 | 不引用论文，不提研究数据，不讲机制细节 |
| 怎么判断 | 帮助家长观察孩子的具体行为 | 不给诊断标准，不提量表，不区分诊断类别 |
| 怎么开始 | 给一个可执行、可重复的具体动作 | 不讲完整训练方法，不给课程计划，不要求专业技能 |
| 常见误区 | 纠正家长日常生活中真实存在的认知偏差 | 不做学术争论，不批评专业人员，不引用对立研究 |
| 今天就能做 | 一个今天就能完成的最小行动 | 不给长期计划，不要求购买任何东西，不需要专业人员在场 |
| 想继续了解 | 连接已有的 ET / EA / Resource / Journey | 不在这里解释内容，只提供入口 |

### KA 与 ET 的核心区别

| | KA | ET |
|--|----|----|
| 视角 | 家长视角 | 知识视角 |
| 目标 | 理解 + 行动 | 理解 + 深度 |
| 语言 | 生活语言 | 准确语言 |
| 证据 | 不直接引用 | 明确来源 |
| 长度 | 3 分钟 | 5–10 分钟 |
| 判断标准 | 家长读完能做一件事 | 家长读完能解释一件事 |

**判断一段内容该放 KA 还是 ET：**
> 如果它解释"为什么有效"→ ET。如果它帮家长"判断和行动"→ KA。

---

## Part 4 · Connection（连接）

每篇 KA 都是知识网络的节点，不是终点。

### 标准连接结构

```
KA
├── ← Journey（从哪里进来）
├── → ET（想了解为什么）
├── → EA（想看研究证据）
├── → Resource（今天就能用的工具）
└── → 相关 KA（同 Topic 其他问题）
```

### 连接规范

- **来源（Journey）**：标注哪些 Journey Path 会链接到本 KA
- **ET 链接**：只链接直接相关的 ET，不超过 3 篇
- **EA 链接**：只链接核心 EA，不超过 2 篇
- **Resource 链接**：优先链接可立即使用的资源
- **相关 KA**：同 Topic 内横向连接，帮助自然延伸阅读

### Metadata 规范

```yaml
id: KA-000XXX
topic: topic-xxx
series: series-xxx
title: ""
one_liner: ""        # ≤ 20 字，让家长继续读下去的那一句话
reading_time: 3 min
linked_et: []
linked_ea: []
linked_resource: []
linked_journey: []
related_ka: []
status: Draft
version: v1.0
```

---

## Part 5 · KA Gate（发布门槛）

KA 不是"写出来"的，而是"发布"的。
以下为硬性 Gate，**全部 PASS 才能进入 Repository**。

### Gate 1 · Boundary

| 检查项 | PASS 条件 |
|--------|----------|
| 没有引用论文 | 全文无论文名、DOI、研究数据 |
| 没有写成 ET | 无深度机制解释，无学术语言 |
| 没有诊断标准 | ③ 怎么判断不以诊断名称作为条件 |
| 没有训练课程 | ④ 怎么开始不含完整方法或课程计划 |
| 没有超出 Topic 边界 | 内容与 topic 字段一致 |

### Gate 2 · Readability

| 检查项 | PASS 条件 |
|--------|----------|
| 3 分钟内可读完 | 总字数符合各模块规格 |
| 有 one_liner | ≤ 20 字，可独立存在 |
| 有真实生活例子 | ② 或 ③ 中至少一个具体场景 |
| 有今天就能做的行动 | ⑥ 不是"了解更多"或"咨询专业人员" |

### Gate 3 · Connection

| 检查项 | PASS 条件 |
|--------|----------|
| Journey 已关联 | linked_journey 非空 |
| ET 已关联 | linked_et 非空 |
| EA 已关联 | linked_ea 非空 |
| Resource 已关联 | linked_resource 非空 |

### Gate 4 · Metadata

| 字段 | 要求 |
|------|------|
| id | KA-000XXX 格式 |
| one_liner | ≤ 20 字 |
| reading_time | 标注分钟数 |
| topic | 有效 topic slug |
| series | 有效 series slug |
| linked_journey | 非空 |
| linked_et | 非空 |
| linked_ea | 非空 |
| linked_resource | 非空 |

### 结果

```
Gate 1 ✅  Gate 2 ✅  Gate 3 ✅  Gate 4 ✅
→ KA Validator PASS → 进入 Repository

任意 Gate FAIL
→ 退回修改，不得发布
```

---

## 知识转译流程

```
Research (EA)
      │
      ▼
Knowledge Theme (ET)
      │
      ▼
Knowledge Translation (KA)    ← 本标准覆盖范围
      │
      ▼
Journey Action
      │
      ▼
Resource
```

KA 的输入是 EA + ET，输出是家长能理解、能行动的知识。

---

## 黄金样例（Golden Sample）

**KA-Visual-001**：为什么图片能帮助孩子沟通？

定位：**Repository Golden Sample No.1**
不是第一篇 KA，而是以后所有 KA 的模板。

它承担两个任务：
1. 向家长传递知识。
2. 向未来的内容贡献者展示"一篇标准 KA 应该长什么样"。

通过真实用户验证后，KA-Visual-001 成为所有后续 KA 的参考模板。

后续 Topic 推进顺序（tentative）：

| Sprint | Topic | KA |
|--------|-------|----|
| 25A | Visual Supports | KA-Visual-001 |
| 25B | Communication | KA-Communication-001 |
| 26 | Language Development | KA-Language-001 |
| 27 | Social Communication | KA-SocialComm-001 |
| 28 | Participation | KA-Participation-001 |

---

## 结束语

> KA 不是把研究写简单，而是把正确的知识写得容易理解、容易使用。

这是 Anori 与传统文献库最大的区别，也是 Sprint 25 的核心目标。

---

*KA Standard v1.0 · Frozen · 2026-07-14*
*下一个版本：v1.1（基于 KA-Visual-001 用户验证结果更新）*
