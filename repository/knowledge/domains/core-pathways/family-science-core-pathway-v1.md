# Family Science Core Pathway v1.0
_冻结于 2026-07-07_

---

## 状态：已冻结

主链结构不再修改。后续工作：
- 升级节点间 REL 的 Evidence Grade
- 增加新的 Evidence Atoms（EA）
- 补充骨架 REL 的文献支撑

---

## 主链

```
KA-FAM-01001  Family Support
      ↓ REL-000056 [High]  非正式支持 → 家庭功能
      ↓ REL-000057 [High]  正式支持 → 家庭功能

KA-FAM-03001  Family Functioning（枢纽）
      ↓ REL-000058 [High]  家庭功能 → 降低父母压力

KA-FAM-02002  Parent Stress
      ↓ REL-000074 [Very Low→STR]  父母压力 → 照顾者负担

KA-FAM-02003  Caregiver Burden
      ↓ REL-000076 [Very Low→STR]  照顾者负担 → 家庭生活质量↓

KA-FAM-05001  Family Quality of Life（汇聚节点）
      ↓ REL-000078 [Very Low→Bridge]  FQoL → 儿童社区参与

→→→  Participation Science（Sprint 6 入口）
```

---

## 反馈循环

```
Caregiver Burden
      ↓
Family Functioning↓
      ↓
Parent Stress↑
      ↓
Caregiver Burden（自我强化）
```

这意味着单点干预容易被循环抵消，有效支持必须同时在多个节点介入。

---

## 当前证据状态

| 节点间 REL | Grade | 说明 |
|---|---|---|
| Family Support → Family Functioning | High × 2 | 已有 SR 支撑 |
| Family Functioning → Parent Stress | High | Meta-analysis |
| Parent Stress → Caregiver Burden | Very Low | STR Priority A |
| Caregiver Burden → Family QoL | Very Low | STR Priority A |
| Family QoL → Child Participation | Very Low | Participation Bridge |

---

## STR 优先目标（主链升级）

1. `parent stress caregiver burden accumulation longitudinal systematic review`
2. `caregiver burden family quality of life systematic review meta-analysis`
3. `family functioning family quality of life systematic review`
4. `family quality of life child community participation longitudinal`

---

## 桥接 Participation Science

FQoL → Child Community Participation（REL-000078）
这是 Family Science 和 Participation Science 两条主链的连接点。
Sprint 6 从这里开始建 Participation Science Core Pathway。

