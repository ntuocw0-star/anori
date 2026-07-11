# Anori Design System v1.0

> 知识导航网站的设计语言规范
> 版本：v1.0 · 2026年7月

---

## 核心哲学

**四个设计原则（不可妥协）**

1. **大量留白** — 不是为了高级，而是让家长喘口气
2. **一屏一个问题** — 不 overload，每屏只回答一个问题
3. **语言中心是孩子，不是疾病** — 从第一页到最后一页保持一致
4. **每屏都有下一步** — 不是结束，而是引导

---

## Token System

### 颜色

```
--ink:    #1A1A2E   深蓝黑，主文字
--ground: #F7F5F0   暖白，页面底色
--teal:   #2A7F7F   主调，行动与连接
--moss:   #4A7C59   辅调，证据与可信
--white:  #FFFFFF   卡片背景
```

### 字体

```
Display:  DM Serif Display（斜体可用，用于主标题和引言）
Body:     Inter（400 / 500 / 600，用于正文和标签）
```

### 字号层级

```
Hero H1:       clamp(34px, 5vw, 54px)  DM Serif Display
Section H2:    clamp(22px, 3vw, 30px)  DM Serif Display
Card Title:    14px / 600              Inter
Body:          15px / 400              Inter
Caption:       12–13px / 400          Inter
Label:         11px / 600 uppercase   Inter  letter-spacing: 1.6px
```

### 间距

```
Page padding:      40px（左右）
Section padding:   52–72px（上下）
Card padding:      20–22px
Card gap:          12–16px
Divider margin:    48px（上下）
```

### 圆角

```
Cards:     10px
Buttons:   6–8px
Pills:     20px（全圆角）
Signature bar: 2px（Concept Card 左侧竖线）
```

---

## 组件规范

### 1. Hero

**结构**
```
Domain Tag（全大写标签，teal色）
H1（DM Serif Display，斜体关键词用 teal）
Principle（副标题，1–2行，opacity .56）
CTA 按钮组
```

**按钮权重规则**
- 主按钮（我需要帮助）：实心 teal，padding 15px 32px，font-size 16px
- 副按钮（我想了解）：无边框纯文字链接，opacity .45
- 两者视觉权重差异显著，主按钮占绝对主导

**H1 写法规则**
- 主语永远是孩子的能力或参与，不是技术/疾病名称
- 关键动词用 em 标签（渲染为 teal 斜体）
- 最多两行

---

### 2. Before You Read 区块

**位置**：Hero 正下方，全宽内容之前

**样式**
```
背景：白色
左边框：3px solid --moss
圆角：0 10px 10px 0（仅右侧）
内边距：22px 28px
最大宽度：880px，居中
```

**内容规则**
- 引言（DM Serif Display，17px）：一句值得被记住的话
- 说明（Inter 13px，opacity .55）：陪伴语气，2行以内

---

### 3. Divider

```
height: 1px
background: rgba(26,26,46,.07)
margin: 48px 40px 0
```

**使用规则**：每个主要 Section 之间使用，不在 Hero 和 Before You Read 之间使用

---

### 4. Section Header

```
Label:    11px / 600 / uppercase / moss色 / letter-spacing 1.6px
Title:    H2（DM Serif Display）
Sub:      14px / opacity .52 / margin-bottom 32px
```

---

### 5. Question List（问题入口）

**这是全站最重要的组件，不可降级**

```
背景：白色
圆角：10px
边框：1px solid rgba(26,26,46,.07)
内边距：17px 22px
悬停：translateX(3px) + teal 阴影
箭头：→，teal色，opacity .65
```

**内容写法规则**
- 必须是家长会说的话，不是专业术语
- 每条问题最多一行
- 箭头固定在右侧
- 4–5条为宜，不超过6条

---

### 6. Concept Card（签名元素）

**左侧竖线是 Anori 全站最重要的视觉签名**

```
背景：白色
圆角：10px
边框：1px solid rgba(26,26,46,.07)
左侧竖线：4px / teal / border-radius 2px / margin-right 18px
悬停：translateX(4px) + teal 阴影
```

**内容结构**
```
概念名称    14px / 600 / ink色
描述        12px / opacity .56（客观知识）
暖色句子    12px / teal色 / italic（生活感，带温度）
```

**暖色句子规则**
- 必须有，是区分 Anori 和其他知识网站的关键
- 用家长视角写，不是专家视角
- 通常是"很多孩子……"或"不是……而是……"句式

---

### 7. Support Card

```
背景：白色
圆角：10px
边框：1px solid rgba(26,26,46,.07)
内边距：20px 18px
图标：emoji，20px，margin-bottom 9px
悬停：translateY(-3px) + 阴影
```

**标题写法规则**
- 不用技术缩写作为卡片主标题
- 用功能描述："辅助沟通（AAC）"而不是"AAC"
- 括号内可以注明专业术语

---

### 8. Journey Strip（绿色决策入口）

```
背景：--teal（实色）
圆角：14px
内边距：38px 40px
```

**文案规则**
- 标题永远是"不知道从哪里开始？"或类似陪伴语气
- 不用"Decision Journey"等系统术语
- Journey 按钮顶部有小标签（全大写，10px，opacity .6）

---

### 9. Related Domains

```
样式：虚线边框 pill，moss色，opacity .4
状态：全部"建设中"，上线后才实心显示
规则：没有上线的 Domain 绝不显示为可点击
```

---

### 10. Closing（陪伴区块）

**位置**：Related Domains 之后，Footer 之前

**结构**
```
分隔线：40px / 2px / teal / 居中
主句：DM Serif Display / 20px（"今天先到这里也没关系。"）
引导句：14px / opacity .55
选项卡：4张轻量卡片（见下）
结尾句：13px / opacity .42（"从一个问题开始就好。"）
```

**选项卡规则**
```
每张卡：
  圆点（6px / teal）+ 问题（14px）+ 一句行动引导
  悬停：白色背景
  点击：直接进入对应 Journey
  共4张，不超过4张
```

---

### 11. Footer

```
边框：1px solid rgba(26,26,46,.07)，顶部
内边距：24px 40px
文字：12px / opacity .38（知识库版本+日期）
链接：12px / teal / "了解证据来源 →"
```

**内容规则**
- 不写"来自X篇研究"
- 固定格式："本页内容依据国际研究证据持续更新。"
- 版本号格式：[Domain] v[x.x] · [年份][月份]

---

## 页面节奏规范

**每个 Domain Overview 的固定结构**

```
Nav（sticky）
Hero
Before You Read
─── Divider ───
问题入口（从这里开始）
─── Divider ───
核心概念（Concept Cards）
─── Divider ───
支持方式（Support Cards）
─── Divider ───
Journey Strip
─── Divider ───
相关领域
Closing（陪伴区块）
Footer
```

**规则**
- Section 之间统一用 Divider，不用其他分隔方式
- 不在页面中间使用向下箭头引导
- 每个 Section 只做一件事

---

## 语言规范

**家长语言检查清单**

✅ 应该出现的词：孩子、表达、参与、生活、帮助、支持、一步一步
❌ 不应该出现的词：患者、症状、障碍、治疗、ASD/ADHD（作为主标题）、技术缩写（作为一级标题）

**语气规则**
- 陪伴，不说教
- 肯定，不恐吓
- 具体，不模糊
- 孩子是主语，不是疾病

**句子长度**
- Hero H1：最多2行
- Concept Card 描述：最多2行
- 暖色句子：1行
- Before You Read 引言：1行
- 陪伴句（closing）：最多2行

---

## 设计禁忌

- ❌ 不在中间区域放向下箭头（Hero 之后不再使用）
- ❌ 不让未上线的 Domain 显示为可点击
- ❌ 不在一个屏幕内放超过一个主要 CTA
- ❌ 不用疾病名称作为页面主标题
- ❌ 不用数字量化证据（"7篇研究"）
- ❌ 不让 Support Card 标题只是技术缩写
- ❌ 不跳过 Closing 区块（是 Anori 人格的重要体现）

---

## 扩展规则

**新增 Domain 只需要做三件事**

1. 更新 Blueprint（填入对应 Repository IDs）
2. 更新 Page Metadata（domain / version / date）
3. 替换所有文字内容（问题、概念、支持方式）

**不需要修改**
- 颜色、字体、间距
- 组件结构
- 页面节奏
- 语言语气规范

---

*Anori Design System v1.0 · 建立于 Sprint 9 · 2026年7月*
