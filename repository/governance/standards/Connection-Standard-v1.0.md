# Anori Connection Standard v1.0

**文件类型：** Repository 正式治理文档
**路径：** `repository/governance/connection-standard/Connection-Standard-v1.0.md`
**状态：** v1.0 · Frozen · Sprint 23C-0
**日期：** 2026-07-14

---

## Purpose

定义 **Anori Connection Layer** 的统一规则。

回答的问题不是：页面怎么跳？而是：**哪些内容应该连接？为什么连接？如何连接？**

Connection Layer 不属于 UI 层，而属于产品架构层。

| 治理文档 | 解决的问题 |
|---------|----------|
| ORS v1.0 | 如何生产原创资源 |
| NICE-Policy v1.0 | 如何治理外部资源 |
| **Connection Standard v1.0** | **如何让已有内容真正成为一个产品** |

---

## Connection ≠ Navigation

在实施前，必须区分两个概念：

| 概念 | 目的 | 例子 |
|------|------|------|
| **Navigation** | 帮助用户找到页面 | 顶部菜单、面包屑、搜索 |
| **Connection** | 帮助用户完成 Mission | "为什么有效 →"、"今天可以带走 →" |

Connection Layer 不是导航系统的延伸，而是内容之间语义关系的显式表达。新贡献者在实施时，如果一个链接只是"让用户找到某个页面"，它属于 Navigation，不需要在 Connection Standard 中定义。

---

## Chapter 1 · Design Principles

### Principle 1：Connections are intentional
每一个连接都必须回答一个明确的问题。不能为了增加链接而增加链接。每条连接在实施前必须能回答：**这个连接帮助用户完成了哪个 Mission？**

### Principle 2：Connections reduce user effort
连接的目的不是增加浏览量，而是减少家庭寻找信息的成本。衡量标准：有了这个连接，用户完成 Mission 需要的步骤是否减少了？

### Principle 3：Connections follow user tasks
连接围绕 Mission（用户任务），不围绕 Repository（内容目录）。

**正确：**
```
Journey P001（早期发现）→ KA-Family-001（为什么重要）→ RI-CDC-0002（今天可打印）
```

**错误：**
```
Journey P001 → KA-Family-001（因为都属于"家庭"分类）
```

### Principle 4：Connections explain, not distract
任何连接不能破坏当前阅读，而应帮助用户理解下一步。读者应感到"这正是我下一步想知道的"，而不是"又有一个链接"。

---

## Chapter 2 · Connection Types

### CT-001 · Journey → Knowledge
**目的：** 解释"为什么"
**字段：** `connection_type: "explains"`
**UI 语言：** "为什么这很重要 →"
```
Journey P001 → KA-Family-001
```

### CT-002 · Knowledge → Resource
**目的：** 今天可以带走什么
**字段：** `connection_type: "next_step"`
**UI 语言：** "今天可以带走 →"
```
KA-Visual-001 → RI-ANORI-0001（First–Then Card）
```

### CT-003 · Resource → Knowledge
**目的：** 为什么这样有效
**字段：** `connection_type: "background"`
**UI 语言：** "为什么有效？ →"
```
RI-ANORI-0001 → KA-Visual-001
```

### CT-004 · Knowledge → Knowledge
**目的：** 继续理解
**字段：** `connection_type: "related"`
**UI 语言：** "相关阅读 →"
**规则：** 双向连接须在两篇 KA 中各自标注，不可单向。
```
KA-Participation-001 ↔ KA-Family-001 ↔ KA-Visual-001
```

### CT-005 · Resource → Resource
**目的：** 补充阅读
**字段：** `connection_type: "supports"`
**UI 语言：** "延伸阅读 →"
**规则：** 仅在两条 Resource 服务同一 Mission 时建立，不因分类相近而连接。
```
RI-CDC-0002（里程碑清单）→ RI-WHO-0001（Nurturing Care Framework）
```

---

## Chapter 3 · Priority Rules

### P0 · Mission 必经路径
`P0 连接 = 没有它，Mission 无法完成`

当前 P0 连接（基于 Sprint 23A）：

| 连接 | Mission | 类型 |
|------|---------|------|
| Knowledge Hub 集成 KA 页面 | 所有 Mission | 前提 |
| Journey P001 → KA-Family-001 | Mission 1 | CT-001 |
| RI-ANORI-0001 → KA-Visual-001 | Mission 2 | CT-003 |
| KA-Participation-001 可访问 | Mission 3 | 前提 |

**P0 实施顺序：**
1. Knowledge Hub 集成 Foundation KA（终点先存在）
2. Resource → KA 反向连接（CT-003）
3. Journey → KA 正向连接（CT-001）

### P1 · Foundation Network
Foundation KA 之间的交叉引用（CT-004，双向）。

### P2 · Resource Network
Resource 之间的延伸连接（CT-005），仅服务同一 Mission 时建立。

### P3 · Extended Connections
单篇 KA 内的脚注式引用、深度延伸链接。

---

## Chapter 4 · UI Guidance

Connection Standard 只定义语言原则，不定义按钮样式。

| 连接类型 | 在 Journey 中 | 在 KA 中 | 在 Resource 中 |
|---------|------------|---------|--------------|
| CT-001 | "为什么这很重要 →" | — | — |
| CT-002 | — | "今天可以带走 →" | — |
| CT-003 | — | — | "为什么有效 →" |
| CT-004 | — | "相关阅读 →" | — |
| CT-005 | — | — | "延伸阅读 →" |

**原则：**
- 连接语言使用第二人称视角，不使用第三人称描述
- 连接出现在自然的阅读停顿点，不在段落中途插入
- 每个页面的 P0 连接不超过 2 个

---

## Chapter 5 · Lifecycle

```
planned → implemented → validated → stable
```

| 状态 | 含义 |
|------|------|
| `planned` | 已在设计中确认，待实施 |
| `implemented` | 已在页面中存在 |
| `validated` | 经过 Experience Validation 确认有效 |
| `stable` | 长期稳定，无需频繁审查 |

**注意：** 连接的 `validated` 状态依赖 Sprint 23B 的 Experience Validation 结果。在 23B 完成前，所有连接保持 `planned` 或 `implemented`，不升为 `validated`。

---

## Chapter 6 · Governance Rules

### 新增 Connection Type 规则
新增须满足：**至少两个 Mission 重复需要，方可新增。** 单一 Mission 需要的特殊连接，不创建新类型。

### 删除规则
`validated` 状态的连接不得直接删除，须先降回 `planned` 并说明原因，再在下一个 Sprint 中移除。

### 未来扩展候选（条件成熟时）
- Search Recommendation
- Personalized Recommendation
- AI Suggested Reading

均须满足"至少两个 Mission 重复需要"规则方可新增。

---

## Appendix · Connection Map（当前规划）

```
Journey P001
    │
    └─CT-001──► KA-Family-001 ◄──CT-004──► KA-Participation-001
                    │                               │
                    └─CT-002──► RI-CDC-0002  CT-004─┘
                                            │
                                     KA-Visual-001
                                            │
                                CT-002──► RI-ANORI-0001
                                CT-003◄──────────────┘
```

当前 Connection Map 为 P0/P1 规划示意。未来随 Foundation KA、Journey 与 Resource 扩展而更新——新增内容时只需更新本附录，无需修改正文章节。

---

## Version History

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-07-14 | 初始版本，Sprint 23C-0。基于 Sprint 23A Structure Validation 缺口分析。|

---

*Connection Standard v1.0 · Repository Governance · 2026-07-14*
*下次审阅建议：Sprint 23C 完成后，或 Mission 数量增加时。*
