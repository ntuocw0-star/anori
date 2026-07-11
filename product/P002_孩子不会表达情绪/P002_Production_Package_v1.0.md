# P002 Production Package v1.0
# 孩子不会表达情绪

Status: Production Ready ✅
Version: 1.0
Sprint: 10
Completed: 2026-07

---

## 1. Project Summary

**User Path**: P002 — 孩子不会表达情绪
**Core Problem**: 家长看到孩子崩溃、发脾气、沉默，不知道背后是什么，也不知道怎么帮
**One Sentence**: 崩溃不是脾气问题。先读懂来源，再决定支持方式。
**Primary Audience**: 有情绪表达困难孩子的家长（神经发展差异儿童为主）
**Domain Coverage**: Emotional Regulation, Sensory Processing, AAC×Emotion

**Design Principle**:
Anori 不急着教家长怎么处理崩溃，而是先帮助家长判断：孩子为什么会崩溃。
不同原因，需要不同支持。

**核心定位**:
神经发展差异儿童的情绪支持——不是普通亲子心理学，而是读懂崩溃，而不是管理崩溃。

---

## 2. Journey Structure

```
孩子不会表达情绪（P002）
│
├── Journey                          入口页，共情 + 重新定位问题
│
├── Understanding
│     └── U001 什么是情绪表达？       四层拆解：感觉→认出→说出→慢慢平静
│
├── Support
│     └── SUP001 为什么普通方法       时机比方法更重要
│               有时没效果？
│
└── Support+
      ├── S001 崩溃发生时怎么办？
      ├── S002 什么时候不用讲道理？
      ├── S003 什么时候先处理环境？
      ├── S004 什么时候 AAC 比安慰更重要？
      ├── S005 学校老师需要知道什么？
      └── S006 多久能看到变化？
```

---

## 3. Information Architecture

```
层级 1  Journey         共情承接 + 重新定义问题 + 路径地图
层级 2  Understanding   四层能力拆解（不是症状描述）
层级 3  Support         为什么普通方法有时失效（时机框架）
层级 4  Support+        六种具体场景的判断与支持
```

**P002 特有逻辑**:
Support+ 不是六个独立建议，而是六个不同来源的判断框架：
- S001: 最高点 → 少做少说
- S002: 语言接收关掉 → 等待时机
- S003: 感觉过载 → 处理环境
- S004: 沟通失败 → 给工具
- S005: 学校场景 → 共同语言
- S006: 时间预期 → 积累视角

---

## 4. Page Inventory

| ID      | Title                        | Type          | One Outcome                          | One Moment              |
|---------|------------------------------|---------------|--------------------------------------|-------------------------|
| journey | 孩子不会表达情绪 Journey      | Journey       | 知道问题不在孩子，在于缺少支持工具    | 选择从哪一步进入         |
| u001    | 什么是情绪表达？              | Understanding | 知道情绪表达是四件事，卡在哪里帮哪里  | 识别今天看到的是哪一层   |
| sup001  | 为什么普通方法有时没有效果？  | Support       | 知道不是方法错，而是时机错            | 下次先问来源再决定方法   |
| s001    | 崩溃发生时怎么办？            | Support+      | 崩溃最高点只做一件事：待在附近不说话  | 下次崩溃时先不说话       |
| s002    | 什么时候不用讲道理？          | Support+      | 知道大脑关闭时道理进不去，等信号      | 看到三个身体信号再开口   |
| s003    | 什么时候先处理环境？          | Support+      | 知道感觉过载路径，开始记录感觉地图    | 今天观察哪里最容易烦躁   |
| s004    | 什么时候 AAC 比安慰更重要？  | Support+      | 崩溃来自说不出来时，给工具比安慰有效  | 把 AAC 放到崩溃高发区   |
| s005    | 学校老师需要知道什么？        | Support+      | 今天给老师发一个早期信号              | 发出那条消息             |
| s006    | 多久能看到变化？              | Support+      | 知道进步是积累，开始记录第一个信号    | 写下第一个观察           |

---

## 5. One Outcome / One Moment 汇总

**路径核心 One Outcome**:
帮助家长从「看到崩溃」走到「读懂崩溃背后的原因」

**路径核心 One Moment**:
下一次崩溃前，先问：「这次是因为什么？」

**品牌翻译语言（全路径）**:
- 崩溃 ≠ 故意发脾气
- 沉默 ≠ 没有感受
- 哭闹本身不是原因，而是一种表现
- 不是方法错，而是来源不同
- 不是情绪问题，而是感觉过载
- 不是行为问题，而是转换困难
- 不是 AAC 的问题，而是需求没有被表达

---

## 6. Component Inventory

| 组件名               | 使用页面                | 说明                                    |
|----------------------|-------------------------|-----------------------------------------|
| Hero Block           | 全部                    | 标题 + 陪伴语                           |
| Today Box            | 全部                    | 绿色，今天先做这一件事                   |
| Reframe Box          | journey, u001, s002     | 划线旧想法 + 新理解                     |
| Four-Layer Framework | u001                    | 编号层级 + 生活例子                     |
| Myth/Truth Grid      | journey, u001           | 灰色常见说法 + 绿色研究告诉我们          |
| Flow Box             | sup001, s003, s004      | 崩溃来源路径图                          |
| Source Grid (6卡)    | sup001                  | 六种崩溃来源，每个含信号                 |
| Judge Box            | sup001                  | 先判断再支持，蓝色可勾选                 |
| State Map (3阶段)    | s001, s002              | 绿/红/蓝，崩溃前/中/后                  |
| Step List            | s001, s004              | 编号步骤，每步含 why 或 example          |
| Do/Can Wait Panel    | s001, s002, s005        | 可以做 / 可以等等                       |
| Recovery Signal List | s002                    | 五个身体「回来」信号                     |
| Timing Cards         | s002                    | 适合/不适合讲道理，颜色标注              |
| Sense Grid (4卡)     | s003                    | 四种感觉类型，含触发列表和信号           |
| Early Signal List    | s003                    | 崩溃前早期信号 checklist                |
| Compare Grid         | s004                    | 只有安慰 vs 安慰+AAC，双栏对比           |
| AAC Steps            | s004                    | 放工具/示范/等待/立即回应               |
| Cross-path Link Box  | s004                    | P001 × P002 路径交汇模块                |
| Gap Box              | s005                    | 家庭知道的 vs 学校看到的，双栏对比       |
| Conversation Starter | s005                    | 参考说法，可改写                         |
| Teacher Quick Cards  | s005                    | 信号→回应，4张判断卡                    |
| Evidence Box         | 全部                    | ★★★★★ + ✓ 列表 + 情感转译              |
| Parent Message       | 全部                    | 给家长的话，黄色背景                    |
| Professional Block   | 全部                    | 有专业人员/暂时没有都有出路              |
| Timeline             | s006                    | 时间轴，四阶段，含进步信号              |
| Progress Signals     | s006                    | 这些都算进步                            |
| Adjust Box           | s006                    | 什么时候需要重新检视，黄色警示           |
| Path Reflection      | s006                    | 路径回顾，还原家长走过的每一个动作       |
| Next Step Grid       | 全部                    | 3列导航按钮                             |
| Closing              | 全部                    | 品牌识别句（固定）                      |

---

## 7. Navigation Tree

```
Journey
  ├──→ U001 什么是情绪表达？
  │      └──→ SUP001 为什么普通方法有时没效果？
  │              ├──→ S001 崩溃发生时
  │              ├──→ S003 先处理环境
  │              └──→ S004 AAC 比安慰重要
  ├──→ S001 崩溃发生时
  │      ├──→ S002 不用讲道理
  │      ├──→ S003 先处理环境
  │      └──→ SUP001（回顾来源）
  ├──→ S002 不用讲道理
  │      ├──→ S003 先处理环境
  │      └──→ S004 AAC
  ├──→ S003 先处理环境
  │      ├──→ S004 AAC
  │      ├──→ S001（崩溃发生了）
  │      └──→ S005 学校
  ├──→ S004 AAC 比安慰重要
  │      ├──→ S005 学校
  │      ├──→ S006 多久有变化
  │      └──→ P001 孩子不会说话（Cross-path）
  ├──→ S005 学校老师
  │      ├──→ S006 多久有变化
  │      └──→ S001（崩溃处理）
  └──→ S006 多久有变化
         ├──→ P003 孩子行为问题（下一路径）
         ├──→ S001（遇到困难）
         └──→ Journey（重新出发）
```

**Recovery Loop**: S001 → SUP001（重新判断来源）

---

## 8. Evidence Mapping

| 页面    | 主题                    | Evidence Level | 关键发现                          |
|---------|-------------------------|----------------|-----------------------------------|
| u001    | 情绪调节发展，内感受    | ★★★★★          | 情绪能力可习得，内感受与表达相关  |
| sup001  | 功能行为评估，崩溃来源  | ★★★★★          | FBA 先找来源再干预效果更好        |
| s001    | 应激状态，共同调节      | ★★★★★          | 前额叶关闭，家长平静=孩子平静     |
| s002    | 延迟教导，低语言输入    | ★★★★★          | 平静后说一次 > 崩溃中说十次       |
| s003    | 感觉处理，早期介入      | ★★★★★          | 90%+ ASD 有感觉特殊性；预防>处理  |
| s004    | 沟通功能行为，AAC效果   | ★★★★★          | AAC 减少问题行为；压力下语言退化  |
| s005    | 家校一致性，教师培训    | ★★★★★          | 一致支持 > 独立干预；分享观察>要求|
| s006    | 情绪调节发展速度        | ★★★★★          | 数周至数月；家长识别能力也是指标  |

---

## 9. Cross-domain Links

| 来源页  | 目标                        | 类型              | 状态    |
|---------|-----------------------------|-------------------|---------|
| s004    | P001 孩子不会说话            | Cross-path        | active  |
| s005    | Education Domain            | 教育支持          | pending |
| s005    | P001 S004 学校+AAC           | Cross-path        | active  |
| s006    | P003 孩子行为问题            | 下一路径          | pending |
| journey | P001 孩子不会说话            | Related Journey   | active  |

**P001 × P002 正式交汇点**: S004
- P002 S004 → P001（AAC 工具入口）
- P001 S006 → P002（情绪路径延伸）

---

## 10. UI Pattern & Design Tokens

**P002 新增颜色语义**（在 P001 基础上）:
- 红色（bg-danger / border-danger）: 崩溃中 / 不适合时机
- 蓝色（bg-accent）: 判断框架 / 先判断再支持
- 黄色（bg-warning）: 给家长的话 / 重新检视提示

**State Map 颜色规则**（P002 新增组件）:
- 绿色 = 还来得及 / 最适合介入
- 红色 = 崩溃中 / 不适合语言介入
- 灰色 = 过渡 / 需要判断
- 蓝色 = 恢复期 / 可以开始

**Flow Box 规则**:
- 浅灰背景，步骤用 · 和 ↓ 标注
- 最终触发行使用 color: text-danger + font-weight 500
- 每个 Flow Box 必须有 flow-label 说明情境

---

## 11. Production Checklist

```
Journey
  ✅ 有情绪承接模块（你可能正在经历的）
  ✅ 有 Reframe Box（先放下一件事）
  ✅ 有 Myth/Truth Grid（常见说法 vs 研究）
  ✅ 有路径地图（带编号步骤）
  ✅ 有双入口 Next Step（普通 + 紧急）
  ✅ 有 Closing

每页 Support / Support+
  ✅ Hero + 陪伴语（不否定方法，不制造恐慌）
  ✅ Today Box（今天先做这一件事）
  ✅ 判断框架（先判断，再支持）
  ✅ 核心内容（5–7 分钟阅读上限）
  ✅ Evidence Box（★★★★★ + ✓ + 情感转译）
  ✅ Parent Message（给家长的话，黄色）
  ✅ Professional Block（有 / 没有都有出路）
  ✅ Next Step（3 个入口）
  ✅ Closing（品牌识别句）
  ✅ Back Links

路径层面
  ✅ One Outcome 明确
  ✅ One Moment 明确
  ✅ 定位清晰（神经发展差异，不是普通情绪教育）
  ✅ Navigation 闭环
  ✅ Recovery Path 存在（S001 → SUP001）
  ✅ Cross-path Links 已登记（P001 × P002）
  ✅ Path Reflection（S006 收束）
  ✅ Production Completion Standard 七项全部通过
```

---

## 12. Known Future Improvements

| 优先级 | 项目                                | 说明                                      |
|--------|-------------------------------------|-------------------------------------------|
| High   | Teacher Quick Card 独立下载版       | 可打印/分享给老师的一页判断卡             |
| High   | 感觉地图（Sensory Map）工具         | 家长记录孩子感觉触发点的互动工具          |
| High   | meta/seo.json + meta/ai.json        | 每页元数据待补全                          |
| High   | 崩溃地图（Meltdown Map）交互版      | 六来源可点击，直跳对应支持页             |
| Medium | U002 什么时候需要专业评估？         | 待生产                                    |
| Medium | Behavior Domain 连接                | P003 完成后补全                           |
| Low    | 感觉统合深度页                      | S003 延伸，需 OT Domain 支持              |
| Low    | 家长自我支持页                      | Parent Wellbeing Domain（长期）           |

---

## 13. Version History

| Version | Date    | Sprint | 变更说明                                          |
|---------|---------|--------|---------------------------------------------------|
| 0.1     | 2026-07 | 10     | Journey + U001 完成                               |
| 0.3     | 2026-07 | 10     | SUP001 第一版（普通心理学框架，后重写）           |
| 0.5     | 2026-07 | 10     | 方向修正：从情绪教育→神经发展差异支持             |
| 0.7     | 2026-07 | 10     | SUP001 重写 + S001–S003 完成                      |
| 0.9     | 2026-07 | 10     | S004–S005 完成，P001×P002 交汇点建立             |
| 1.0     | 2026-07 | 10     | S006 完成，Production Ready                       |

