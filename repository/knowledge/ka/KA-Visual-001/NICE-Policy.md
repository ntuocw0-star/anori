# NICE Content Policy

**文件类型：** Repository 正式治理文档
**路径：** `repository/governance/external-resource-policies/NICE-Policy.md`
**状态：** v1.0 · 已核实
**核实日期：** 2026-07-14
**信息来源：**
- `nice.org.uk/reusing-our-content`（更新至 2026-07-10）
- `nice.org.uk/reusing-our-content/use-of-our-content-internationally`
- `nice.org.uk/terms-and-conditions`
- `nice.org.uk/reusing-our-content/nice-uk-open-content-licence`

---

## 一、NICE 是什么

NICE（National Institute for Health and Care Excellence）是英国国家医疗质量与卓越研究所，隶属英国国家医疗服务体系（NHS）。其发布的指南、循证摘要与临床建议受 Crown Copyright 保护。

**在 Anori 中的定位：** 循证建议是什么（临床指南与证据摘要）

---

## 二、核心版权框架

NICE 内容受以下框架约束：

| 框架 | 适用范围 | 核心规则 |
|------|---------|---------|
| **NICE UK Open Content Licence** | 英国境内使用 | 免费，可自由使用，无需申请 |
| **NICE International Licence** | 英国境外使用（包括中国、香港、新加坡） | **须书面申请 + 支付授权费** |
| **Crown Copyright** | NICE 内容的底层版权归属 | 英国政府持有，NICE 代为管理 |

**Anori 的关键结论：Anori 属于国际使用场景（英国境外），适用 NICE International Licence。**

---

## 三、五个核心问题

### Q1：是否允许直接链接到 NICE 页面？

**✅ 允许，无需申请。**

链接属于正常网络行为，不受版权约束。Anori 可以在 Resource 页面直接提供指向 NICE 指南的链接。

**操作规则：** 链接须指向 NICE 官方页面，不得链接至镜像站或第三方转载版本。

---

### Q2：是否允许写摘要（Summary）？

**⚠️ 国际使用须申请。**

NICE 政策明确指出，英国境外的使用（个人研究与学习除外）须书面申请并支付费用。摘要属于"derivative use"，在国际场景下不免费。

**豁免情形：** 若 Anori 的内容仅供 Anori 内部人员研究使用（非对外发布），则可豁免。但任何对外发布的中文摘要或导读均需申请授权。

**操作规则：**
- Anori 内部研究笔记：✅ 无需申请
- 对外发布的中文摘要：⚠️ 须向 `reuseofcontent@nice.org.uk` 申请

---

### Q3：是否允许翻译全文？

**⚠️ 须申请，有条件允许。**

NICE 允许翻译，但须：
1. 提交申请（国际翻译须支付费用）
2. NICE 可以对翻译进行审校（proof checking）作为授权条件
3. 不得篡改内容

直接翻译 NICE 指南全文并公开发布，在未获授权前不可行。

---

### Q4：是否允许转载 PDF 或网页内容？

**❌ 不允许（国际场景）。**

NICE 条款明确：内容仅供个人研究与私用下载，不得公开分发或发布。镜像、转载、嵌入均需授权。

**Web scraping 明确禁止：** NICE 政策页面明确写明"Web scraping of our content from the NICE website is not permitted."

---

### Q5：NICE 内容是否可用于 AI 训练？

**❌ 明确禁止。**

NICE 政策原文：*"We do not licence or allow our content to be used to train AI models."*

Anori 不得将 NICE 内容用于任何模型训练目的。

---

## 四、Anori Strategy（操作策略）

| 操作 | 允许？ | 条件 |
|------|--------|------|
| 链接到 NICE 官方页面 | ✅ 允许 | 须链接官方 URL，不得链接镜像站 |
| 内部研究摘要（不对外发布）| ✅ 允许 | 不得公开发布 |
| 对外发布的中文摘要/导读 | ⚠️ 须申请 | 联系 reuseofcontent@nice.org.uk，国际使用须付费 |
| 中文全文翻译 | ⚠️ 须申请 | NICE 将进行审校；须付费 |
| 转载 PDF 或页面内容 | ❌ 不允许 | — |
| Web scraping | ❌ 明确禁止 | — |
| AI 训练 | ❌ 明确禁止 | — |

### Anori 推荐的默认策略

**对所有 NICE Resource Item，Anori 采用以下默认策略：**

1. **链接优先**：Resource 页面提供 NICE 官方 URL，鼓励用户直接访问原文
2. **不转载内容**：不在 Anori 平台复制任何 NICE 文本、图表或 PDF
3. **KA 独立撰写**：相关 KA（知识文章）由 Anori 基于公开证据独立撰写，不引用 NICE 原文段落
4. **申请授权（如需摘要）**：若未来有对外发布中文摘要的需求，须提前向 NICE 申请国际使用授权

### resource-items.json 字段规则

所有 NICE Resource Item 使用以下固定值：

```json
"reuse_status": "link_only",
"anori_effort": "link_only",
"translation_policy": "requires_permission",
"summary_policy": "requires_permission_for_international_use"
```

---

## 五、申请渠道

| 需求 | 联系方式 |
|------|---------|
| 国际使用授权（摘要/翻译/改编）| reuseofcontent@nice.org.uk |
| API 接入 | NICE Syndication API 申请表 |
| 投诉与异议 | david.coombs@nice.org.uk |

申请时须提供：姓名与联系方式、希望使用的具体内容、使用目的与方式。

---

## 六、与其他组织的对比

| 组织 | 版权框架 | 国际摘要 | 中文版 | Anori 主要工作 |
|------|---------|---------|--------|---------------|
| CDC | 美国联邦政府公有领域 / LTSAE: open_license | 自由使用 | 部分有 | 精选 + 直链 |
| WHO | CC BY-NC-SA 3.0 IGO | 允许（非商业，须署名）| 极少 | 中文导读 KA |
| **NICE** | **Crown Copyright / 国际须付费授权** | **须申请 + 付费** | **无** | **仅链接 + 独立 KA** |

---

## 七、版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-07-14 | 初始版本，Sprint 21C-2 核实完成 |

---

*NICE-Policy.md · Repository Governance · 2026-07-14*
*下次审阅建议：2027-07-14（或 NICE 政策更新时）*
