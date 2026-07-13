# Anori Component System v1.0
# 可复用组件库

Version: 1.0
Source: P001 + P002
Sprint: 10

从 P003 开始，所有页面直接调用此组件库。
不重新设计，只替换内容。

---

## 组件目录

| # | 组件名                | 类别      | 已用路径         |
|---|-----------------------|-----------|-----------------|
| C01 | Hero Block          | 结构      | P001, P002 全部  |
| C02 | Today Box           | 行动      | P001, P002 全部  |
| C03 | Closing Block       | 结构      | P001, P002 全部  |
| C04 | Back Links          | 导航      | P001, P002 全部  |
| C05 | Next Step Grid      | 导航      | P001, P002 全部  |
| C06 | Evidence Box        | 证据      | P001, P002 全部  |
| C07 | Professional Block  | 支持      | P001, P002 全部  |
| C08 | Parent Message      | 情感      | P002 全部        |
| C09 | Do/Don't Panel      | 判断      | P001, P002       |
| C10 | Step List           | 行动      | P001, P002       |
| C11 | Life Moments        | 场景      | P001, P002       |
| C12 | Timeline            | 时间      | P001 S006, P002 S006 |
| C13 | Progress Signals    | 进度      | P001, P002       |
| C14 | Decision Box        | 判断      | P001 S002        |
| C15 | State Map           | 判断      | P002 S001, S002  |
| C16 | Flow Box            | 说明      | P002 多页        |
| C17 | Source Grid         | 说明      | P002 SUP001      |
| C18 | Judge Box           | 判断      | P002 SUP001      |
| C19 | Myth/Truth Grid     | 认知      | P002 Journey, U001|
| C20 | Reframe Box         | 认知      | P002 多页        |
| C21 | Conversation Starter| 行动      | P001 S004, P002 S005|
| C22 | Four-Layer Framework| 说明      | P002 U001        |
| C23 | Compare Grid        | 判断      | P002 S004        |
| C24 | Gap Box             | 说明      | P002 S005        |
| C25 | Path Reflection     | 收束      | P001 S006, P002 S006|
| C26 | Cross-path Link Box | 导航      | P002 S004        |
| C27 | Adjust Box          | 判断      | P002 S006        |
| C28 | Signal Card Grid    | 判断      | P002 S005        |

---

## 组件详细规格

---

### C01 Hero Block

**用途**: 每页顶部，标题 + 陪伴语

**规则（Style Rule R01）**:
- 语气：陪伴开始，不许诺结果
- 不用「只要…就能」「一定会…」
- 陪伴语 1–2 句，16px，color: text-secondary

**模板**:
```html
<div class="hero">
  <h1>[页面标题]</h1>
  <p>[陪伴语，1–2句，不许诺结果]</p>
  [Today Box 插入此处]
</div>
```

---

### C02 Today Box

**用途**: 每页必有，绿色，今天先做这一件事

**规则（Style Rule R02）**:
- 用「最近」降低执行门槛
- 一件事，不是多件
- 门槛要极低：今晚吃饭 / 发一条消息 / 观察一次
- 有时候可以反常规：「今天先停下来」（S005）

**模板**:
```html
<div class="today-box">
  <div class="label">今天先做这一件事</div>
  <p>[一件今天就能做的、门槛极低的事]</p>
</div>
```

---

### C03 Closing Block

**用途**: 每页最后，品牌识别句（固定，不修改）

**规则（Style Rule R08）**:
固定文字，全站统一，不得修改：

```
不用一次学会所有东西。
今天完成这一小步，就已经很好。
等准备好了，我们再陪你走下一步。
```

---

### C04 Back Links

**用途**: 页面底部，返回上一层

**规则**:
- 最多 2 个链接
- 第一个：返回直接上层页面
- 第二个：返回 Journey（总入口）

---

### C05 Next Step Grid

**用途**: 页面结尾，引导下一步

**规则（Style Rule R07）**:
固定 3 个入口：
1. 当前主题相关的下一页
2. 实操延伸页
3. 困难处理页 / 允许后退页（Style Rule R17）

```html
<div class="nav-grid">
  <div class="nav-btn">[延伸]</div>
  <div class="nav-btn">[实操]</div>
  <div class="nav-btn">[困难/后退]</div>
</div>
```

---

### C06 Evidence Box

**用途**: 每页必有，国际研究发现

**规则（Style Rule R04, R05, R22）**:
- 格式固定：★★★★★ + 副标题 + ✓ 列表
- 用词：研究发现 / 大量研究发现 / 系统综述发现 / 国际指南建议
- 不用：研究证明
- 结尾：情感转译句（不用学术结论收尾）
- ✓ 项目：2–4 条，每条 1–2 句

```html
<div class="evidence-box">
  <div class="evidence-header">
    <span class="stars">★★★★★</span>
    <span>来自多项系统性研究的发现</span>
  </div>
  <div class="evidence-item"><span class="check">✓</span><span>[发现1]</span></div>
  <div class="evidence-item"><span class="check">✓</span><span>[发现2]</span></div>
  <div class="evidence-item"><span class="check">✓</span><span>[发现3]</span></div>
</div>
<p style="margin-top:1rem;">[情感转译句]</p>
```

---

### C07 Professional Block

**用途**: 每页必有，如果身边有专业人员

**规则（Style Rule R06）**:
固定结尾句：「如果暂时没有，也不用担心，你仍然可以先从今天开始。」

```html
<div class="pro-box">
  <p>[专业人员可以提供的具体帮助，1–2项]</p>
  <p>[可选：具体评估或治疗方法名称]</p>
</div>
<p>如果暂时没有，也不用担心，你仍然可以先从今天开始。</p>
```

---

### C08 Parent Message

**用途**: 情绪/行为/困难相关页面，给家长的话

**规则（Style Rule R27）**:
- 黄色背景（bg-warning）
- 标签：「给家长自己」
- 内容：承认家长的难处 + 不增加压力 + 真实陪伴
- 不是建议，不是指导，是同理

```html
<div class="self-box">
  <div class="self-label">给家长自己</div>
  <p>[承认难处，不增压，真实陪伴]</p>
</div>
```

---

### C09 Do/Don't Panel

**用途**: 行动指导，什么可以做 / 什么可以等

**规则**:
- 左栏：绿色，✓，「可以做」
- 右栏：灰色，—，「这些可以等等」/ 「不需要做到的」
- 不用红色×（避免制造失败感）
- 每栏 3–5 条

---

### C10 Step List

**用途**: 今天怎么开始，编号步骤

**规则（Style Rule R03）**:
- 最后一步必须有停止指令：「今天做三次就够了。今天结束以后，就停下来。明天再继续。」
- 每步含：标题 + 说明 + 例子（斜体）
- 步骤数：3–5 步

---

### C11 Life Moments

**用途**: 支持发生在日常生活里的场景

**规则（Style Rule R12）**:
- 用 Emoji 代表生活场景，不用章节标题
- 每个场景：Emoji + 场景名 + 说明 + 具体例子
- 常用场景：🍽 吃饭 / 🧸 玩玩具 / 🛁 洗澡 / 🚗 出门 / 🍎 点心 / 🎮 自由活动

---

### C12 Timeline

**用途**: 成长变化的时间预期

**规则（Style Rule R18）**:
- 左侧竖线 + 圆点
- 每个阶段：时间段 + 标题 + 说明 + 进步信号（绿色）
- 进步信号格式：✓ [可以观察到的具体行为]
- 通常 4 个阶段：1–2周 / 2–4周 / 1–2个月 / 2–3个月

---

### C13 Progress Signals

**用途**: 什么算是进步

**规则（Style Rule R19）**:
- 标题：「这些都算进步」
- 列举 5–8 个真实但容易被忽视的进步信号
- 重点：家长看不见的进步，也是进步
- 不用「孩子会…了」，用「你发现…」「他…了一次」

---

### C14 Decision Box

**用途**: 帮助判断，是或否

**规则（Style Rule R11）**:
- 不告诉家长答案，提供判断框架
- 通常双栏：可以考虑 / 先等一等
- 或者：适合 / 暂时不适合

---

### C15 State Map

**用途**: 不同状态下适合不同支持方式

**规则（Style Rule R26）**:
- 三阶段颜色编码：
  - 绿色 = 还来得及 / 可以介入
  - 红色 = 最高点 / 少做少说
  - 蓝色 = 恢复期 / 可以开始
- 每阶段：标签（颜色区分）+ 标题 + 说明

---

### C16 Flow Box

**用途**: 说明一个过程或路径如何发生

**规则**:
- 浅灰背景，有 flow-label 说明情境
- 步骤用 · 开始，用 ↓ 衔接
- 最终触发行：color: text-danger，font-weight 500
- 每个 Flow Box 只描述一个情境

---

### C17 Source Grid

**用途**: 多种来源的并列说明

**规则**:
- 2列 grid
- 每卡：Emoji + 标题 + 说明 + 信号（斜体小字）
- 通常 4–6 张卡

---

### C18 Judge Box

**用途**: 先判断，再支持（P002 核心组件）

**规则（Style Rule R25）**:
- 蓝色背景（bg-accent）
- 标题：「先判断，再支持」
- 可勾选列表，格式：□ [来源]？→ [对应支持方式]
- 这是 P002 的核心设计，以后行为、学校等路径可复用

---

### C19 Myth/Truth Grid

**用途**: 打破误解，建立正确认知

**规则**:
- 左栏：灰色，「常见说法」，正常字体
- 右栏：绿色，「研究告诉我们」，font-weight 500
- 每组 2–3 对
- 「研究告诉我们」不用「研究证明」

---

### C20 Reframe Box

**用途**: 划掉旧想法，换上新理解

**规则**:
- 灰色背景
- 旧想法：line-through，color: text-muted
- 新理解：font-weight 500，color: text-primary，15–16px

---

### C21 Conversation Starter

**用途**: 给家长可以直接改写的第一句话

**规则（Style Rule R13）**:
- 标签：「参考说法（可以用自己的话改写）」
- 内容：完整的一段话，真实自然，不像公文
- 不是模板，是示例
- 适用：所有涉及学校、医院、家人、专业人员的跨人沟通页

---

### C22 Four-Layer Framework

**用途**: 把复杂能力拆成 3–4 个层次

**规则（Style Rule R23）**:
- 每层：编号（蓝色圆点）+ 标题 + 说明 + 例子（斜体）
- 结尾句：「知道卡在哪里，才知道从哪里帮。」
- 适用：任何可以分解为多个发展层次的能力

---

### C23 Compare Grid

**用途**: 两种支持方式的效果对比

**规则**:
- 左栏：灰色，现有方式（中性，不否定）
- 右栏：蓝色，推荐方式或组合方式
- 每栏 3–5 条
- 不是「对 vs 错」，而是「单独 vs 组合」

---

### C24 Gap Box

**用途**: 两个视角的落差（家长 vs 学校 / 家长 vs 医生）

**规则**:
- 双栏：左栏已知，右栏看到的
- 底部：连接语，点出落差所在
- 中性语气，不指责任何一方

---

### C25 Path Reflection

**用途**: 路径最后一页，收束，让家长看见自己走过的路

**规则（Style Rule R20）**:
- 不是 Summary（不列知识点）
- 而是 Reflection（还原家长做过的每一个动作）
- 用「从…到…」或「每一次你…」的句式
- 结尾：给家长一个真实的认可，不是鼓励口号

---

### C26 Cross-path Link Box

**用途**: 两条 User Path 的正式交汇

**规则**:
- 浅灰背景，有清晰的 link-label
- 说明两条路径在此交汇的原因
- 提供进入另一条路径的入口
- 不强迫，给选择

---

### C27 Adjust Box

**用途**: 什么时候需要重新检视

**规则**:
- 黄色背景（bg-warning）
- 标题：「这些情况可以重新检视」/ 「这些情况可以先等等」
- 列举 3–5 个信号
- 结尾：「调整不是失败。」/ 「暂停不是放弃。」

---

### C28 Signal Card Grid

**用途**: 信号→回应的快速判断卡

**规则**:
- 2列 grid
- 每卡：s-label「看到这个」 + 行为描述 + 可能含义 + response（蓝色小字）
- 适合：学校老师、其他照顾者的快速参考

---

## 组件使用原则

**R09 One Page, One Outcome**
每页上线前检查：这页帮家长完成了什么？不是「介绍X」，而是「家长今天能做到X」。

**R10 5–7分钟阅读上限**
超出则拆页。家长在车上、等孩子、晚上11点看。

**R15 Permission Design**
允许告诉家长：可以暂停 / 可以慢一点 / 可以今天什么都不做。

**R16 Reason → Action**
困难处理页：原因 → 今天怎么办。不能只有解释。

**R17 Recovery Path**
Next Step 至少有一个「回到之前 / 重新开始」的选项。

---

## 新路径生产清单

从 P003 开始，每页生产前检查：

```
□ 确认 One Outcome（一句话）
□ 确认 One Moment（一个真实时刻）
□ 选择需要的组件（从本库选，不新建）
□ Today Box 门槛够低？
□ Evidence Box 用词正确？（研究发现，不是研究证明）
□ Professional Block 有「没有也不用担心」？
□ Next Step 有 Recovery 选项？
□ Closing 使用固定文字？
□ 阅读时间 < 7 分钟？
□ 组件风格与 P001/P002 一致？
```

