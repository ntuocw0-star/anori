# Anori Evolution Rules v1.0
_2026-07-07_

---

## 这份文档是什么

Architecture 定义系统是什么。
Evolution Rules 定义系统怎样成长。

任何新的 Sprint、新的模块、新的字段、新的资产，在开始建设之前，先对照这份文档。
不是 Review Code，而是 Review：有没有违反 Evolution Rules。

---

## Rule 1：先回答归属，再开始建设

任何新工作，第一步不是讨论怎么做，而是回答：

```
它属于哪一层？

Experience Architecture   用户在每个心理节点上需要什么？
Knowledge Narrative       这一页应该帮家长重新定义什么？
Knowledge Content         读完之后，家长带走了什么？
Evidence Infrastructure   我们为什么这样说？

还是

Semantic Core（Cross-layer）  它是横跨所有层的公共语言吗？
```

如果回答不了，说明边界还没有成熟，不要开始建设。
如果回答得了，归属明确，直接开始。

---

## Rule 2：新的数据必须回答新的问题

每一个新增字段或数据结构，都必须回答一个以前回答不了的问题。

**判断方式：**
> 如果去掉这个字段，系统有没有失去回答某个问题的能力？

如果没有，不要加。

**正例：**
- `primary_citation_year` → 回答「这条 Evidence 有多新？」
- `search_reason` → 回答「这个搜索结果和我说的有什么关系？」
- `why_worth_reading` → 回答「为什么现在值得读这一页？」
- `anori_reframe` → 回答「Anori 对这个概念的重新定义是什么？」

**反例：**
- 一个字段和已有字段回答同一个问题，只是换了名字 → 不加

---

## Rule 3：Repository 先于 Runtime

新的资产先以 Repository Asset 形式存在，边界稳定之后再进入 Runtime。

```
新资产建立（Repository）
  ↓
边界冻结（Architecture Freeze）
  ↓
按需接入（Runtime）
```

不允许「边建设边接入」，因为这会导致资产的职责边界在接入过程中被污染。

**已验证的例子：**
- `concept-registry.json`：已建立，已入库，暂不接入 Runtime
- 接入顺序：Search Semantic → AI Semantic → Page Runtime

---

## Rule 4：先形成公共语言，再形成公共逻辑

当一个概念在多个层里反复出现，先把它抽象进 Concept Registry，再让各层引用，而不是让每个模块自己解释这个概念。

**信号：** 当你发现同一个意思，在 Narrative 叫「连接」，在 VAR 叫「Community Participation」，在 Evidence Card 叫「社区参与」——说明需要一个 Canonical Name。

**操作：** 建立 `concept-registry.json` 条目，各层统一引用 `canonical`，停止各自定义。

---

## Rule 5：事件驱动，而不是版本驱动

系统更新由真实事件触发，而不是由时间周期触发。

```
事件发生（新文献 / 新策略 / 新研究）
  ↓
判断是否符合触发条件
  ↓
立即进入对应层的更新流程
```

不等「下一个版本」，不攒到「半年更新」。
每一个符合条件的事件，都是一次独立的更新机会。

**已验证的例子：**
- Evidence Library：任何新的 High grade SR/Meta → 立即写入 evidence_card
- 下一步推广到：Search Semantic、AI Semantic、Resource Profile

---

## Rule 6：新能力不改变旧层职责

每一层的职责一旦冻结，新增的能力只能扩展，不能改变。

```
Concept Registry → 提供公共语言（新增）
                → 不改变 Narrative 的写法（不改变）
                → 不改变 Experience 的流程（不改变）

Evidence Chain  → 增加 Evidence 的追踪能力（新增）
                → 不改变 Evidence 的评级方式（不改变）
```

**判断方式：**
> 如果加入这个新能力，某一层的核心职责发生了改变，那这个新能力的设计有问题，需要重新定位。

---

## Rule 7：Reframe 是 Anori 的知识操作，不是装饰

每一个 Knowledge Page 的 Ending，都完成一次 Reframe：

```
原有理解（家长带进来的）
  ↓
Anori Reframe
  ↓
新的意义框架（家长带走的）
```

Reframe 不是鼓励，不是总结，不是建议。
它是把一个行为从一个意义框架，移到另一个意义框架。

新增 Knowledge Page 时，Ending 必须完成一次有效的 Reframe，否则页面未完成。

**检查方式：**
> 读完 Ending，家长重新理解了一个行为的意义吗？还是只是得到了一个鼓励？

---

## Rule 8：慢慢，是 Anori Voice 的基调

Anori 的语气承认现实的重量，同时保留可能性。

不制造希望（「一定会好」），不制造悲壮（「只能这样了」）。
「慢慢」是这个平衡的语言体现：现实不会一下变轻，但未来仍然保留可能。

所有新增内容（字段、Ending、FAQ、evidence_card）都应该通过这个语气检查：
> 这句话，是在承认现实同时保留可能，还是在制造希望或悲壮？

---

## 使用方式

开始任何新工作之前，对照这八条规则：

| Rule | 检查问题 |
|---|---|
| 1 归属 | 它属于哪一层？ |
| 2 问题 | 它回答了什么新问题？ |
| 3 顺序 | 它是 Repository 还是 Runtime？ |
| 4 语言 | 它用了统一的 Canonical Name 吗？ |
| 5 触发 | 它是事件驱动还是版本驱动？ |
| 6 边界 | 它改变了某一层的职责吗？ |
| 7 Reframe | 它完成了有效的 Reframe 吗？（Knowledge Page 适用）|
| 8 语气 | 它的语气符合 Anori Voice 吗？ |

---

## 版本记录

| 版本 | 日期 | 变更 |
|---|---|---|
| v1.0 | 2026-07-07 | 初始版本，8条规则，从Phase 2-4演进经验中提炼 |


---

## Rule 9：REL 是稳定对象，Evidence Grade 是生命周期属性

REL 定义的是 Concept 之间的关系，这个关系一旦建立，结构不变。
变化的是支撑这个关系的证据质量。

```
REL 建立（骨架，Very Low 或空）
  ↓
第一篇支持文献出现（Low 或 Very Low）
  ↓
SR 出现（Moderate 或 High）
  ↓
Meta-analysis 出现（High）
```

每次升级，只需要：
1. 在 `evidence_timeline` 里追加一条记录
2. 更新 `evidence_grade` 为当前最高等级
3. 更新 `primary_citation` 为当前最强文献
4. 不需要新建 REL，不需要改页面结构

**检查方式：**
> 如果一篇新文献让你想新建一个 REL，先检查是否已有 REL 覆盖这个关系。
> 大多数时候，答案是更新现有 REL，而不是新建。

**骨架 REL（Skeleton REL）：**
当一个 Concept 关系在理论上成立、但还没有足够文献支撑时，先建骨架 REL（`evidence_grade: "Very Low"`, `evd_todo` 标注需要什么文献）。
骨架 REL 标记系统的知识空白，也是下一批文献收集的精准目标。

---

## Rule 10：新 Knowledge Domain 必须先找到桥接点

新的 Knowledge Domain 在建立 Core Pathway 之前，必须先识别至少一个与现有 Domain 的桥接关系（Bridge REL）。

**执行方式：**
1. 识别新 Domain 与现有 KA 之间的概念连接
2. 建立 Bridge REL（可以是骨架，先占位）
3. 确认桥接点之后，再建立新 Domain 的 Core Pathway

**正例：**
- KD-TRA 开启前，先找到 `School Participation → School Transition`、`Family Functioning → Transition Planning` 等桥接点，再建 CP-TRA-001

**反例：**
- 直接建 KD-TRA 的 Core Pathway，事后再找与 KD-FAM / KD-PAR 的连接——这会导致 Domain 孤立，后期补桥接成本很高

**目的：** 保持 KOS 是一个 Knowledge Network，而不是若干孤立的 Knowledge Domain 的集合。

---

## Phase 3：Evidence Consolidation（当前阶段）

**目标：** 提高已有网络的可信度，不增加新节点。

**Priority A（Family Science 主链全 High）：**
- `Family Functioning → Family QoL`（REL-000017）
- `Parent Stress → Caregiver Burden`（REL-000074）
- `Caregiver Burden → Family QoL`（REL-000076）

**Priority B（跨域桥接升级）：**
- `Family QoL → Child Participation`（REL-000078）

**Priority C（反馈环验证）：**
- `Participation QoL → Family QoL`（REL-000098）

完成 Phase 3 后，再开启 Phase 4（KD-TRA），且必须遵守 Rule 10。

---

## Rule 11：新文献进入的标准流程（Maintenance Mode）

Phase 3 开始后，KOS 进入维护模式。所有新文献按以下流程处理：

```
新文献进入
  ↓
匹配 Evidence Upgrade Queue（EUQ）
  ↓
命中 → 升级 REL → 更新 KA → 更新 Core Pathway
  ↓
未命中
  ├── 已有关系但证据不足 → 加入/更新 EUQ
  └── 全新关系 → 建立 STR
```

**三个工具的分工：**

| 工具 | 状态 | 用途 |
|---|---|---|
| STR（Search Target Registry） | 主动搜索目标 | 知道关系应该存在，尚无任何证据 |
| EUQ（Evidence Upgrade Queue） | 升级目标 | 已有 Low grade，需要 SR/Meta 升到 High |
| REL `evd_todo` | 字段级标注 | 具体到某条 REL 的下一步证据需求 |

**原则：**
- Architecture 基本冻结，只在真正新的知识域时才调整
- Knowledge Assets 和 REL 保持稳定，新文献不触发重构
- STR 里的关系一旦有 Low grade 证据，转入 EUQ
- 不降低证据标准来追求结构完整性

---

## KOS 与传统 Literature Database 的区别

| | Literature Database | Knowledge Operating System |
|---|---|---|
| 结构 | 随文献增加而扩张 | 冻结后稳定，只升级证据等级 |
| 更新方式 | 增加条目 | 升级已有 REL 的 evidence_grade |
| 新文献的作用 | 扩大覆盖范围 | 提高已有关系的可信度 |
| 质量指标 | 文献数量 | High grade REL 占比 |


---

## Rule 12：Design Intent 与 System State 始终分离

**原则：**
设计意图（Design Intent）保持稳定，系统状态（System State）持续更新；二者始终分离，但保持同步。

**四层分工：**

| 文档 | 职责 | 更新频率 |
|---|---|---|
| `anori-architecture-v1.md` | 系统应该是什么（Should Be） | 极少，只在架构真正变化时 |
| `anori-evolution-rules-v1.md` | 系统如何变化（How It Changes） | 少，只在新原则确立时 |
| `system-snapshot-YYYY-MM-DD.json` | 系统现在是什么（As Is） | 每次重要状态变化时 |
| STR / EUQ / `rels.json` | 系统下一步做什么（Next Action） | 随文献和证据持续更新 |

**为什么这条规则重要：**
很多长期项目把设计思想、运行状态、开发日志混在一起，时间一长没人敢改，也没人知道哪些是原则、哪些只是当前状态。分离之后：
- 新接手的人读两份文档就能理解整个系统，不需要重读全部历史
- 系统状态可以大胆更新，不会污染设计原则
- 设计原则可以独立讨论，不受当前证据等级影响

**Human Documentation（给人理解）：**
Architecture.md、Evolution Rules、Core Pathways、Design Principles
→ 记录设计意图，解释为什么这样设计

**Machine Documentation（给系统运行）：**
system-snapshot.json、rels.json、evidence-upgrade-queue.json、STR
→ 记录系统状态，驱动下一步行动
