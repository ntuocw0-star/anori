# Cross-concept Layer v1.0
冻结日期：2026-07-12（Sprint 22）

---

## Cross-concept EA（4篇）

EA-000016  Dunst (2022)
  Systematic Review and Meta-Analysis of Family Needs Studies
  European Journal of Psychology and Educational Research, 5(1), 11–32
  Primary: concept-family-support
  Secondary: concept-parent-stress · concept-family-functioning
  Role: 关联层（Family Needs ↔ Parenting Stress ↔ Family Functioning）
  Validator: PASS

EA-000017  Dunst (2023)
  Meta-Analyses of Family Systems Practices, Parents' Psychological Health, and Parenting Quality
  Int J Environ Res Public Health, 20(18), 6723
  Primary: concept-family-support
  Secondary: concept-parent-stress · concept-family-functioning
  Role: 机制层（Family Systems Practices → Psychological Health → Parenting Quality 中介路径）
  Validator: PASS

EA-000018  Wang et al. (2022)
  The Mediating Effect of Parenting Stress on Social Support and Quality of Life (MASEM)
  Frontiers in Psychiatry, 13, 713620
  Primary: concept-parent-stress
  Secondary: concept-family-support · concept-fqol（QoL，Indirect）
  Role: MASEM 中介路径（Support → Stress → Parent QoL）
  Boundary: 结果变量为 Parent QoL，非 Beach Center FQOL
  Validator: PASS

EA-000019  Dunst (2021)
  Family Strengths, Circumplex Model, and Personal and Family Functioning
  Journal of Behavior Health & Social Issues, 13(2), 1–19
  Primary: concept-family-functioning
  Secondary: concept-parent-stress · concept-fqol（Well-being，Indirect）
  Role: Circumplex Model 框架下家庭优势与家庭功能的 Meta-analytic 综合
  Boundary: Well-being 为个人/家庭功能层面，非 Beach Center FQOL
  Validator: PASS

---

## Cross-concept ET（1篇）

ET-000027  Family Systems Resources and Outcomes
  Primary: concept-family-support
  Secondary: concept-parent-stress · concept-family-functioning · concept-fqol
  Supported by: EA-000016 · EA-000017 · EA-000018 · EA-000019
  Validator: PASS

---

## Cross-concept Coverage Matrix（开发文档）

Family Support ↔ Parenting Stress      EA-000016 · EA-000017 · EA-000018  Partial
Family Support ↔ Family Functioning    EA-000016 · EA-000017              Partial
Parenting Stress ↔ Family Functioning  EA-000016 · EA-000017 · EA-000019  Partial
Family Support ↔ FQOL                  EA-000015 · EA-000016              Partial
Parenting Stress ↔ QoL/FQOL (Indirect) EA-000015 · EA-000018             Partial
Family Functioning ↔ QoL (Indirect)   EA-000014 · EA-000015 · EA-000019  Partial
Participation ↔ Family Support         EA-000024（间接）                  Planned
Participation ↔ Parenting Stress       EA-000024（间接）                  Planned

---

## Common Evidence Pattern（ET-000027 验证）

Family Systems Resources
  （Needs · Supports · Resources · Strengths）
          ↓
Parents' Psychological Health
  （Stress · Depression · Well-being）
          ↓
Parenting / Family Functioning
          ↓
Quality of Life Outcomes
  （Parent QoL · FQOL 为概念相关参考）

---

## Cross-concept ET 建立条件（已验证）
① Cross-concept EA ≥ 4 ✓
② 覆盖 4 个核心 Concept ✓
③ 关联证据 + 机制证据 ✓
④ 共同 Evidence Pattern 可归纳 ✓
