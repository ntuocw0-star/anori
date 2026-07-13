# Sprint 7 Phase F — AAC 辅助沟通系统生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Tool-based Intervention Assessment 结论

**AAC 与一般 Intervention 的本质区别：**

| 比较维度 | 一般 Intervention（如 Parent Training）| AAC |
|---------|--------------------------------------|-----|
| 核心要素 | 训练方法 + 关系 | 工具 + 方法 + 环境支持 |
| 效果依赖 | 技能习得后可独立运行 | 工具（AAC系统）必须持续在场 |
| 移除后果 | 技能保留 | 沟通功能丧失（tool-dependent）|
| 新建 VAR | 无需 | **需要（VAR-000052 Communication）**|

**Tool-based Intervention 新字段：**
```yaml
intervention_type: Tool-based
tool_dependency: True
```

---

## VAR-000052（新建）：沟通能力

| 字段 | 内容 |
|------|------|
| ID | VAR-000052 |
| 正式名称 | Communication（沟通能力）|
| 中文名 | 沟通能力 |
| 别名 | Functional Communication、Expressive Communication、Receptive Communication、Communication Ability |
| 类型 | Protective |
| 定义 | 个体使用语音、AAC系统、书写、手势或其他沟通系统有效表达、接收和交换信息的能力。包括功能性请求、选择表达、信息交换和拒绝表达等核心沟通功能。|
| 测量工具 | PECS 结果测量；Communication Function Classification System（CFCS）|
| 与 VAR-000013 的区别 | Communication 是能力性 Construct；Child Mental Health 是心理健康状态 Construct。Social Communication 是 Communication 的子类型，不应归入 Mental Health 体系。|
| 新建原因 | OBS-015 Ontology Expansion：Communication 是独立 Construct，不是已有 VAR 的子集或别名。为 Communication Domain Intervention（AAC、Speech Therapy 等）提供统一目标变量。|

---

## INT-000006：辅助沟通系统（AAC）

| 字段 | 内容 |
|------|------|
| ID | INT-000006 |
| 正式名称 | Augmentative and Alternative Communication（AAC，辅助替代沟通）|
| 别名 | 辅助沟通系统、高技术 AAC（SGD/语音输出设备）、低技术 AAC（PECS/图片交换）、Proloquo2Go、LAMP（Language Acquisition through Motor Planning）|
| 定义 | 当口语和/或书面语言受损时，通过补充或完全替代的沟通方式帮助个体发挥完整沟通潜力的干预系统。包含工具（AAC设备/系统）、使用方法（训练/建模）和环境支持（人员配合、环境调整）三个必要组成部分。|
| 目标人群 | 复杂沟通需求儿童及成人（ASD、脑瘫、智力障碍、语言障碍）|
| 传递方式 | 个别 / 小组 / 融合于日常环境 |
| 领域 | 沟通 / 教育 / 社区 |
| **干预类型** | **Tool-based Intervention**（工具依赖型）|
| **工具依赖** | **是**——AAC 系统（工具）+ 实施方法 + 环境支持共同构成干预 |
| 粒度说明 | INT-000006 是上位概念，具体系统（PECS、SGD、Proloquo2Go）和方法（LAMP、核心词汇建模）作为 Variants。|

---

## IREL-000015：AAC → 沟通能力↑

| 字段 | 内容 |
|------|------|
| ID | IREL-000015 |
| 来源 | INT-000006 |
| 关系动词 | affects |
| 目标 VAR | VAR-000052 沟通能力（Communication）|
| 效应极性 | 正向 |
| 效应大小 | 中到大 |
| 证据 Tier | **Tier 2**（SR + 部分 RCT，AAC 领域 RCT 数量有限）|
| 证据等级 | **Moderate** |
| **Outcome Type** | **Primary** |
| 充实度报告 | 是（部分）|
| 充实度水平 | 中等（实施依赖于训练人员和环境）|
| 主要证据 | Ganz et al. 2023 SR+Meta（AAC for ASD/IDD, AAC journal）；SR of AAC for adults with DD（2024）|
| 路径说明 | AAC → Communication↑（Primary IREL）→ Community Participation↑（Natural REL，Intermediate）→ Leisure Participation↑ / QoL↑ / Loneliness↓（Natural REL，Distal）|
| 工具依赖注 | 效果依赖于 AAC 系统持续在场；系统需与使用者环境和沟通伙伴协同工作。|

---

## IEA-000010：IREL-000015 证据

| 字段 | 内容 |
|------|------|
| ID | IEA-000010 |
| 支持 IREL | IREL-000015 |
| 支持 INT | INT-000006 |
| 证据 Tier | 2 |
| 证据等级 | Moderate |
| 引用 1 | Ganz, J. B., et al.（2023）. Participant characteristics predicting communication outcomes in AAC implementation for individuals with ASD and IDD: a systematic review and meta-analysis. Augmentative and Alternative Communication, 39(1), 7–22. |
| 引用 2 | 系统综述（2024）：AAC 对发展障碍成人的表达性和社会性语言结果，包括独立请求增加、休闲参与改善、孤独感减少和生活质量提升。|
| 关键发现 | AAC 在表达性沟通和功能性请求方面效果最强；社区参与和 QoL 为间接受益（通过沟通改善路径）。AAC 领域 RCT 数量有限，大多数研究为 Single-case 或 SR of controlled studies。|
| Fidelity | 中等（实施忠实度与沟通伙伴训练密切相关）|

---

## Outcome Hierarchy（AAC 首次应用 Communication Domain）

```
INT-000006（辅助沟通系统）
        ↓ IREL-000015（Primary IREL）
VAR-000052 沟通能力（Communication）↑

        ↓ Natural REL（Communication → Participation，待建或已有）
VAR-000023 社区参与↑（Intermediate）
VAR-000040 休闲参与↑（Intermediate）

        ↓ Natural REL
VAR-000022 生活质量↑（Distal）
VAR-000028 归属感↑（Distal）
```

**首次在 Communication Domain 验证 Outcome Hierarchy。**

---

## OBS-015 第三次验证

| 案例 | 新建 VAR | 建立原因 |
|------|---------|---------|
| KGO-002 | VAR-000050 Unmet Family Needs | Construct 范围更宽，不是子集 |
| INT-000005 PBS | VAR-000051 Challenge Behavior | 行为 Construct 独立于 Mental Health |
| **INT-000006 AAC** | **VAR-000052 Communication** | **沟通能力独立于 Mental Health 和 Participation** |

三次均符合 OBS-015：Concept 范围不同 → Ontology Expansion（新建 VAR），不是 Metadata 扩展。

---

## Sprint 7 KPI 最终更新

| 指标 | Phase 1 结束 | Phase F 后 |
|------|------------|----------|
| INT | 5 | **6**（+1）|
| IREL | 14 | **15**（+1）|
| IEA | 9 | **10**（+1）|
| VAR（Intervention 新增）| 2 | **3**（VAR-000052）|
| Communication Domain | 无 | **✅ 首次覆盖** |
| Tool-based Intervention | 无 | **✅ 首次建模** |

---

*Sprint 7 Phase F — AAC 完成*
*2026-07-07*
*Coverage Matrix 更新：Communication Domain 首次覆盖*
