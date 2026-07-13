# Intervention Outcome Hierarchy Framework v1.0

**Anori Knowledge Operating System**
日期：2026-07-07
状态：正式冻结

---

## 核心结构

每个 Intervention 的 Outcome 分为三个层级：

```
Intervention
        ↓ IREL（直接建立）
Primary Outcome
（文献中直接测量的近端结果）

        ↓ Natural REL（现有 KOS 关系）
Intermediate Outcome
（通过中间机制产生的效果）

        ↓ Natural REL（现有 KOS 关系）
Distal Outcome
（最终远端结果，经由自然关系链到达）
```

---

## 三层定义

| 层级 | 定义 | IREL 建立 | 证据要求 |
|------|------|---------|---------|
| **Primary Outcome** | 文献中直接测量、作为研究主要结果的近端变量 | ✅ 必须建立 | 直接 RCT/SR 证据 |
| **Intermediate Outcome** | 通过机制连接的中间变量，有间接证据 | 可选（有直接证据时建立）| 有独立研究支持 |
| **Distal Outcome** | 经由 Natural REL 链到达的远端结果 | ❌ 不另建 IREL | 依赖 Natural REL 体系 |

---

## 核心原则

> **IREL 只建立 Primary Outcome 的直接连接。Intermediate 和 Distal Outcome 通过现有 Natural REL 体系传递，不在 IREL 层重复建立。**

**意义：**
- 避免 IREL 层过度膨胀（不为每个远端结果都建 IREL）
- 保持 Natural REL 体系的核心价值（远端路径由已验证的自然关系承担）
- Intervention 的知识图谱连接点清晰，只需管理 Primary IREL

---

## 实际路径示例

### PBS（验证案例）

```
INT-000005（积极行为支持）
        ↓ IREL-000014（Primary）
VAR-000031 挑战行为（Challenge Behavior）↓
        ↓ REL（Natural）
VAR-000013 儿童心理健康↑（Intermediate）
VAR-000015 家庭功能↑（Intermediate）
        ↓ REL（Natural）
VAR-000023 社区参与↑（Distal）
VAR-000022 生活质量↑（Distal）
```

PBS 只建立一条 IREL（→ 挑战行为减少）；其余通过已有 Natural REL 传递。

### Parent Training（回溯验证）

```
INT-000002（亲职训练）
        ↓ IREL-000002（Primary）
VAR-000002 父母压力↓

        ↓ IREL-000003（Primary）
VAR-000003 亲职质量↑
        ↓ REL（Natural）→ VAR-000015 家庭功能（Intermediate）
                        → VAR-000004 FQoL（Distal）

        ↓ IREL-000004（Primary）
VAR-000015 家庭功能↑
```

Parent Training 有多个 Primary Outcome，各自建立独立 IREL——这是合理的，因为证据直接支持每一条。

---

## 与 Natural REL 体系的关系

```
Intervention Layer（IREL）
Primary Outcome 连接
        ↓
↓↓↓ 交界点（VAR）↓↓↓
        ↓
Natural REL Layer
Intermediate → Distal 路径
由现有 REL 承担
```

两层通过共享 VAR Registry 连接，不需要新建重复路径。

---

## Challenge Behavior VAR 说明

**VAR-000031（挑战行为）**

PBS 的 Primary Outcome 是挑战行为减少（Challenge Behavior / Behaviour that Challenges）。

检查：KOS 是否已有对应 VAR？

```
VAR-000013：Child Mental Health（儿童心理健康）
  — 包含内化/外化问题，但不等于挑战行为本身
VAR-000031：待建立（如果不存在）
```

挑战行为是独立构念（功能行动评估的核心，与"心理健康"层级不同），需要独立 VAR。

---

*Intervention Outcome Hierarchy Framework v1.0 — 2026-07-07*
