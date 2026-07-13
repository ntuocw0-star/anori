# Sprint 20 · 阶段状态同步

**日期：** 2026-07-13
**节点：** RI-ANORI-0001 Ready 后，20B-3 开始前

---

## 一、Sprint 进度

| Sprint | 内容 | 状态 |
|--------|------|------|
| 20A | Resource Item Data Model（resource-items.json） | ✅ 完成 |
| 20B-1 | ORS v1.0（Original Resource Standard） | ✅ 冻结 |
| 20B-2 | RI-ANORI-0001 First–Then Visual Support Card | ✅ Ready |
| 20B-3 | RI-ANORI-0002 家长观察记录表 | ▶ 下一步 |

**Sprint 20 叙事线：**

> 20A 建数据 → 20B-1 建标准 → 20B-2 验证标准 → 20B-3 复用标准

到 20B-3 结束，Sprint 20 形成完整闭环：
- 数据模型存在
- 制作标准存在
- 两份 Ready 原创资源存在

---

## 二、产品资产（正式存在）

### 标准与规范
| 资产 | 版本 | 文件 |
|------|------|------|
| Original Resource Standard | ORS v1.0 · 冻结 | ORS-v1.0.md |
| Resource Item Data Model | Sprint 20A · 通过校验 | resource-items.json |

### 原创资源
| ID | 名称 | 状态 | 版本 |
|----|------|------|------|
| RI-ANORI-0001 | First–Then Visual Support Card | ✅ ready | v1.0.0 |
| RI-ANORI-0002 | 家长观察记录表 | ▶ Sprint 20B-3 | — |

### Resource 模块里程碑
> Resource 模块已从「设计阶段」进入「生产阶段」。
> ORS v1.0 经过 RI-ANORI-0001 的完整 Lifecycle（draft → internal_review → qa → ready）验证，标准可复用。

---

## 三、已知 Gap 清单

### Knowledge Gap
| ID | 说明 | 优先级 |
|----|------|--------|
| KA-Visual-001 | 「为什么 First–Then 有效？视觉支持在家庭中的应用」| 高（RI-ANORI-0001 关联缺失） |

### Inventory Gap
| 来源 | 说明 |
|------|------|
| WHO | 首批范围包含 WHO，但 resource-items.json 中尚无 WHO Item |

### Verification Gap（外部资源）
| 条目 | 待核实内容 |
|------|-----------|
| CDC 简体中文资源 | 官方中文版是否存在 |
| NICE Crown Copyright | 摘要是否需要授权申请 |

**治理原则（不变）：** 外部资源不得根据网页可访问性推断 `language_status` 或 `reuse_status`，所有 `draft` 条目须人工核实后方可发布。

---

## 四、Sprint 20B-3 设计目标（冻结）

### 资源定位

**名称：** 家长观察记录表
**ID：** RI-ANORI-0002
**定位原则：** 这是一份**家庭观察记录表**，不是行为记录表，不是评估量表。

> 原因：围绕「问题行为」的记录框架容易将产品定位带偏，与 Anori「陪伴家庭」的核心定位不符。

### 记录维度（建议）

| 维度 | 示例问题 |
|------|---------|
| 今天发生了什么？ | 自由填写，不预设框架 |
| 孩子参与了什么？ | 活动、场景、时长 |
| 今天有什么让人开心的事？ | 正向记录优先 |
| 有没有遇到困难？ | 可选填，不强制 |
| 想和老师 / 医生分享的观察 | 跨场景沟通桥梁 |

### 与 RI-ANORI-0001 的关系

- 复用 ORS v1.0 全部规范
- 复用双语排版规则（中文主标签在上）
- 复用相同字体栈、色彩 token、文件结构
- 内容层重新设计：表格 / 问题驱动，而非卡片 / 图示驱动

### 预期 Lifecycle

```
draft → internal_review → qa → ready
```

目标：与 RI-ANORI-0001 使用相同流程，验证 ORS 在「表格型资源」上的复用性。

---

## 五、暂缓事项（本 Sprint 不处理）

- 第三个 Knowledge Hub 建设
- Resource 页面大规模重构
- 批量导入剩余 46 条 EA
- 37 个 Seed 概念扩充
- 资源封面统一模板（Cover Template）— 等 RI-ANORI-0002 完成后评估

---

*Sprint 20 · 状态同步完成 · 2026-07-13*
