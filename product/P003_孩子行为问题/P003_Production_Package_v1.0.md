# P003 Production Package v1.0
# 孩子行为问题

Status: Production Ready ✅
Version: 1.0
Sprint: 10
Completed: 2026-07

---

## 1. Project Summary

**User Path**: P003 — 孩子行为问题
**Core Problem**: 家长看到孩子打人、咬人、自伤、大哭大闹，不知道为什么，也不知道怎么帮
**One Sentence**: 行为是信息，不是问题。找到来源，才能真正帮到孩子。
**Primary Audience**: 有挑战性行为孩子的家长（神经发展差异儿童为主）
**Domain Coverage**: Behavior Support, Functional Behavior Analysis, PBS

**Platform Principle**:
挑战性行为不是随机的，也不是故意的。
它有功能——是孩子目前能用的最有效方式，
用来得到某样东西，或者逃开某件事。
行为是信息，不是问题。

**核心定位**:
正向行为支持（PBS）框架的家长版本——不是管理行为，而是读懂行为背后的功能，然后给孩子更好的出口。

---

## 2. Journey Structure

```
孩子行为问题（P003）
│
├── Journey                          入口页，共情 + 认知重构 + 路径地图
│
├── Understanding
│     └── U001 行为背后是什么？       六种功能，同一行为不同来源
│
├── Support
│     └── SUP001 怎么找到来源？       A-B-C 观察框架
│
└── Support+
      ├── S001 行为发生时怎么办？
      ├── S002 怎么帮孩子建立替代行为？
      ├── S003 怎么预防行为问题发生？
      ├── S004 学校老师需要知道什么？
      ├── S005 自伤行为怎么办？
      └── S006 多久能看到变化？
```

---

## 3. Information Architecture

```
层级 1  Journey         共情承接 + 认知重构（行为≠故意）+ 路径地图
层级 2  Understanding   六种功能框架（行为有功能）
层级 3  Support         A-B-C 观察方法（找到来源）
层级 4  Support+        六个具体场景的判断与支持
```

**P003 特有逻辑**:
Support+ 不是六个独立建议，而是一套连贯的支持流程：
- S001: 发生时 → 安全第一，来源决定回应
- S002: 建立替代 → 同功能 + 更容易 + 马上有效
- S003: 预防 → 改变触发条件，而不是管理孩子
- S004: 家校 → 共同判断语言，不是各自一套
- S005: 自伤 → 特殊处理，专业评估
- S006: 时间 → 渐进改变，调整也是进步

---

## 4. Page Inventory

| ID      | Title                    | Type          | One Outcome                          | One Moment              |
|---------|--------------------------|---------------|--------------------------------------|-------------------------|
| journey | 孩子行为问题 Journey      | Journey       | 知道行为有来源，不是故意               | 开始问「他为什么这样？」  |
| u001    | 行为背后是什么？           | Understanding | 知道六种功能，同一行为可以来自不同来源  | 回想一次行为，猜一个来源  |
| sup001  | 怎么找到行为的来源？       | Support       | 今天能用 A-B-C 观察一次行为           | 记录一次 ABC             |
| s001    | 行为发生时怎么办？         | Support+      | 安全第一，来源不同回应不同             | 下次先确认安全，不说话    |
| s002    | 怎么帮孩子建立替代行为？   | Support+      | 替代行为必须满足同一功能才会被使用      | 准备一个替代，放到旁边    |
| s003    | 怎么预防行为问题发生？     | Support+      | 找到高风险时段，改变一个触发条件        | 观察今天哪里最容易发生    |
| s004    | 学校老师需要知道什么？     | Support+      | 给老师来源信息，而不是行为清单          | 今天告诉老师一个来源      |
| s005    | 自伤行为怎么办？           | Support+      | 自伤有来源，今天先记录 ABC             | 记录一次自伤 ABC         |
| s006    | 多久能看到变化？           | Support+      | 改变是渐进的，调整也是进步              | 写下一个小变化            |

---

## 5. One Outcome / One Moment 汇总

**路径核心 One Outcome**:
帮助家长从「怎么阻止行为」走到「读懂行为背后的来源」

**路径核心 One Moment**:
第一次在行为发生前，问「这次是因为什么？」

**Anori Functional Language（全站统一）**:
```
🗣️ 我要说什么（沟通需求）
👁️ 看看我（寻求关注）
🚪 我想离开（逃避）
🌀 身体需要（寻求感觉）
😰 我承受不了（情绪/内在状态）
🎁 我要那个（取得实物）
```

**品牌翻译语言（全路径）**:
- 行为 ≠ 故意捣乱
- 行为是信息，不是问题
- 不是方法错，而是来源不同
- 替代行为不是奖励，而是新的出口
- 预防比处理更有效

---

## 6. Component Inventory

| 组件名               | 使用页面              | 说明                              |
|----------------------|-----------------------|-----------------------------------|
| Hero Block           | 全部                  | 标题 + 陪伴语                     |
| Today Box            | 全部                  | 绿色，今天先做这一件事             |
| Core Box             | u001                  | 蓝色，平台核心原则卡               |
| Function List        | u001                  | 六种功能 + 生活例子 + 来源链接     |
| Same Behavior Table  | u001                  | 同一行为五种来源对比表             |
| ABC Cards            | sup001                | 蓝/红/绿三色卡，A-B-C 框架        |
| Function Signal List | sup001                | 六种来源观察信号 + 判断问题        |
| ABC Record Box       | sup001                | 一次观察记录格式                   |
| Judge Box            | sup001, s001          | 先判断再支持，蓝色可勾选           |
| State Map (3阶段)    | s001, s002            | 行为前/中/后，颜色编码             |
| First Box            | s001                  | 红色，最高点只做一件事             |
| Function Response    | s001                  | 六种来源对应回应 + 不要做          |
| Do/Can Wait          | s001, s002, s003      | 可以做 / 可以等等                 |
| Replacement Triangle | s002                  | 同功能+更容易+马上有效，三卡       |
| Replace Grid         | s002                  | 旧行为 vs 替代行为，六种来源       |
| Pattern Box          | s003                  | ABC 找规律，五个观察问题           |
| Daily Grid           | s003                  | 四个高风险时段卡                   |
| Gap Box              | s004                  | 家长知道的 vs 学校看到的           |
| Teacher Quick Cards  | s004                  | 信号→回应，快速判断卡             |
| Conversation Starter | s004                  | 参考说法，可改写                   |
| Source List          | s005                  | 自伤四种来源 + 信号                |
| Seek Box             | s005                  | 红色，什么时候需要专业支持         |
| Timeline             | s006                  | 五阶段时间轴，含进步信号           |
| Progress Signals     | s006                  | 这些都叫进步                       |
| Setback Tags         | s006                  | 可能导致退步的情境标签             |
| Rewind Box           | s006                  | 回头看，认知变化清单               |
| Path Reflection      | s006                  | 路径回顾，还原家长走过的动作       |
| Parent Message       | s001, s002, s005, s006| 给家长的话，黄色                  |
| Evidence Box         | 全部                  | ★★★★★ + ✓ + 情感转译              |
| Professional Block   | 全部                  | 有专业人员/暂时没有都有出路        |
| Next Step Grid       | 全部                  | 3列导航按钮                       |
| Closing              | 全部                  | 品牌识别句（固定）                 |

---

## 7. Navigation Tree

```
Journey
  ├──→ U001 行为背后是什么？
  │      └──→ SUP001 怎么找到来源？
  │              ├──→ S001 行为发生时
  │              ├──→ S002 替代行为
  │              └──→ S003 预防
  ├──→ S001 行为发生时
  │      ├──→ S002 替代行为
  │      ├──→ S003 预防
  │      └──→ SUP001（回顾来源）
  ├──→ S002 替代行为
  │      ├──→ S003 预防
  │      └──→ S004 学校
  ├──→ S003 预防
  │      ├──→ S004 学校
  │      └──→ S002（替代行为）
  ├──→ S004 学校
  │      ├──→ S005 自伤
  │      └──→ S006 多久有变化
  ├──→ S005 自伤
  │      ├──→ S006 多久有变化
  │      └──→ SUP001（回到来源）
  └──→ S006 多久有变化
         ├──→ P004 孩子学校适应（下一路径）
         ├──→ S001（遇到困难）
         └──→ Journey（重新出发）
```

**Recovery Loop**: S001 → SUP001（重新判断来源）

---

## 8. Evidence Mapping

| 页面    | 主题                        | Evidence Level | 关键框架                    |
|---------|-----------------------------|----------------|-----------------------------|
| u001    | 行为功能分类，FBA            | ★★★★★          | 功能行为评估核心假设         |
| sup001  | A-B-C 观察，家长培训         | ★★★★★          | 非专业人员也能用 FBA         |
| s001    | 应激状态，匹配回应           | ★★★★★          | 回应匹配功能，效果是3倍      |
| s002    | FCT 功能沟通训练             | ★★★★★          | 替代行为效率决定使用率       |
| s003    | 前提事件干预，PBS            | ★★★★★          | 改变条件比改变行为更有效     |
| s004    | 家校一致性，功能信息共享     | ★★★★★          | 来源信息比标签更有用         |
| s005    | 自伤功能评估，照顾者支持     | ★★★★★          | 自伤有功能，家长需要支持     |
| s006    | 行为改变速度，动态支持       | ★★★★★          | 渐进改变，退步是过程         |

---

## 9. Cross-domain Links

| 来源页  | 目标                        | 类型              | 状态    |
|---------|-----------------------------|-------------------|---------|
| u001    | P002 情绪支持                | Cross-path        | active  |
| s001    | P002 崩溃处理                | Cross-path        | active  |
| s002    | P001 AAC（沟通功能替代）     | Cross-path        | active  |
| s004    | P004 学校适应                | Cross-path        | active  |
| s006    | P004 孩子学校适应（下一路径）| 下一路径          | active  |

**ABC Framework** — 全站通用工具，在 P002 S001、P003 SUP001 均有使用

---

## 10. UI Pattern & Design Tokens

**P003 新增颜色语义**:
- 蓝色 Core Box（bg-accent）: 平台核心原则
- 红色 First Box（bg-danger）: 最高点，安全第一
- 绿色替代卡（bg-success）: 可以做的替代行为
- 黄色 setback（bg-warning）: 可能退步的情境

**Replacement Triangle 规格**:
- 三卡等宽，蓝色背景
- 大数字 1/2/3 + 标题 + 说明
- 条件：同功能 → 更容易 → 马上有效

**Function Language 标准显示**:
- Emoji + 中文名称（括号内来源类型）
- 全站统一，不重新解释

---

## 11. Production Checklist

```
Journey
  ✅ 有共情入口（你可能正在经历的）
  ✅ 有认知重构（行为≠故意）
  ✅ 有路径地图（六步）
  ✅ 有双入口 Next Step

每页 Support / Support+
  ✅ Hero + 陪伴语
  ✅ Today Box
  ✅ 判断框架（先判断，再支持）
  ✅ 5–7 分钟阅读上限
  ✅ Evidence Box（★★★★★ + ✓ + 情感转译）
  ✅ Parent Message（给家长的话，黄色）
  ✅ Professional Block
  ✅ Next Step（3 个入口）
  ✅ Closing
  ✅ Back Links

路径层面
  ✅ One Outcome 明确
  ✅ One Moment 明确
  ✅ Anori Functional Language 统一
  ✅ Navigation 闭环
  ✅ Recovery Path（S001 → SUP001）
  ✅ Cross-path Links 已登记
  ✅ Path Reflection（S006 收束）
  ✅ Production Completion Standard 七项全部通过
```

---

## 12. Known Future Improvements

| 优先级 | 项目                                | 说明                                      |
|--------|-------------------------------------|-------------------------------------------|
| High   | ABC Observation Card 下载版         | 可打印的 ABC 记录卡，含来源猜测栏         |
| High   | 崩溃地图（Meltdown Map）交互版      | 六来源可点击，直跳对应支持页              |
| High   | meta/seo.json + meta/ai.json        | 每页元数据待补全                          |
| Medium | S004 Teacher Quick Card 独立下载    | 可截图分享给老师的一页判断卡              |
| Medium | Behavior Domain 深度页              | 每种来源的专属深度支持页                  |
| Low    | 感觉统合与行为连接页                | 🌀 身体需要来源的专属深度内容             |

---

## 13. Version History

| Version | Date    | Sprint | 变更说明                                          |
|---------|---------|--------|---------------------------------------------------|
| 0.1     | 2026-07 | 10     | Journey + U001 完成                               |
| 0.5     | 2026-07 | 10     | SUP001 + S001–S003 完成                           |
| 0.9     | 2026-07 | 10     | S004–S005 完成，自伤专页建立                       |
| 1.0     | 2026-07 | 10     | S006 完成，Production Ready                       |

