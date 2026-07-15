# Sprint 20 · Backlog & Pending Items

**更新：** 2026-07-13
**状态：** Sprint 20 收尾中，等待 RI-ANORI-0002 物理 QA

---

## 一、阻塞项（影响 Sprint 20 正式冻结）

### RI-ANORI-0002 物理 QA
**状态：** `qa` — 等待实际测试
**负责人：** 人工

待验证的两项：
- [ ] A4 黑白打印：字迹清晰，填写区空间够用
- [ ] 彩印书写测试：浅色背景不影响手写

通过后执行：`verification_status: qa → ready` → Sprint 20 正式冻结

---

## 二、Sprint 20 完成后的 Backlog

### B1 · RI-ANORI-0001 v1.1（P2）
**内容：** 新增 Screen Edition，与 ORS 3.5 双版本规范保持一致
**前置：** RI-ANORI-0001 当前 `ready` 状态不受影响
**触发：** Sprint 20 冻结后安排

### B2 · KA-Visual-001（Knowledge Gap）
**内容：** 为什么 First–Then 有效？视觉支持在家庭中的应用
**字段：** RI-ANORI-0001 `related_ka` 当前为空，待此 KA 发布后补充
**优先级：** 高（Resource 页面展示需要 KA 关联）

### B3 · WHO Resource Item（Inventory Gap）
**内容：** 首批范围包含 WHO，但 resource-items.json 中尚无 WHO Item
**优先级：** 中

### B4 · CDC / NICE 外部条目人工核实（Verification Gap）
- CDC 简体中文资源：官方中文版是否存在
- NICE Crown Copyright：摘要是否需要授权申请
**优先级：** 中（不阻塞原创资源发布）

### B5 · 资源封面统一模板（Cover Template）
**内容：** 所有原创资源共用统一封面元素（ID、版本、许可证、分类）
**前置：** RI-ANORI-0001 + RI-ANORI-0002 均 `ready` 后评估
**优先级：** 低

---

## 三、暂缓（本阶段不处理）

- 第三个 Knowledge Hub 建设
- Resource 页面大规模重构
- 批量导入剩余 46 条 EA
- 37 个 Seed 概念扩充

---

## 四、Sprint 20 冻结条件

以下全部满足后，Sprint 20 正式冻结：

- [x] 20A · Resource Data Model
- [x] 20B-1 · ORS v1.0 冻结
- [x] 20B-2 · RI-ANORI-0001 `ready`
- [ ] 20B-3 · RI-ANORI-0002 `ready`（等物理 QA）

冻结后进入下一阶段，不再修改 Sprint 20 核心设计。

---

*Sprint 20 · Backlog · 2026-07-13*
