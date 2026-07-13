# Evidence Search Targets
_基于骨架 REL 的精准文献搜索清单_
_2026-07-07_

---

## 系统说明

这份清单由骨架 REL（Skeleton REL）自动生成。
每一条搜索目标对应一个已知「关系应该存在，但证据不足」的 REL。
找到合适文献后，直接更新对应 REL 的 `evidence_timeline` 和 `evidence_grade`，不需要新建 REL。

**更新流程：**
```
找到文献（SR/Meta 优先）
  ↓
更新 REL.evidence_grade
  ↓
追加 REL.evidence_timeline 记录
  ↓
更新 REL.primary_citation / primary_citation_year
  ↓
生成 evidence_card 写入对应页面
  ↓
Dashboard 自动更新
```

---

## 优先级 A：Caregiver Identity & Values（新建骨架，最高缺口）

| REL | 关系 | 搜索关键词 | 目标文献类型 |
|---|---|---|---|
| REL-000065 | 非正式社会支持 → 照顾者自我效能 | `caregiver self-efficacy social support systematic review` | SR / Meta |
| REL-000066 | 照顾者自我效能 → 教养质量 | `parenting self-efficacy parenting quality disability meta-analysis` | SR / Meta |
| REL-000067 | 照顾者自我效能 → 家庭功能 | `caregiver self-efficacy family functioning` | SR 或纵向研究 |
| REL-000068 | 照顾意义感 → 照顾者负担 | `meaning-making caregiver burden systematic review` | SR |
| REL-000069 | 自我关怀 → 父母压力 | `self-compassion parental stress meta-analysis` | Meta / SR |
| REL-000070 | 照顾者韧性 → 家庭生活质量 | `caregiver resilience family quality of life` | SR 或纵向研究 |

---

## 优先级 B：原有骨架（EVD-TODO 系列，已建立较久）

| REL | 关系 | 搜索关键词 | 目标文献类型 |
|---|---|---|---|
| REL-000009 | 家庭功能 ↔ 情绪社会化 | `family functioning emotional socialization disability` | SR 或纵向 |
| REL-000010 | 家庭韧性 → 幸福感（中介） | `family resilience wellbeing caregiver mediator` | 纵向或 SR |
| REL-000016 | 教养质量 → 家庭功能 | `parenting quality family functioning disability` | SR 或实证 |
| REL-000017 | 家庭功能 → 家庭生活质量 | `family functioning family quality of life systematic review` | SR / Meta |
| REL-000023 | 家庭功能 → 教养质量 | `family functioning parenting behavior disability longitudinal` | 纵向或 SR |

---

## 找到文献后的操作步骤

1. 确认文献类型（SR > Meta > 纵向研究 > 横断研究）
2. 评定 evidence_grade（High / Low / Very Low）
3. 更新对应 REL 的三个字段：
   - `evidence_grade`
   - `primary_citation`
   - `primary_citation_year`
4. 在 `evidence_timeline` 追加记录
5. 写 evidence_card 进对应 Knowledge Page
6. 从 `evd_todo` 删除或标注已完成

---

## 目标状态

全部 11 条骨架 REL 升级到至少 Low grade，
`values` 页面获得至少 2 张 High grade evidence_card。


---

## Sprint 3 新增（2026-07-07）：Parent Stress 出口路径

| REL | 关系 | 搜索关键词 | 目标文献类型 |
|---|---|---|---|
| REL-000071 | 父母压力 → 教养质量↓ | `parent stress parenting quality disability meta-analysis systematic review` | Meta / SR |
| REL-000072 | 父母压力 → 家庭生活质量↓（直接路径） | `parental stress family quality of life systematic review` | SR |
| REL-000073 | 父母压力 → 儿童社区参与↓ | `parent stress child participation community longitudinal` | Longitudinal / Meta |

