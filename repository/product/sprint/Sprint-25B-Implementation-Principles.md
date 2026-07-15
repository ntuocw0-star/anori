# Sprint 25B · 实施原则

**建立日期：** 2026-07-15
**适用范围：** Sprint 25B Library 升级
**依据标准：** PLTS v1.0

---

## 核心实施原则

> **Repository 可以保留专业命名；产品界面负责翻译。**

---

## 两层分离

### Repository 层（保持稳定，不随产品文案变动）

```
topic-communication
topic-language
topic-visual-supports
topic-aac
series-visual-supports
series-aac
```

slug、ID、文件名、引用关系一律不变。

### 产品界面层（可持续优化，不影响底层数据）

```
沟通不只是说话
孩子怎样学会语言？
为什么图片能帮助孩子？
不会说话，不代表不能沟通
```

---

## 好处

**1. Repository 永远稳定。**
不需要为了产品文案改 Topic slug、Series ID、文件名或引用关系。

**2. 产品语言可以持续优化。**
今天觉得"沟通不只是说话"最好，半年后如果用户研究发现"孩子不会说话怎么办"转化更好，只需要改显示文案，不需要动底层数据。

---

## Library 一级导航目标对照

| Repository slug | Sprint 25B 显示文案 |
|----------------|-------------------|
| topic-communication | 沟通不只是说话 |
| topic-aac | 不会说话，不代表不能沟通 |
| topic-visual-supports | 为什么图片能帮助孩子？ |
| topic-language | 孩子怎样学会语言？ |
| topic-participation | 如何让孩子参与更多？ |

这张对照表是 Sprint 25B Library 升级的验收标准之一。

---

## 三层基础设施总览

| 标准 | 对应层 | 职责 |
|------|--------|------|
| Repository Standard | 数据层 | 如何组织知识 |
| KA Standard v1.0 | 内容层 | 如何转译知识 |
| PLTS v1.0 | 产品层 | 如何呈现知识 |

三份标准职责清晰，互不重叠。

---

*Sprint 25B Implementation Principles · 2026-07-15*
