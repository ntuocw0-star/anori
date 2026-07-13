# Anori Original Resource Standard (ORS) v1.0

> **Every original Anori resource should be immediately understandable, immediately usable, and evidence-informed.**
>
> 每一份 Anori 原创资源，都应做到：打开即可理解、拿来即可使用、设计有据可依。

**Status:** Frozen · Sprint 20B-1
**Frozen date:** 2026-07-13
**Applies to:** All resources with `organization_id: null` in `resource-items.json`

---

## Chapter 1 · Purpose & Principles

### 1.1 为什么建立 ORS

Anori 原创资源（Original Resources）是由 Anori 团队自主创作、独立发布的可用工具。与外部资源（External Resources）不同，原创资源不受第三方版权约束，可以完整交付、自由修改、持续迭代。

ORS 的目的是确保：

- 每一份原创资源在制作前有明确的标准可循
- 不同资源之间的格式、字段、文件结构保持一致
- 团队成员和未来贡献者能够独立完成一份符合标准的资源

ORS 不是风格指南，而是**制作规范**。它回答的问题是：一份 Anori 原创资源，做到什么程度才算完成？

### 1.2 Anori 原创资源定位

原创资源属于产品三模块中的 **Resource 模块**：

> Resource = 使用（我今天可以带走什么？）

原创资源的服务对象是**家庭**，不是专业人员。它的设计目标是：

- 家长可以在没有专业培训的情况下独立使用
- 不需要购买任何软件或设备
- 可以打印、截图、转发，不受使用场景限制

### 1.3 非医疗建议声明（Mandatory Disclaimer）

每一份原创资源必须包含以下声明，不得省略：

> **This resource is for educational and informational purposes only. It is not a medical or therapeutic tool and does not replace professional assessment or advice. Always consult a qualified professional for your child's specific needs.**

中文版本（双语资源必须包含）：

> **本资源仅供教育与信息参考，不构成医疗或治疗建议，亦不替代专业评估或指导。请就您孩子的具体需求咨询合格的专业人员。**

---

## Chapter 2 · Resource Metadata

### 2.1 Metadata 字段完整列表

每一份原创资源在 `resource-items.json` 中必须包含以下字段：

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 格式：`RI-ANORI-XXXX`，四位数字，顺序递增 |
| `version` | `string` | 语义化版本号，初始为 `"1.0.0"` |
| `title` | `object` | 至少包含 `en`，中文资源包含 `zh-Hans` |
| `organization_id` | `null` | 原创资源固定为 `null` |
| `language_status` | `string` | 见 Chapter 2.3 |
| `reuse_status` | `string` | 原创资源固定为 `"open_license"` |
| `license` | `string` | 默认 `"CC BY 4.0"`，可单条覆盖 |
| `license_url` | `string` | 默认 `"https://creativecommons.org/licenses/by/4.0/"` |
| `verification_status` | `string` | 见 Chapter 6 |
| `target_age` | `object` | `{ "min": number, "max": number \| null }` |
| `audience` | `array` | 枚举：`parent` / `educator` / `therapist` / `child` |
| `printable` | `boolean` | 是否有打印版本 |
| `related_ka` | `array` | 关联 Knowledge Article ID 列表 |
| `related_ea` | `array` | 关联 Evidence Article ID 列表 |
| `related_path` | `array` | 关联 Path ID 列表 |
| `educational_framework` | `array` | 见 Chapter 4.2 |
| `file_package` | `object` | 见 Chapter 5 |
| `revision_history` | `array` | 见 Chapter 2.4 |
| `disclaimer` | `string` | 固定值 `"standard_v1"`，表示已包含 ORS 标准免责声明 |

### 2.2 License 规则

**默认许可证：CC BY 4.0**

Anori 原创资源默认采用 [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) 许可证。

使用者可以：
- 自由分享、复制、传播
- 修改、改编、在任何媒介使用
- 包括商业用途

条件：
- 必须署名 Anori，并注明许可证

**例外规则：**

单个资源可在 `license` 字段中覆盖默认值。覆盖须在资源 README.md 中注明原因。未来商业合作资源适用此例外，但须团队审批。

### 2.3 language_status 枚举（原创资源适用值）

| 值 | 含义 |
|----|------|
| `bilingual_zh_en` | 中英双语，两种语言均完整 |
| `chinese_primary` | 以简体中文为主，英文为辅助标注 |
| `english_only` | 仅英文 |

原创资源不使用 `pending_verification`，语言状态由团队在制作时直接确认。

### 2.4 revision_history 格式

```json
"revision_history": [
  {
    "version": "1.0.0",
    "date": "YYYY-MM-DD",
    "author": "string",
    "notes": "Initial release"
  }
]
```

---

## Chapter 3 · Design System

### 3.1 版式规格

每份 Printable 资源必须同时提供两种版式：

| 版式 | 尺寸 | 用途 |
|------|------|------|
| Print | A4（210 × 297 mm），3mm 出血 | 家庭打印、学校分发 |
| Mobile | 1080 × 1920 px（9:16） | 手机截图、即时分享 |

**通用排版原则：**
- 留白充足，内容区不超过版面 70%
- 所有可交互区域（填写框）边框清晰
- 圆角统一：8px（Print 换算后对应约 3mm）
- 不使用背景图案，保持打印友好

### 3.2 字体

不引入自定义字体，采用系统安全字体栈：

**中文：**
```
font-family: "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif;
```

**英文：**
```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
```

**字号层级（Print A4）：**

| 层级 | 字号 | 用途 |
|------|------|------|
| Heading 1 | 24pt | 资源标题 |
| Heading 2 | 16pt | 区块标题（如 "First" / "Then"） |
| Body | 12pt | 说明文字 |
| Caption | 9pt | 免责声明、版权信息 |

Mobile 版字号按 1.5× 比例缩放。

**字重：**
- 标题：Bold（700）
- 正文：Regular（400）
- 说明/辅助：Light（300）或 Regular

### 3.3 图标风格

**统一采用极简线条（Outline）风格。**

规范：
- 线条粗细：2px（Print 换算）
- 颜色：黑色（`#000000`）或高对比度深色
- 圆角端点（round linecap）
- 无填充色，或仅使用单色纯色填充（黑/白）
- 单个图标尺寸：Print 版 32×32pt，Mobile 版 64×64px

**禁止使用：**
- ❌ 卡通插画风格
- ❌ 真人照片
- ❌ 彩色写实图标
- ❌ 有版权的图标库（如 Font Awesome Pro）

**推荐来源（可商用 / 免费）：**
- [Heroicons](https://heroicons.com)（MIT License）
- [Lucide](https://lucide.dev)（ISC License）
- 团队自绘 SVG（优先）

### 3.4 色彩体系

**ORS v1.0 采用双色系（黑白优先）：**

| Token | 值 | 用途 |
|-------|----|------|
| `--color-ink` | `#1A1A1A` | 主要文字、图标 |
| `--color-surface` | `#FFFFFF` | 背景 |
| `--color-border` | `#333333` | 边框、分隔线 |
| `--color-fill-area` | `#F5F5F5` | 填写区域背景 |
| `--color-accent` | `#2563EB` | 强调色（仅 Mobile/Screen 版使用） |

**打印规则：** `--color-accent` 在打印版不使用，所有元素保持黑白。

**高对比度版本：**
- 所有文字与背景对比度 ≥ 4.5:1（WCAG AA）
- 边框线条粗细不低于 1.5px
- 填写区域与背景有可见区分

### 3.5 无障碍要求

| 要求 | 标准 |
|------|------|
| 颜色对比度 | WCAG 2.1 AA（≥ 4.5:1） |
| 不依赖颜色传递信息 | 所有信息必须有文字或图形替代 |
| 打印黑白可用 | 去除颜色后，资源功能完整 |
| 字体不低于 9pt | Caption 层级下限 |

---

## Chapter 4 · Educational Standard

### 4.1 Educational Purpose 声明

每一份原创资源必须在 README.md 中声明其教育目的：

- 这份资源的使用场景是什么？
- 它帮助家庭解决什么具体问题？
- 它不适用于哪些情况？

### 4.2 Evidence Framework

原创资源必须关联至少一个证据框架。ORS v1.0 认可的框架：

| Framework | 说明 |
|-----------|------|
| `visual_supports` | 视觉支持策略（Visual Supports） |
| `aac` | 辅助沟通（Augmentative and Alternative Communication） |
| `structured_teaching` | 结构化教学（TEACCH / Structured Teaching） |
| `positive_behaviour_support` | 正向行为支持（PBS） |
| `naturalistic_intervention` | 自然情境教学 |
| `parent_implemented` | 家长实施干预（Parent-implemented Intervention） |

**Framework 增长原则：** 新增 Framework 必须有至少两项原创资源需要复用，方可纳入 ORS。单一资源的特殊需求不构成新增理由。

字段在 `resource-items.json` 中记录为：
```json
"educational_framework": ["visual_supports", "structured_teaching"]
```

### 4.3 KA / EA 关联要求

- 每份原创资源**至少关联 1 个 KA**（Knowledge Article）
- 建议关联相关 EA（Evidence Article），但非强制
- 关联不得空置：如无对应 KA，须在发布前新建或标记缺口

### 4.4 免责声明执行

Chapter 1.3 的免责声明必须出现在：

1. 资源本身（PDF/PNG 的页脚或背面）
2. `README.md` 中
3. Resource 页面的展示卡片中（由页面模板统一处理）

---

## Chapter 5 · Packaging Standard

### 5.1 标准文件结构

每份原创资源交付时，必须包含以下目录结构：

```
RI-ANORI-XXXX/
├── README.md              # 资源说明、使用指南、免责声明
├── metadata.json          # 与 resource-items.json 同步的独立元数据文件
├── [resource-name].pdf    # Print 版（A4）
├── [resource-name]-mobile.png  # Mobile 版（1080×1920）
├── thumbnail.png          # 列表缩略图（400×300px）
├── preview.webp           # 预览图（800×600px，webp 压缩）
└── CHANGELOG.md           # 版本变更记录
```

**命名规则：**
- 文件名使用 kebab-case
- 不含空格、中文、特殊字符
- 示例：`first-then-card.pdf`、`first-then-card-mobile.png`

### 5.2 README.md 必含内容

```markdown
# [资源标题]

## 这份资源是什么
[1–2句说明]

## 适合谁使用
[目标受众]

## 如何使用
[步骤说明，不超过5步]

## 证据基础
[关联的 Framework 说明]

## 免责声明
[Chapter 1.3 标准声明]

## 许可证
[CC BY 4.0 声明 + 链接]
```

### 5.3 图片规格

| 文件 | 格式 | 尺寸 | 最大体积 |
|------|------|------|----------|
| Print PDF | PDF | A4 | 5MB |
| Mobile PNG | PNG | 1080×1920px | 2MB |
| Thumbnail | PNG | 400×300px | 200KB |
| Preview | WebP | 800×600px | 500KB |

### 5.4 metadata.json 格式

`metadata.json` 是 `resource-items.json` 对应条目的独立副本，供静态站点构建时读取：

```json
{
  "id": "RI-ANORI-XXXX",
  "version": "1.0.0",
  "schema_version": "ORS-v1.0",
  "generated_at": "YYYY-MM-DDTHH:mm:ssZ"
}
```

---

## Chapter 6 · Lifecycle

**适用范围说明：** 本 Lifecycle 仅适用于 `organization_id: null` 的 Anori Original Resources。External Resources 继续使用 `resource-items.json` 定义的验证状态（`url_verified`、`rights_verified` 等），两者互不混用。

### 6.1 状态定义

| 状态 | 含义 | 可对外发布？ |
|------|------|-------------|
| `draft` | 制作中，未完成 | ❌ |
| `internal_review` | 内容完成，团队审阅中 | ❌ |
| `qa` | 审阅通过，QA 校验中（格式、打印测试） | ❌ |
| `ready` | 全部通过，可发布 | ✅ |
| `deprecated` | 已下架，不再推荐使用 | ❌（保留存档） |

### 6.2 状态推进规则

**Draft → Internal Review**
- [ ] 所有 Metadata 字段填写完整
- [ ] 免责声明已包含（中英文）
- [ ] README.md 完整
- [ ] PDF 和 Mobile PNG 初稿完成

**Internal Review → QA**
- [ ] 内容准确性确认（无误导性表述）
- [ ] KA/EA 关联核实
- [ ] 免责声明位置正确
- [ ] 教育目的声明清晰

**QA → Ready**
- [ ] A4 打印测试通过（黑白打印可用）
- [ ] Mobile 版在手机屏幕显示测试通过
- [ ] 高对比度检查通过（WCAG AA）
- [ ] 文件体积符合 Chapter 5.3 规格
- [ ] thumbnail.png 和 preview.webp 生成完毕
- [ ] metadata.json 与 resource-items.json 同步

**Ready → Deprecated**
- 需注明下架原因
- 原文件保留，不删除
- `resource-items.json` 中 `verification_status` 更新为 `deprecated`

### 6.3 版本管理

采用语义化版本（Semantic Versioning）：

| 变更类型 | 版本递增 | 示例 |
|----------|----------|------|
| 内容更正（错别字、链接修复） | Patch | 1.0.0 → 1.0.1 |
| 内容更新（新增使用说明、更新免责声明） | Minor | 1.0.0 → 1.1.0 |
| 结构重设计（版式重做、教育框架调整） | Major | 1.0.0 → 2.0.0 |

每次版本递增必须更新 `CHANGELOG.md` 和 `revision_history`。

---

## Appendix · ORS 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-07-13 | 初始版本，Sprint 20B-1 冻结 |

---

*ORS v1.0 由 Anori 团队于 Sprint 20B-1 制定。修订须经团队审批，并递增 ORS 版本号。*
