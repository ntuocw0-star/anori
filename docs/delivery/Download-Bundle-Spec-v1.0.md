# Download Bundle Spec v1.0
## Knowledge Bundle

**Sprint 15 · Phase 0**
**状态：** 冻结

---

## 命名

旧名：Download Bundle
正式名：**Knowledge Bundle**

原因：Bundle 强调的是"一套完整的知识交付"，而不只是"下载一个文件"。

---

## Bundle 组成

每个 KA 对应一个 Bundle，包含以下格式：

### ① Reading Edition（阅读版）
**格式：** 网页 `/knowledge/ka-000001/reading`
**内容：** KA 全文，针对阅读体验优化（字体放大、段落间距、去掉导航）
**适合：** 在家安静阅读，截图保存
**实现：** Astro 新增 reading 路由，CSS 媒体查询适配打印

### ② Official PDF
**格式：** `.pdf` 下载
**内容：** KA 正式版，含 Anori logo、页码、证据来源
**适合：** 发给专业人员、保存归档
**实现：** 服务端 PDF 生成（puppeteer 或 @astrojs/pdf）

### ③ One-page Summary（一页总结）
**格式：** `.pdf` 或 `.png` 下载，A4 单页
**内容：** 核心结论（一句话）+ 3条关键发现 + 今天可以做什么（1件事）
**适合：** 快速分享、贴在家里
**实现：** 固定模板，从 KA 字段自动提取

### ④ Parent Guide（家长指南）
**格式：** `.pdf` 下载，2–4页
**内容：** One-page Summary 的扩展版，含完整的行动步骤和资源列表
**适合：** 打印后放在家里、带去见专业人员
**实现：** 从 KA 的 what_you_can_do + seek_help_if 字段生成

### ⑤ Printable Version（打印版）
**格式：** 浏览器打印 CSS
**内容：** KA 正文，去掉 UI 元素，优化打印排版
**适合：** 直接用浏览器打印，无需下载
**实现：** `@media print` CSS，`/knowledge/ka-000001?print=1`

---

## One-page Summary 模板（最小可用版）

```
┌──────────────────────────────────────────────────────┐
│  [Anori Logo]                    [KA-000001]         │
│                                                      │
│  为什么很多家长坚持不下去？                              │
│                                                      │
│  核心结论                                             │
│  不是意志力的问题，而是系统给的支撑不够。                  │
│                                                      │
│  研究发现                                             │
│  ✓ 只有约 39% 的 AAC 系统被使用超过一年                │
│  ✓ 服务断裂、家校脱节、角色过载是三大主因                 │
│  ✓ 同伴支持是最一致的促进因素                           │
│                                                      │
│  今天可以做一件事                                       │
│  问给孩子评估的专业人员：接下来三个月，谁会持续跟进？       │
│                                                      │
│  证据来源                                             │
│  Berenguer et al. (2022) · 19项研究 · 297位家长       │
│                                                      │
│  anori.hk/knowledge/ka-000001                       │
└──────────────────────────────────────────────────────┘
```

---

## 从 KA 字段到 Bundle 的映射

| Bundle 字段 | KA 字段来源 |
|------------|-----------|
| 标题 | `title` |
| 核心结论 | `one_sentence` |
| 关键发现 | `key_findings[0..2]` |
| 今天可以做 | `what_you_can_do[0]` |
| 证据来源 | `evidence_note` |
| 不要做 | `what_to_avoid[0]`（Parent Guide 用）|
| 何时寻求帮助 | `seek_help_if`（Parent Guide 用）|

---

## 实现顺序

**Sprint 15：**
1. One-page Summary（HTML 模板 → 浏览器打印 → 截图下载）
2. Printable Version（CSS `@media print`）
3. KA 页面新增 Bundle 下载区块

**Sprint 16+：**
4. Official PDF（puppeteer 或服务端生成）
5. Reading Edition（独立路由）
6. Parent Guide（多页 PDF）

---

## KA 页面 Bundle 区块设计

```
──────────────────────────────
下载这篇文章

📄 一页总结（PNG）
📄 打印版（在浏览器打印）
📄 家长指南（PDF）[Sprint 16]
📄 完整 PDF [Sprint 16]
──────────────────────────────
```

---

*Download Bundle Spec v1.0 · 冻结 · 2026-07-10*
