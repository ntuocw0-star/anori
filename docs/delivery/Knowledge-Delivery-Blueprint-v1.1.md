# Knowledge Delivery Blueprint v1.1

**Sprint 15 · Phase 0**
**版本：** v1.1（从 v1.0 升级）
**状态：** 冻结

---

## 核心命题

> 一份知识，怎样以不同形式交付给不同家长？

Delivery 是整个 Pipeline 的最后一层：

```
Paper → EA → ET → KA → Path → Knowledge Delivery
```

---

## v1.1 两处升级

**升级一：Question Dictionary 的来源架构**

v1.0：预设 50 条初始词典
v1.1：五渠道来源，每条 entry 有来源标注，设计为长期成长的数据资产

**升级二：Literature Library 增加 Topic 层**

v1.0：Series → KA → EA（三层）
v1.1：Topic → Series → KA → EA（四层）

Topic 层保证未来几百篇 EA 时导航仍然清晰。

---

## 五个模块（不变）

| 模块 | 核心职责 | 规范文件 |
|------|---------|---------|
| Knowledge Bundle | KA → 多格式文件 | Download-Bundle-Spec-v1.0 |
| Search Clarifier | 模糊表达 → PRB/Path | Search-Clarifier-Spec-v1.0 |
| Question Dictionary | 家长表达的数据资产 | **Question-Dictionary-Spec-v1.1** |
| Literature Library | Topic → Series → KA → EA | **Literature-Library-Spec-v1.1** |

---

## 架构图（v1.1）

```
KA（唯一 Source）
        │
        ├─ Knowledge Bundle ──────── 家长直接下载
        │
        ├─ Path（已实现）────────── 网页浏览
        │
        ├─ Search Index（已实现）── 搜索可达
        │       ↑
        │  Question Dictionary ───── Clarifier 数据层
        │       ↑
        │  Problem Universe ──────── 初始词典来源
        │       ↑
        │  EA Layer 3 ───────────── Parent Quotes 来源
        │       ↑
        │  Analytics（Phase 2）──── 用户行为学习
        │
        └─ Literature Library ────── Topic → Series → KA → EA
```

---

## 执行顺序（调整后）

```
① Question Dictionary   ← 数据基础，最优先
        ↓
② Search Clarifier      ← 消费 Dictionary 的 UI 层
        ↓
③ Literature Library    ← 知识导航，AAC 系列立即上线
        ↓
④ Download Bundle       ← 知识交付，One-page Summary 先行
        ↓
⑤ Analytics             ← 反哺 Dictionary，形成闭环
```

**为什么这个顺序：**
- Dictionary 是数据，Clarifier 用数据，不能倒置
- Library 展示已有的 AAC 系列，无需等待新内容
- Bundle 最后，因为需要内容层和 PDF 生成工具就位
- Analytics 最后，因为需要前四者都上线才有数据可收

---

## 成长闭环（目标状态）

```
Problem Universe
    +
EA Layer 3（Parent Quotes）
    +
人工补充
        ↓
Question Dictionary（初始版）
        ↓
Search Clarifier 上线
        ↓
用户使用 → Analytics 记录真实搜索词
        ↓
Dictionary 更新（source: analytics）
        ↓
Clarifier 更准确 → 更多用户找到正确路径
        ↓
重复
```

---

## 实现优先级矩阵（v1.1）

| 模块 | Sprint 15 | Sprint 16 | Sprint 17+ |
|------|-----------|-----------|-----------|
| Question Dictionary | ✅ 建立 JSON + 初始词典 | ✅ Analytics 接入 | ✅ AI 归纳 |
| Search Clarifier | ✅ 触发逻辑 + 硬编码选项 | ✅ 从 Dict 动态读取 | — |
| Literature Library | ✅ /library + /series | ✅ /topic + /ea | ✅ 满内容 |
| Knowledge Bundle | ✅ One-page Summary + 打印 | ✅ Official PDF | ✅ Audio/Video |
| Analytics | — | ✅ 基础埋点 | ✅ 完整分析 |

---

*Knowledge Delivery Blueprint v1.1 · 冻结 · 2026-07-10*
