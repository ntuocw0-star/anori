# Anori Production Index v1.0

Version: 1.0
Sprint: 10
Date: 2026-07

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
```

---

## Sprint 10 KPI

```
主指标：Completed User Paths
辅助指标：每路径「今天先做这一件事」数量

P001  完成  9 个 Today Box
P002  完成  9 个 Today Box
Total 已完成 18 个「今天先做这一件事」
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
Core Domain: Emotional Regulation / Sensory Processing
Cross-path: P001 S004（AAC×情绪交汇）/ P003（行为路径）
Package:    P002_Production_Package_v1.0.md
```

---

## 进行中路径

### ▶ P003 — 孩子行为问题
```
Version:    0.0
Status:     Not Started
Priority:   Next
Blueprint:  复用 P001/P002 Blueprint（不重新设计）
Components: 复用 Anori_Component_System_v1.0.md
预计 Pages: Journey + U001 + SUP001 + S001–S006
Cross-path: P002（情绪→行为）/ P001（AAC→行为）
```

---

## 待启动路径

### P004 — 孩子学校适应问题
```
Status:   Pending
Priority: After P003
预计 Domain: Education
Cross-path: P001 S004 / P002 S005
```

### P005 — 孩子不会交朋友
```
Status:   Pending
Priority: After P004
预计 Domain: Social Participation
```

### P006 — 孩子睡眠问题
```
Status:   Pending
Domain:   Health / Sensory
```

### P007 — 孩子饮食问题
```
Status:   Pending
Domain:   Health / Sensory / AAC
Cross-path: P001（AAC 表达饮食需求）
```

---

## Cross-domain Navigation Map

```
P001 孩子不会说话
  ↓ S004 → P002 S004（AAC×情绪）
  ↓ S004 → P004（学校 AAC 配合）

P002 孩子不会表达情绪
  ↓ S004 → P001（AAC 工具）
  ↓ S005 → P004（学校情绪支持）
  ↓ S006 → P003（行为问题）

P003 孩子行为问题（待建）
  ↑ 来自 P002 S006
  ↓ → P004（学校行为支持）

P004 学校适应（待建）
  ↑ 来自 P001 S004, P002 S005, P003
  ↓ → Family Domain
```

**已激活交汇点**:
- P001 × P002: S004「什么时候 AAC 比安慰更重要」（双向）

**待激活交汇点**:
- P002 × P003: 情绪→行为
- P001 × P004: AAC→学校
- P002 × P004: 情绪→学校

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
├── Anori_Production_Index_v1.0.md       ← 本文件
├── Anori_Component_System_v1.0.md       ← 组件库
├── P001_Production_Package_v1.0.md      ← P001 交付包
├── P002_Production_Package_v1.0.md      ← P002 交付包
├── _templates/
│   ├── PRODUCT_FOLDER_STANDARD.md       ← 文件夹规范
│   └── P-folder/README.md               ← 新路径 README 模板
├── P001/
│   ├── README.md
│   ├── pages/
│   ├── repository/
│   └── meta/
└── P002/
    ├── README.md
    ├── pages/
    ├── repository/
    └── meta/
```

---

## Production Roadmap

```
Sprint 10  ████████████  P001 ✅  P002 ✅
Sprint 11  ░░░░░░░░░░░░  P003 行为问题
                          P001 meta 补全
                          P002 meta 补全
Sprint 12  ░░░░░░░░░░░░  P004 学校适应
                          崩溃地图交互组件
Sprint 13  ░░░░░░░░░░░░  P005 社交参与
                          Teacher Quick Card 独立版
Sprint 14+ ░░░░░░░░░░░░  P006+ 持续扩展
                          Family Domain
                          Participation Domain
```

---

## 版本记录

| Version | Date    | Sprint | 内容                                  |
|---------|---------|--------|---------------------------------------|
| 1.0     | 2026-07 | 10     | P001 + P002 完成，Component System 建立|

