# Sprint 25B · Closure

**日期：** 2026-07-15
**状态：** Closed

---

## 完成内容

### 25B-1 · Library 信息架构
- `topics.json`：6 个 active topic 的 label 和 description 改为用户语言
- `series.json`：6 个 active series 的 label 和 description 改为用户语言
- Repository slug / id / series 引用全部保持不变

### 25B-2 · Topic 首页 + Series 页重构
- `[topicSlug].astro`：新增 KA 区块（先从这里开始），Series 下移（想深入了解）
- `[seriesSlug].astro`：内容顺序改为 KA → ET → EA，stats 改为用户语言，隐藏所有 Repository ID

### 25B-3 · 产品语言落地验证
- `/library/visual-supports`：KA 卡片出现在第一屏
- `/library/series/aac`：H1 变为"不会说话，不代表不能沟通"
- Series 页 ID（KA-000001、ET-000008 等）全部隐藏

---

## 核心变化

**之前：**
```
AAC 文献库
研究证据 / 证据解读 / 知识摘要
EA → ET → KA
```

**之后：**
```
不会说话，不代表不能沟通
先看这里 / 为什么 / 研究证据
KA → ET → EA
```

---

## 本次未完成（进入 Sprint 26 Backlog）

- 家长真实试读（P3）
- Library 首页 Search 联动
- Related Topics 横向连接

---

## 文件变更清单

| 文件 | 类型 | 变更 |
|------|------|------|
| `src/repository/library/topics.json` | 数据 | label + description |
| `src/repository/library/series.json` | 数据 | label + description |
| `src/pages/library/[topicSlug].astro` | 页面 | 新增 KA 区块，调整结构 |
| `src/pages/library/series/[seriesSlug].astro` | 页面 | 顺序 + stats + 隐藏 ID |

---

*Sprint 25B · Closed · 2026-07-15*
