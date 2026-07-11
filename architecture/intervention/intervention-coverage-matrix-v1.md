# Intervention Coverage Matrix v1.0

**Anori Knowledge Operating System**
日期：2026-07-07
用途：Intervention Repository 扩展路线图，Sprint 7 Phase 2+ 导航图

---

## 覆盖矩阵

| Intervention | Family | Communication | Behavior | Participation | Education | Transition | Employment | Technology | 状态 |
|-------------|:------:|:------------:|:-------:|:------------:|:--------:|:----------:|:---------:|:---------:|:---:|
| **INT-000001** Peer Support Arrangements | | | | ✅ | ✅ | | | | ✅ 已建 |
| **INT-000002** Parent Training | ✅ | | ✅ | | | | | | ✅ 已建 |
| **INT-000003** Family-centered Practice | ✅ | | | | | | | | ✅ 已建 |
| **INT-000004** Social Skills Training | | | | ✅ | ✅ | | | | ✅ 已建 |
| **INT-000005** Positive Behavior Support | | | ✅ | ✅ | ✅ | | | | ✅ 已建 |
| **INT-000006** AAC（辅助沟通系统）| | ✅ | | ✅ | | | | ✅ | ⏳ Phase 2 |
| **INT-000007** NDBI（自然发展行为干预）| | ✅ | ✅ | | ✅ | | | | ⏳ Phase 2 |
| **INT-000008** Transition Planning | | | | ✅ | | ✅ | ✅ | | ⏳ Phase 2 |
| **INT-000009** Inclusive Education | | | | ✅ | ✅ | | | | ⏳ Phase 3 |
| **INT-000010** Assistive Technology | | ✅ | | ✅ | | | | ✅ | ⏳ Phase 3 |
| **INT-000011** Supported Employment | | | | ✅ | | ✅ | ✅ | | ⏳ Phase 3 |
| **INT-000012** Respite Care | ✅ | | | | | | | | ⏳ Phase 3 |
| **INT-000013** Early Intensive Intervention（EII）| | ✅ | ✅ | | ✅ | | | | ⏳ Phase 4 |
| **INT-000014** Sensory Integration Therapy | | | ✅ | ✅ | | | | | ⏳ Phase 4 |

---

## Domain 覆盖度（截至 Phase 1 结束）

| Domain | 已有 INT | 覆盖度 |
|--------|---------|--------|
| Family | INT-000002/003 | ✅ 基础覆盖 |
| Communication | 无 | ❌ 空白 |
| Behavior | INT-000002/005 | ✅ 基础覆盖 |
| Participation | INT-000001/004/005 | ✅ 较好覆盖 |
| Education | INT-000001/004/005 | ✅ 基础覆盖 |
| Transition | 无 | ❌ 空白 |
| Employment | 无 | ❌ 空白 |
| Technology | 无 | ❌ 空白 |

**最大缺口：** Communication / Transition / Employment / Technology — 四个 Domain 完全空白

---

## 优先级说明

### Phase 2（当前）：填补空白 Domain

```
INT-000006 AAC
→ 填补 Communication Domain
→ 连接 Participation（已有 Natural REL）
→ 验证 Tool-based Intervention 建模

INT-000007 NDBI
→ 补充 Communication + Behavior
→ 验证 Program Cluster INT（ESDM/JASPER/PRT 整合层级）

INT-000008 Transition Planning
→ 填补 Transition + Employment Domain
→ 连接 KD-TRA（第三个 Knowledge Domain 激活候选）
```

### Phase 3：深化现有 Domain

```
INT-000009 Inclusive Education
→ 教育 Domain 深化
→ 与 PBS / Peer Support 形成 Educational Intervention 体系

INT-000010 Assistive Technology
→ Technology Domain 开启
→ 工具性 Intervention 建模验证（延续 AAC 模式）

INT-000011 Supported Employment
→ Employment Domain
→ 成人生命历程延伸

INT-000012 Respite Care
→ Family Domain 补充
→ 与 Parent Training / Family-centered Practice 形成 Family Intervention 体系
```

### Phase 4：专门化与边界 Intervention

```
INT-000013 Early Intensive Intervention（EII）
→ 早期干预，高证据密度
→ ESDM 等高质量 RCT 支撑

INT-000014 Sensory Integration Therapy
→ 证据基础相对薄弱
→ Annotation / Pending 使用率较高
→ 放最后以验证 Workflow 对弱证据 Intervention 的处理
```

---

## 新建模问题跟踪

每个新 Phase 可能引出的 Ontology 问题：

| Phase | Intervention | 预期新建模问题 |
|-------|-------------|------------|
| **Phase 2** | AAC | Tool-based Intervention（工具 + 方法组合）|
| Phase 2 | NDBI | Program Cluster（多个同类项目的整合）|
| Phase 2 | Transition Planning | Life Stage Intervention（生命阶段限定）|
| Phase 3 | Assistive Technology | Technology-mediated Intervention |
| Phase 3 | Supported Employment | Outcome beyond KOS VAR（可能需新 VAR）|

---

## Coverage 目标

| 阶段 | INT 目标 | Domain 覆盖目标 |
|------|---------|--------------|
| Phase 1（完成）| 5 | 4/8 Domain 基础覆盖 |
| Phase 2 | +3（AAC/NDBI/Transition）| 7/8 Domain（Communication + Transition + Employment 填补）|
| Phase 3 | +4 | 8/8 Domain 全覆盖 |
| Phase 4 | +2 | 深度 + 边界 Intervention |

---

## 与 Natural Knowledge Graph 的连接目标

| 知识域 | 当前状态 | Intervention 目标 |
|--------|---------|----------------|
| KD-FAM | 激活，证据充分 | Family Intervention 体系完整（Phase 2-3）|
| KD-PAR | 激活，证据充分 | Participation Intervention 多元化（Phase 2-3）|
| KD-TRA | 骨架存在，未激活 | **Transition Planning → 激活 KD-TRA（Phase 2）**|

---

*Intervention Coverage Matrix v1.0 — 2026-07-07*
*Sprint 7 Phase 2+ 导航图*
*下次更新触发条件：每完成一个新 INT，更新状态列*
