# Anori Content Layer — 规范 v1.0

**建立于：** Sprint 14 Phase C
**适用范围：** P007 及之后所有新路径

---

## 设计原则

内容层（`content/paths/`）与数据层（`path-content.json`）分离。

```
content/paths/p007/journey.md   ← 编辑层（人类可读，长期维护）
        ↓
path-content.json               ← 数据层（机器消费，自动生成）
        ↓
Astro 页面                       ← 展示层
```

同一份内容可以生成：
- 网页（当前）
- 下载 PDF（Sprint 15）
- 打印版
- 家长版

---

## Markdown 文件结构

每个页面一个 `.md` 文件，使用 YAML frontmatter 存储字段，正文存储长文本。

### 标准模板

```markdown
---
page: journey                    # 页面 ID
path: p007                       # 路径 ID
hero_title: "标题文字"
hero_companion: "副标题文字"
today_box: "今天可以做的一件事"
closing: "结尾语"
---

## reframe

认知重构文字（支持多行）

## parent_message

给家长的直接留言（可选）

## evidence_box

headline: "研究发现核心结论"
stars: 5
points:
  - 第一条发现
  - 第二条发现
  - 第三条发现
emotion_translation: "情绪转译文字"
ka_link:
  id: KA-000001
  label: "深入阅读文章标题"
  href: /knowledge/ka-000001

## steps

1. **步骤标题**
   说明文字
   *例：具体示例*

2. **步骤标题**
   说明文字
   *例：具体示例*

## life_moments

- emoji: 🌅
  moment: 场景名称
  how: 具体做法说明

## what_you_might_feel

- 家长可能感受 1
- 家长可能感受 2

## next_steps

- page: s001
  label: 下一步标签
  desc: 补充说明

- href: /paths/p006/journey
  label: 跨路径标签
  desc: 补充说明

## cross_path

label: 区块标签
path: p002
title: 目标路径标题
desc: 跳转说明
href: /paths/p002/journey

## path_reflection

title: 回顾标题
steps:
  - 洞察 1
  - 洞察 2
  - 洞察 3
```

---

## 字段对应关系

| Markdown 位置 | JSON 字段 | 类型 |
|-------------|---------|------|
| frontmatter.hero_title | hero_title | string |
| frontmatter.hero_companion | hero_companion | string |
| frontmatter.today_box | today_box | string |
| frontmatter.closing | closing | string |
| ## reframe 正文 | reframe | string |
| ## parent_message 正文 | parent_message.text | string |
| ## evidence_box YAML | evidence_box | EvidenceBoxContent |
| ## steps 列表 | steps | Step[] |
| ## life_moments 列表 | life_moments | LifeMoment[] |
| ## what_you_might_feel 列表 | what_you_might_feel | string[] |
| ## next_steps 列表 | next_steps | NextStep[] |
| ## cross_path YAML | cross_path | CrossPathContent |
| ## path_reflection YAML | path_reflection | PathReflectionContent |

---

## 文件命名规范

```
content/paths/{path_id}/{page_id}.md

例：
content/paths/p007/journey.md
content/paths/p007/u001.md
content/paths/p007/s001.md
```

---

*Content Layer Spec v1.0 · 2026-07-10*
