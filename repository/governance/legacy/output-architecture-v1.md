# Output Architecture v1.0

**Anori Knowledge Operating System**
Frozen: 2026-07-07
Status: Frozen

---

## Directory Structure

```
outputs/
├── governance/      # Governance Assets（规则、流程、运行）
├── snapshots/       # System Evolution（系统状态演进）
├── evidence/        # Evidence Assets（证据资产）
└── reports/         # Analytical Reports（分析报告）
```

---

## Directory Responsibilities

| 目录 | 管理对象 | 是否持续增长 |
|------|----------|------------|
| governance | Workflow、Registry、Operations Log | 是 |
| snapshots | Snapshot Delta | 是 |
| evidence | Evidence Card | 是 |
| reports | Network Report、Governance Report | 是 |

职责无重叠。结构冻结，无需再调整。

---

## Naming Convention v1.0

### governance/

```
evidence-upgrade-workflow-v{major}.{minor}.md
knowledge-network-report-v{major}.{minor}.md
kgo-operations-log.md
kgo-registry.md
```

版本号规则：
- major 版本：结构性变化
- minor 版本：内容补充或规则新增

### snapshots/

```
snapshot-delta-{N}-YYYY-MM-DD.md
```

- N 为当日顺序编号（从1开始）
- 日期为执行日期

### evidence/

```
EA-{6位编号}-{作者}-{年份}.md
EA-{6位编号}-{作者}-{年份}-{区分词}.md
```

示例：
```
EA-000001-dunst-2023.md
EA-000002-dunst-2023-formal.md
```

规则：
- 编号永久唯一，不改名，不重排
- 区分词仅在同一作者同年同 REL 的多张卡片时使用

### reports/

```
{report-type}-report-v{major}.{minor}.md
```

示例：
```
knowledge-network-report-v1.1.md
```

---

## Current File Inventory（2026-07-07）

### governance/

| 文件 | 用途 |
|------|------|
| evidence-upgrade-workflow-v1.1.md | Evidence Upgrade 标准流程 |
| knowledge-network-report-v1.1.md | 知识网络分析报告 |
| kgo-operations-log.md | KGO 操作流水 |
| kgo-registry.md | KGO 操作索引 |

### snapshots/

| 文件 | 内容 |
|------|------|
| snapshot-delta-1-2026-07-07.md | Evidence Upgrade Workflow v1.0 冻结 |
| snapshot-delta-2-2026-07-07.md | REL-000076 Case 1 关闭 |
| snapshot-delta-3-2026-07-07.md | REL-000026 首次升级 Very Low → High |

### evidence/

| 文件 | 支持 REL | Tier |
|------|----------|------|
| EA-000001-dunst-2023.md | REL-000026 | Tier 1（Upgrade） |
| EA-000002-dunst-2023-formal.md | REL-000059 | Tier 1（Reinforcement） |

### reports/

| 文件 | 内容 |
|------|------|
| （待用） | — |

---

## Era 3 — Knowledge Governance Operations

**System Status（2026-07-07）：**

```
Architecture Stable
Governance Stable
Knowledge Production Active
Knowledge Governance Operational
Knowledge Archive Established
```

**Era 3 冻结语：**

> The system is no longer being built. It is now being operated.
> Evidence is no longer being collected. It is now being governed.
> Knowledge is no longer being accumulated. It is now being continuously improved.
> Every meaningful change is now archived, traceable, and reusable.

这四句话分别对应 System、Evidence、Knowledge、Archive 四个维度，共同定义 Era 3 — Knowledge Governance Operations 的完成状态。

---

## Review Trigger

Output Architecture 的修改条件：

- 新增一种根本不同的资产类型（当前四类无法覆盖）
- 目录职责出现无法解决的重叠
- KOS 进入新的 Era 导致档案体系需要重新设计

不满足上述条件时，结构保持冻结。

---

*Output Architecture v1.0 — Frozen 2026-07-07*
