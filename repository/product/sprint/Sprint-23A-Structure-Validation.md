# Sprint 23A · Product Structure Validation
## Volume I — 产品结构审查

**日期：** 2026-07-14
**性质：** 内部桌面评审，不依赖真实用户
**回答的问题：** 产品设计是否自洽？

---

## 一、内容清单（现有资产）

### Foundation Knowledge Layer
| ID | 标题 | 状态 |
|----|------|------|
| KA-Visual-001 | 视觉支持：为什么它能帮助孩子 | internal_review |
| KA-Family-001 | 孩子的发展，不只是孩子自己的事 | internal_review |
| KA-Participation-001 | 为什么技能不等于参与 | internal_review |

### Original Resources
| ID | 标题 | 状态 |
|----|------|------|
| RI-ANORI-0001 | First–Then Visual Support Card | ready |
| RI-ANORI-0002 | 每周家庭观察记录 | ready |

### External Resources
| ID | 来源 | 状态 |
|----|------|------|
| RI-CDC-0001 | CDC Developmental Milestones | url_verified |
| RI-CDC-0002 | CDC Milestone Checklists | url_verified |
| RI-CDC-0003 | CDC LTSAE Family Materials | url_verified |
| RI-WHO-0001 | WHO Nurturing Care Framework | url_verified |
| RI-WHO-0002 | WHO ICF Framework | url_verified |
| RI-WHO-0003 | WHO Nurturing Care Practice Guide | url_verified |
| RI-NICE-0001 | NICE CG128 Autism recognition/referral/diagnosis | url_verified |

### Product Modules（页面层）
- **Journey**：P001 / P006 已有 early action box（Sprint 19）
- **Resource 页面**：有筛选 + 原创资源区块（Sprint 19 + resource.astro 更新）
- **Library / Knowledge Hub**：三张卡片，Beta 标签
- **BaseLayout**：Vercel Analytics 接入

---

## 二、三条 Mission Walkthrough

### Mission 1
> **我刚开始担心孩子的发展，我想知道下一步该怎么办。**

**预期路径：**
```
首页
  ↓
Journey（P001 早期发现路径）
  ↓
early action box（"现在可以做什么"）
  ↓
KA-Family-001（成长环境）
  ↓
CDC Milestone Checklists（RI-CDC-0002，今天可以打印）
  ↓
[结束：带走一张清单]
```

**结构审查：**

| 检查项 | 状态 | 说明 |
|--------|------|------|
| 首页 → Journey 入口是否清晰 | ⚠️ 待确认 | 需核实首页是否有明确 Journey 入口 |
| Journey P001 → KA-Family-001 是否有链接 | ❌ 缺失 | KA 页面尚未上线；Journey 页面未关联 KA |
| KA-Family-001 → RI-CDC-0002 是否有链接 | ❌ 缺失 | KA 正文中未引用 CDC Milestone Checklists |
| RI-CDC-0002 → 实际可访问中文 PDF | ✅ | url_verified，中文 PDF 直链已核实 |
| 全程有无 Dead End | ⚠️ | KA 尚未发布，路径在 Knowledge Hub 中断 |

**Gap：** KA-Family-001 与 Journey P001 之间没有显式连接。家长从 Journey 出来后，不知道该去看哪篇 KA。

---

### Mission 2
> **我已经确诊 ASD，我需要一个今天就能用的工具。**

**预期路径：**
```
首页 或 Resource 页面
  ↓
Resource 页面 → Anori Originals 区块
  ↓
RI-ANORI-0001（First–Then Card）
  ↓
下载 PDF（预填版 / 空白版）
  ↓
[结束：带走可打印工具]
```

**结构审查：**

| 检查项 | 状态 | 说明 |
|--------|------|------|
| Resource 页面 → Anori Originals 区块 | ✅ | resource.astro 已更新，区块存在 |
| RI-ANORI-0001 在 Resource 页面展示 | ✅ | 预览图 + 两个下载按钮 |
| 下载文件路径是否正确 | ⚠️ 待确认 | `/downloads/resources/RI-ANORI-0001/` 是否已部署 |
| RI-ANORI-0001 → KA-Visual-001 是否有链接 | ❌ 缺失 | Resource 卡片未关联 KA（"为什么有效"无入口）|
| KA-Visual-001 是否已上线 | ❌ 未上线 | KA 系统尚未集成进页面 |
| 全程有无 Dead End | ⚠️ | 下载完成后无"下一步"提示 |

**Gap：** Resource 卡片与 KA 之间没有连接。家长下载了 First–Then Card 但不知道为什么这样有效，也不知道如何使用。KA-Visual-001 的价值无法被发现。

---

### Mission 3
> **我想理解为什么老师一直说"参与"，这个词到底是什么意思。**

**预期路径：**
```
首页 或 Knowledge Hub
  ↓
Library / Knowledge Hub → KA-Participation-001
  ↓
KA-Participation-001 正文（第 1-6 章）
  ↓
第 7 章：三篇 Foundation KA 的逻辑链
  ↓
[结束：理解 Participation 的含义，知道还有 Visual 和 Family 两篇]
```

**结构审查：**

| 检查项 | 状态 | 说明 |
|--------|------|------|
| 首页 → Knowledge Hub 入口 | ⚠️ 待确认 | Library 导航是否在首页可见 |
| Knowledge Hub → KA-Participation-001 | ❌ 未上线 | KA 系统尚未集成进页面 |
| KA-Participation-001 内容质量 | ✅ | internal_review 通过，内容完整 |
| 第 7 章 → KA-Family-001 / KA-Visual-001 交叉链接 | ❌ 缺失 | 正文中提及但未有可点击链接 |
| KA → RI-WHO-0002（ICF）是否有链接 | ❌ 缺失 | 相关资源章节未提供可访问链接 |
| 全程有无 Dead End | ❌ | KA 系统未上线，Mission 3 在 Knowledge Hub 完全中断 |

**Gap：** Knowledge Hub 尚未整合任何 Foundation KA。Mission 3 在产品层面目前无法完成。

---

## 三、系统性问题归类

### Dead Ends（走到尽头没有下一步）

| 位置 | 描述 |
|------|------|
| Knowledge Hub | 三张卡片存在，但点进去无 KA 内容（Beta 状态）|
| Resource 卡片 | 下载完成后无"下一步"或"了解更多"入口 |
| Journey early action box | 指向行动，但未连接 Knowledge 解释层 |

### Missing Links（应该连接但未连接）

| 缺失连接 | 说明 |
|---------|------|
| Journey P001 → KA-Family-001 | 「为什么要这样做」的解释层缺失 |
| Resource RI-ANORI-0001 → KA-Visual-001 | 工具缺少「为什么有效」的入口 |
| KA → Resource（双向）| KA 提到资源，但无可点击的资源卡片 |
| KA → KA（交叉引用）| 第 7 章提及其他 KA，但无链接 |
| Resource（外部）→ KA | RI-CDC-0002 旁没有「背景阅读」入口 |

### 内容孤岛（存在但未连接到任何路径）

| 孤岛 | 原因 |
|------|------|
| KA-Visual-001 | 已完成，未上线，无任何页面入口 |
| KA-Family-001 | 已完成，未上线，无任何页面入口 |
| KA-Participation-001 | 已完成，未上线，无任何页面入口 |
| RI-WHO-0001/0002/0003 | url_verified，但未出现在 Resource 页面 |
| RI-NICE-0001 | url_verified，但未出现在 Resource 页面 |

### 重复风险

| 位置 | 风险 |
|------|------|
| KA-Family-001 第 2 章 vs KA-Participation-001 第 5 章 | 两者都涉及家庭环境，但角度不同（无实质重复）|
| CDC Milestones vs CDC Checklists | 两条资源功能接近，需在 Resource 页面区分定位 |

---

## 四、结构性结论

### 产品目前的状态

**已完成但未连接的内容：**
```
Foundation KA × 3     ← 全部 internal_review，无页面入口
External Resources × 7 ← url_verified，只有 CDC 中的部分在旧 resources.json 中
Original Resources × 2  ← ready，RI-ANORI-0001 已在 Resource 页面展示
```

**产品层存在的结构：**
```
Journey（有内容）
Resource 页面（有 Anori Originals，有外部资源筛选）
Library / Knowledge Hub（有卡片，无 KA 内容）
```

**核心诊断：**
> 内容层已经建立，但内容层与产品层之间的**连接系统尚未存在**。
> 三篇 Foundation KA 是孤岛。七条 External Resource 中只有 CDC 的旧版本在 resources.json 里。

### 最关键的三个缺口

**缺口 1：Knowledge Hub 未整合 KA**
三篇 Foundation KA 完成了 internal_review，但没有任何一条进入可访问的页面。Knowledge Hub 的三张卡片是入口，但卡片后面没有内容。

**缺口 2：Resource 与 Knowledge 没有双向连接**
Resource 卡片下载后是终点，不是中间点。KA 提到了 Resource，但 Resource 不知道 KA 的存在。

**缺口 3：Journey 没有进入 Knowledge 的路径**
Journey 是家长最可能的入口。但从 Journey 出来之后，家长没有被引导去阅读相关 KA，也没有被引导去下载相关 Resource。三层之间（Journey → Knowledge → Resource）的流动路径尚未建立。

---

## 五、建议优先级（为 Sprint 23B 准备检查清单）

| 优先级 | 缺口 | 说明 |
|--------|------|------|
| P0-1 | **KA 系统集成进 Knowledge Hub** | 所有连接的终点必须先存在。没有 KA 页面，Journey → KA 和 Resource → KA 都无处可跳 |
| P0-2 | **Resource 卡片 → KA 的链接** | KA 页面存在后，Resource 才能有"为什么有效"的出口 |
| P0-3 | **Journey → 相关 KA 的引导** | KA 和 Resource 都就位后，Journey 才能形成完整流动路径 |
| P1 | KA → Resource 的可点击链接 | 读完知识应该知道可以带走什么 |
| P2 | External Resources 更新进 Resource 页面 | WHO / NICE 资源目前对用户不可见 |
| P3 | KA 交叉引用链接（第 7 章）| 知识网络内部连接 |

**P0 顺序的逻辑：** Knowledge Hub 是所有连接的终点——必须先存在，其他连接才有落脚点。

---

## 六、Sprint 23B 检查清单（Experience Validation 用）

以下问题在真实 Walkthrough 中验证：

**Mission 1（刚开始担心发展）**
- [ ] 首页能否在 30 秒内找到"下一步"入口？
- [ ] Journey 有没有让人感到迷路的地方？
- [ ] 从 Journey 出来后，是否自然想到去看 KA？
- [ ] CDC Milestone Checklist 是否能找到并下载？

**Mission 2（已确诊，需要工具）**
- [ ] Resource 页面是否让人第一眼就看到原创资源？
- [ ] First–Then Card 的描述是否足够让人理解如何使用？
- [ ] 下载完之后，是否还想留在网站继续？
- [ ] 是否会主动去找"为什么这样有效"的解释？

**Mission 3（想理解参与）**
- [ ] Library / Knowledge Hub 是否容易从首页找到？
- [ ] KA 文章的长度和语气是否让人读完？
- [ ] 第 7 章的三篇关联是否让人想继续读其他两篇？
- [ ] 读完后是否知道下一步可以做什么？

---

*Sprint 23A · Structure Validation · 2026-07-14*
