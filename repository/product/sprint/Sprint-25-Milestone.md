# Anori · Sprint 25 Milestone
## 第一套产品方法论

**记录日期：** 2026-07-15
**Sprint：** 25A 收官 · 25B 启动
**状态：** Active

---

## 今天发生了什么

这不是一次计划好的方法论建设。它是从"写一篇 KA"出发，演化出来的。

```
写 KA-Visual-001（Golden Sample）
        ↓
审阅时发现：用户语言和知识语言混用
        ↓
诞生 PLTS v1.0
        ↓
意识到产品语言不能反向影响 Repository
        ↓
形成实施原则：Repository 保留专业命名，产品界面负责翻译
```

四步，一条连续的演进链，不是四个独立决定。

---

## 三层基础设施

```
数据层   Repository Standard   知识如何组织
  ↕
内容层   KA Standard v1.0      知识如何转译
  ↕
产品层   PLTS v1.0             知识如何呈现
```

**连接三层的桥梁：**
> Repository 可以保留专业命名；产品界面负责翻译。

这条原则确保：
- `topic-aac` 永远是 `topic-aac`，不随产品文案变动
- 产品文案可以持续根据用户研究迭代，不影响底层结构

---

## 今天冻结的文件

| 文件 | 状态 | 作用 |
|------|------|------|
| KA Standard v1.0 | ✅ Frozen | 内容层规范 |
| KA-Visual-001 | ✅ Frozen · Golden Sample No.1 | 标准的第一次落地 |
| PLTS v1.0 | ✅ Frozen | 产品层规范 |
| Sprint 25B Implementation Principles | ✅ 记录 | 连接三层的实施规则 |

---

## Sprint 25B 任务

### 25B-1 · Library 信息架构

Repository 保持不变。产品界面首次遵循 PLTS：

| Repository slug | 产品显示文案 |
|----------------|------------|
| topic-communication | 沟通不只是说话 |
| topic-aac | 不会说话，不代表不能沟通 |
| topic-visual-supports | 为什么图片能帮助孩子？ |
| topic-language | 孩子怎样学会语言？ |
| topic-participation | 如何让孩子参与更多？ |

**验收标准：** Library 一级导航无专业缩写，无领域名，只有用户语言。

---

### 25B-2 · Topic 首页

每个 Topic 首页的信息层级：

```
一句话（one_liner）
        ↓
KA（3 分钟，问题入口）
        ↓
ET（为什么）
        ↓
EA（证据）
```

体现 PLTS 第一原则：Problem → Knowledge → Evidence

**验收标准：** 进入 Topic 首页，家长第一眼看到的是问题，不是领域名。

---

### 25B-3 · 第一次家长试读

使用 KA-Visual-001 进行第一轮真实验证。

**观察指标：**
- 家长能否在 3 分钟内读完
- 能否复述 one_liner："图片不会消失，所以孩子有时间理解"
- 是否愿意尝试"今天就做一件事"

**意义：**
如果通过，KA Standard v1.0 不只是理论规范，而是经过产品验证的标准。

---

## 一个判断

Anori 从今天开始不只是一个 Repository 项目。

它有了三层稳定的基础设施，有了连接三层的实施原则，有了第一个经过规范验证的内容样本。

Sprint 25B 的工作是让这套方法论第一次在真实产品中可见。

---

## 核心原则备忘

> 用户先遇到问题，再遇到知识；最后才遇到专业术语。

> 专业词不是障碍，是奖励。

> Repository 可以保留专业命名；产品界面负责翻译。

> KA 不是把研究写简单，而是把正确的知识写得容易理解、容易使用。

---

*Sprint 25 Milestone · 2026-07-15*
*下一个里程碑：Sprint 25B 收官 · Library 升级完成 · 第一次家长验证*
