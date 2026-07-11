# P001 Production Package v1.0
# 孩子不会说话

Status: Production Ready ✅
Version: 1.0
Sprint: 10
Completed: 2026-07

---

## 1. Project Summary

**User Path**: P001 — 孩子不会说话
**Core Problem**: 家长发现孩子不会说话，不知道从哪里开始
**One Sentence**: 不会说话不等于不会沟通。今天可以从一张图片开始。
**Primary Audience**: 有语言发展迟缓或完全不说话孩子的家长
**Domain Coverage**: Technology Domain（AAC / PECS / SGD）

**Design Principle**:
不要生产页面。要生产一条家长能够真正走完的路径。

---

## 2. Journey Structure

```
孩子不会说话（P001）
│
├── Journey                     入口页，卸下负担，给出路径地图
│
├── Understanding
│     └── U001 什么是 AAC？     理解工具，建立正确期待
│
├── Support
│     └── SUP001 AAC 怎么开始？ 今天第一步
│
└── Support+
      ├── S001 PECS 怎么开始？
      ├── S002 SGD 适合谁？
      ├── S003 家里每天怎么配合 AAC？
      ├── S004 学校老师需要知道什么？
      ├── S005 孩子不愿意使用 AAC 怎么办？
      └── S006 多久能看到变化？
```

---

## 3. Information Architecture

```
层级 1  Journey         定向 + 共情 + 路径地图
层级 2  Understanding   概念建立（What & Why）
层级 3  Support         第一步行动（How to Start）
层级 4  Support+        具体场景支持（深度 + 广度）
```

**每层关系**:
- Journey → 家长知道自己在哪里，下一步去哪里
- Understanding → 家长不再用错误假设来理解孩子
- Support → 家长今天就能开始做一件事
- Support+ → 家长在不同场景遇到困难时有地方去

---

## 4. Page Inventory

| ID      | Title                   | Type          | One Outcome                        | One Moment           |
|---------|-------------------------|---------------|------------------------------------|----------------------|
| journey | 孩子不会说话 Journey     | Journey       | 知道下一步去哪里                    | 选择第一步进入       |
| u001    | 什么是 AAC？             | Understanding | 理解 AAC 不是放弃语言，是通向语言   | 放下一个误解         |
| sup001  | AAC 怎么开始？           | Support       | 今天知道第一件事是什么              | 找到第一个沟通时机   |
| s001    | PECS 怎么开始？          | Support+      | 今天做出第一张图片                  | 第一次图片交换       |
| s002    | SGD 适合谁？             | Support+      | 今天能判断 SGD 现在适不适合         | 做出判断             |
| s003    | 家里每天怎么配合 AAC？   | Support+      | 今晚吃饭把工具放桌上                | 今晚吃饭             |
| s004    | 学校老师需要知道什么？   | Support+      | 今天知道怎么给老师发第一条消息      | 发出那条消息         |
| s005    | 孩子不愿意使用 AAC？     | Support+      | 今天允许自己停下来观察              | 今天先停，明天再试   |
| s006    | 多久能看到变化？         | Support+      | 知道什么是真正的进步并开始记录      | 写下第一个记录       |

---

## 5. One Outcome / One Moment 汇总

**路径核心 One Outcome**:
帮助家长从「孩子不会说话」走到「今天开始 AAC」

**路径核心 One Moment**:
第一次图片交换

**各页 One Outcome**:
- Journey: 知道方向
- U001: 放下误解
- SUP001: 今天开始
- S001: 第一张图片
- S002: 做出判断
- S003: 今晚吃饭
- S004: 发出消息
- S005: 允许停下
- S006: 开始记录

---

## 6. Component Inventory

本路径使用的所有组件：

| 组件名               | 使用页面                    | 说明                              |
|----------------------|-----------------------------|-----------------------------------|
| Hero Block           | 全部                        | 标题 + 陪伴语                     |
| Today Box            | 全部                        | 绿色，今天先做这一件事             |
| Step List            | sup001, s001, s003, s004    | 编号步骤，每步含例子               |
| Decision Box         | s002                        | 可以考虑 / 先等等，双栏判断        |
| Do/Don't Panel       | s003, s004, s005            | 绿色做 / 灰色不用做               |
| Life Moments         | s003, s004                  | Emoji + 生活场景                  |
| Evidence Box         | 全部                        | ★★★★★ + ✓ 列表 + 情感转译         |
| Professional Block   | 全部                        | 如果有专业人员 + 暂时没有也不用担心|
| Progress Signals     | s005, s006                  | 这些都算进步                      |
| Timeline             | s006                        | 时间轴，带进步信号                 |
| Next Step Grid       | 全部                        | 3列导航按钮                       |
| Back Links           | 全部                        | 返回上一层                        |
| Closing              | 全部                        | 品牌识别句（固定）                 |
| Conversation Starter | s004                        | 参考说法，可改写                   |
| Path Reflection      | s006                        | 路径回顾，还原家长走过的动作       |

---

## 7. Navigation Tree

```
Journey
  ├──→ U001 什么是 AAC？
  │      └──→ SUP001 AAC 怎么开始？
  │              ├──→ S001 PECS 怎么开始？
  │              │      ├──→ S002 SGD 适合谁？
  │              │      └──→ S003 家里怎么配合？
  │              ├──→ S002 SGD 适合谁？
  │              │      ├──→ S003 家里怎么配合？
  │              │      └──→ S001 PECS
  │              └──→ S003 家里怎么配合？
  │                     ├──→ S004 学校老师
  │                     ├──→ S005 不愿意使用
  │                     └──→ S006 多久有变化
  ├──→ S004 学校老师
  │      ├──→ S005 不愿意使用
  │      └──→ S006 多久有变化
  ├──→ S005 不愿意使用
  │      ├──→ S006 多久有变化
  │      └──→ S003 家里怎么配合（Recovery）
  └──→ S006 多久有变化
         └──→ P002 孩子不会表达情绪（Cross-path）
```

**Recovery Loop**: S005 → S003 / S001（允许后退重来）

---

## 8. Evidence Mapping

| 页面    | 主要 Repository             | Evidence Level |
|---------|-----------------------------|----------------|
| u001    | INT-TECH-002                | ★★★★★          |
| sup001  | EA-TECH-001, EA-TECH-002    | ★★★★★          |
| s001    | INT-TECH-002, REL-TECH-003  | ★★★★★          |
| s002    | INT-TECH-003, REL-TECH-002  | ★★★★★          |
| s003    | EA-TECH-005, EA-TECH-009    | ★★★★★          |
| s004    | EA-TECH-005, EA-TECH-006    | ★★★★★          |
| s005    | EA / REL / INT              | ★★★★★          |
| s006    | EA / Evidence Trace         | ★★★★★          |

**Evidence 写作规范**:
- 用：研究发现 / 大量研究发现 / 系统综述发现 / 国际指南建议
- 不用：研究证明
- 结尾：情感转译句（不用学术结论收尾）

---

## 9. Cross-domain Links

| 来源页  | 目标                        | 类型              | 状态    |
|---------|-----------------------------|-------------------|---------|
| s004    | Education Domain            | 学校支持          | pending |
| s006    | P002 孩子不会表达情绪        | Cross-path        | active  |
| s001    | P002 S004 AAC×情绪          | Cross-path        | active  |
| journey | P002 孩子不会表达情绪        | Related Journey   | active  |

---

## 10. UI Pattern & Design Tokens

**颜色语义**:
- 绿色（bg-success）: Today Box, Do Panel, Progress Signals
- 蓝色（bg-accent）: Decision Box, Step Numbers, Judge Box
- 黄色（bg-warning）: 调整提示, 注意事项
- 红色（bg-danger）: 不适合, 警示
- 灰色（surface-1）: Evidence Box, Script Box, 信息卡

**排版规则**:
- 页面标题: 28px, font-weight 500
- 正文: 15px, line-height 1.7
- 辅助文字: 14px, color text-secondary
- 标签/说明: 12px, font-weight 500, letter-spacing 0.05em

**间距规则**:
- Section 间距: margin-bottom 2rem, border-bottom
- 组件内部: padding 1–1.25rem
- 圆角: border-radius 12px（卡片）

**最大宽度**: 680px，居中

---

## 11. Production Checklist

```
Journey
  ✅ 有共情入口（你可能正在经历的）
  ✅ 有路径地图（这条路径会带你走过）
  ✅ 有 Closing
  ✅ 有明确的第一步入口

每页 Support / Support+
  ✅ Hero + 陪伴语（不许诺结果）
  ✅ Today Box（今天先做这一件事）
  ✅ 核心内容（5–7 分钟阅读上限）
  ✅ Evidence Box（★★★★★ + ✓ + 情感转译）
  ✅ Professional Block（有 / 没有都有出路）
  ✅ Next Step（3 个入口）
  ✅ Closing（品牌识别句）
  ✅ Back Links

路径层面
  ✅ One Outcome 明确
  ✅ One Moment 明确
  ✅ Navigation 闭环
  ✅ Recovery Path 存在（S005→S003）
  ✅ Cross-path Links 已登记
  ✅ Path Reflection（S006 收束）
  ✅ Production Completion Standard 七项全部通过
```

---

## 12. Known Future Improvements

| 优先级 | 项目                                | 说明                                |
|--------|-------------------------------------|-------------------------------------|
| High   | 「崩溃地图」交互组件                | 目前文字版，未来升级为可点击判断树  |
| High   | meta/seo.json                       | 每页 SEO 元数据待补全               |
| High   | meta/ai.json                        | AI 引用结构数据待补全               |
| Medium | U002 为什么不说话≠不会沟通          | 待生产                              |
| Medium | U003 常见误解                       | 待生产                              |
| Medium | SGD 设备推荐页                      | 需要 Product Domain 支持            |
| Low    | 感觉地图交互工具                    | 长期产品功能                        |
| Low    | 视频内容层                          | Sprint 12+ 考虑                     |

---

## 13. Version History

| Version | Date    | Sprint | 变更说明                              |
|---------|---------|--------|---------------------------------------|
| 0.1     | 2026-07 | 9      | Blueprint 建立，Journey 完成           |
| 0.5     | 2026-07 | 10     | SUP001 + S001–S003 完成               |
| 1.0     | 2026-07 | 10     | S004–S006 完成，Production Ready      |

