# Anori Production Index v1.1

Version: 1.1
Sprint: 10
Date: 2026-07
Updated: P003 + P004 完成，Style Rules 升至 R27

这是整个 Anori 网站的生产总览文件。
所有路径的完成状态、版本、交叉连接和开发计划均以此文件为准。

---

## Production Principle（永久置顶）

```
不要生产页面。
要生产一条家长能够真正走完的路径。

页面是载体。
用户从问题走到行动，才是目标。

Domains organize knowledge.
User Paths organize production.
Users organize priorities.
Design once. Scale forever.
```

---

## Sprint 10 KPI

```
主指标：Completed User Paths
辅助指标：每路径「今天先做这一件事」数量

P001  完成  9 个 Today Box
P002  完成  9 个 Today Box
P003  完成  9 个 Today Box
P004  完成  9 个 Today Box

Total 已完成 36 个「今天先做这一件事」
```

---

## 已完成路径

### ✅ P001 — 孩子不会说话
```
Version:    1.0
Status:     Production Ready
Sprint:     10
Pages:      9（Journey + U001 + SUP001 + S001–S006）
One Outcome: 帮助家长从「孩子不会说话」走到「今天开始 AAC」
One Sentence: 不会说话不等于不会沟通。今天可以从一张图片开始。
Core Domain: Technology（AAC / PECS / SGD）
Cross-path: P002 S004（AAC×情绪交汇）
Package:    P001_Production_Package_v1.0.md
```

### ✅ P002 — 孩子不会表达情绪
```
Version:    1.0
Status:     Production Ready
Sprint:     10
Pages:      9（Journey + U001 + SUP001 + S001–S006）
One Outcome: 帮助家长从「看到崩溃」走到「读懂崩溃来源」
One Sentence: 崩溃不是脾气问题。先读懂来源，再决定支持方式。
Core Domain: Emotional Regulation / Sensory Processing
Cross-path: P001 S004（AAC×情绪）/ P003（行为路径）
Package:    P002_Production_Package_v1.0.md
```

### ✅ P003 — 孩子行为问题
```
Version:    1.0
Status:     Production Ready
Sprint:     10
Pages:      9（Journey + U001 + SUP001 + S001–S006）
One Outcome: 帮助家长从「怎么阻止行为」走到「读懂行为背后的来源」
One Sentence: 行为是信息，不是问题。找到来源，才能真正帮到孩子。
Core Domain: Behavior Support / PBS / FBA
Cross-path: P001 AAC（沟通功能）/ P002 情绪 / P004 学校
Package:    P003_Production_Package_v1.0.md
```

### ✅ P004 — 孩子学校适应
```
Version:    1.0
Status:     Production Ready
Sprint:     10
Pages:      9（Journey + U001 + SUP001 + S001–S006）
One Outcome: 帮助家长把学校从「需要对抗的地方」变成「共同支持孩子成长的伙伴」
One Sentence: 学校不是另一个战场，而是支持系统的一部分。而你，是这个系统的中心。
Core Domain: School Participation / Family-School Partnership
Cross-path: P001 AAC / P002 情绪 / P003 行为
Package:    P004_Production_Package_v1.0.md
```

---

## 进行中路径

### ▶ P005 — 待定（孩子参与和发展 / 家庭支持）
```
Version:    0.0
Status:     Not Started
Priority:   Next
Blueprint:  复用 P001–P004 Blueprint
Components: 复用 Anori_Component_System_v1.0.md
Cross-path: P001–P004 全部有连接点
```

---

## Cross-domain Navigation Map（完整版）

```
P001 孩子不会说话
  ↓ S004 → P002 S004（AAC×情绪，双向）
  ↓ S004 → P004 S002（学校 AAC 配合）

P002 孩子不会表达情绪
  ↓ S004 → P001（AAC 工具，双向）
  ↓ S005 → P004 S003（学校情绪支持）
  ↓ S006 → P003（行为问题）

P003 孩子行为问题
  ↑ 来自 P002 S006
  ↓ S001 → P002（崩溃处理）
  ↓ S002 → P001（AAC，沟通功能替代）
  ↓ S004 → P004（学校行为一致性）
  ↓ S006 → P004

P004 孩子学校适应
  ↑ 来自 P001 S004, P002 S005, P003 S004
  ↓ S002 → P001 AAC, P003 行为
  ↓ S003 → P002 情绪
  ↓ S006 → P005（待启动）
```

**已激活交汇点**（双向）:
- P001 × P002: S004「什么时候 AAC 比安慰更重要」
- P002 × P003: S006→Journey（情绪→行为）
- P003 × P004: S004（学校行为支持一致性）

---

## Style Rules 完整版（v1.3）

```
R01  Hero：陪伴开始，不许诺结果
R02  Today Box：「最近」降低门槛
R03  步骤收尾：做完就停
R04  Evidence 格式：★★★★★ + ✓
R05  Evidence 结尾：情感转译
R06  专业人员：暂时没有也不用担心
R07  Next Step：三个入口
R08  Closing：品牌识别句（固定不修改）
R09  One Page, One Outcome
R10  5–7 分钟阅读上限
R11  Decision Box：判断框架
R12  Life Moments：生活时刻，不用章节
R13  Conversation Starter：第一句话
R14  Cross-setting：至少两个真实场景
R15  Permission Design：允许暂停
R16  Reason → Action：原因必须接行动
R17  Recovery Path：Next Step 允许后退
R18  Timeline Design：成长变化用时间轴
R19  Progress Signals：哪些算进步
R20  Reflection Ending：Path 结尾看自己
R21  Product Graduation：完成了什么 + 下一步
R22  Evidence 用词：研究发现，不是研究证明
R23  四层拆解框架：复杂能力拆层次
R24  平台哲学句式：不是X问题，而是Y
R25  先判断，再支持（全站固定）
R26  State Map：三阶段颜色编码
R27  给家长的话：情绪相关页面必有
```

---

## Platform Principles（各路径核心原则）

```
P001 AAC
不会说话不等于不会沟通。
AAC 不会阻碍语言发展，反而是语言发展的基础。

P002 情绪
崩溃不是脾气问题。
哭闹本身不是原因，而是一种表现。
先读懂来源，再决定支持方式。

P003 行为
行为是信息，不是问题。
挑战性行为不是故意的，它有功能。
行为干预如果与功能匹配，效果是不匹配干预的三倍以上。

P004 学校
学校好 ≠ 孩子没有压力。
放学后崩溃 ≠ 在家出问题。
分享支持方式 ≠ 贴标签。
一致 ≠ 复制，而是方向相同。
```

---

## Anori Functional Language（全站统一，P003 建立）

```
🗣️ 我要说什么（沟通需求）
👁️ 看看我（寻求关注）
🚪 我想离开（逃避）
🌀 身体需要（寻求感觉）
😰 我承受不了（情绪/内在状态）
🎁 我要那个（取得实物）

全站统一，不重新解释，直接引用。
```

---

## ABC Framework（全站通用观察工具）

```
🟦 A — 发生之前（情境、要求、环境）
🟥 B — 发生了什么（事实描述，不加解释）
🟩 C — 后来发生什么（孩子得到了什么或避开了什么）
→ 最可能的来源（可以不确定）
```

---

## Family-School Consistency Framework（P004 建立）

```
① 来源一致（Understanding）
   对同一种行为的来源，家校用同一种解读

② 原则一致（Response）
   面对同一种来源，用同一个支持方向

③ 工具一致（Tool）
   有条件的话，使用相同的支持工具
```

---

## Production Completion Standard v1.0

一个 User Path 只有满足以下七项，才能标记 Complete：

```
□ Journey 完成
□ Understanding 完成
□ Support 完成
□ Support+ 完成
□ Evidence 已关联
□ Navigation 已闭环
□ Cross-domain Links 已登记（可为 pending）

七项全部完成 → User Path = Complete
```

---

## 文件结构

```
anori/
├── Anori_Production_Index_v1.1.md       ← 本文件（最新版）
├── Anori_Production_Index_v1.0.md       ← 旧版（已归档）
├── Anori_Component_System_v1.0.md       ← 组件库（28个组件）
├── P001_Production_Package_v1.0.md      ← P001 交付包
├── P002_Production_Package_v1.0.md      ← P002 交付包
├── P003_Production_Package_v1.0.md      ← P003 交付包（新）
├── P004_Production_Package_v1.0.md      ← P004 交付包（新）
├── _templates/
│   ├── PRODUCT_FOLDER_STANDARD.md
│   └── P-folder/README.md
├── P001/ P002/ P003/ P004/
│   ├── README.md
│   ├── pages/
│   ├── repository/
│   └── meta/
```

---

## Production Roadmap（更新版）

```
Sprint 10  ████████████████████  P001 ✅  P002 ✅  P003 ✅  P004 ✅
Sprint 11  ░░░░░░░░░░░░░░░░░░░░  P005（待定主题）
                                  P001–P004 meta 补全
                                  ABC Observation Card 下载版
Sprint 12  ░░░░░░░░░░░░░░░░░░░░  P006+
                                  Teacher Quick Card 独立版
                                  崩溃地图交互组件
Sprint 13+ ░░░░░░░░░░░░░░░░░░░░  Family Domain
                                  Participation Domain
                                  Employment Domain
```

---

## 版本记录

| Version | Date    | Sprint | 内容                                              |
|---------|---------|--------|---------------------------------------------------|
| 1.0     | 2026-07 | 10     | P001 + P002 完成，Component System 建立           |
| 1.1     | 2026-07 | 10     | P003 + P004 完成，Style Rules v1.3，框架语言建立  |

