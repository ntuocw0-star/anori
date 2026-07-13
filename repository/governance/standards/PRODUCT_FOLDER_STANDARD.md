# Anori Product Folder Standard v1.0

## 每个 User Path 文件夹结构

```
PXXX/
├── README.md          ← 必须。路径总览，AI / 开发 / 自己先看这里
├── pages/
│   ├── journey.mdx    ← Journey 页
│   ├── u001.mdx       ← Understanding 页
│   ├── sup001.mdx     ← Support 页
│   ├── s001.mdx       ← Support+ 页（按需增加）
│   └── ...
├── repository/
│   └── index.md       ← 本路径调用的 Repository 条目清单
└── meta/
    ├── seo.json       ← 每页 title / description / keywords
    └── ai.json        ← AI 摘要 / structured data
```

## README.md 必填字段

```
Status          In Progress / Complete
One Outcome     帮助家长从「X」走到「Y」
One Sentence    一句话核心价值
Pages           页面清单（ID / Title / Type / Status）
Repository      调用的知识条目
Cross-domain    跨 Domain 连接（可 pending）
Version         语义版本号
Started/Completed Sprint + 日期
```

## 页面文件（.mdx）必填 Frontmatter

```yaml
---
id: s001
title: PECS 怎么开始？
type: support+          # journey / understanding / support / support+
path: P001
outcome: 今天做出第一张图片
moment: 第一次交换图片
reading_time: 5         # 分钟，R10 上限 7
repository:
  - INT-TECH-002
  - EA-TECH-001
version: 1.0
---
```

## meta/seo.json 结构

```json
{
  "pages": [
    {
      "id": "s001",
      "title": "PECS 怎么开始？| Anori",
      "description": "图片交换沟通系统（PECS）第一步——今天找一张图片就够了。",
      "keywords": ["PECS", "AAC", "不会说话", "图片沟通"]
    }
  ]
}
```

## meta/ai.json 结构

```json
{
  "path": "P001",
  "title": "孩子不会说话",
  "outcome": "帮助家长从不知道 AAC 走到今天开始使用",
  "pages": [
    {
      "id": "s001",
      "summary": "PECS 是图片交换沟通系统，适合完全不说话的孩子。第一步：找一张孩子最近最喜欢的东西的图片。",
      "action": "找一张图片",
      "evidence_level": "★★★★★"
    }
  ]
}
```

## 生产节奏（每条 User Path）

```
① 建立 PXXX/README.md（先填 Status / One Outcome / Pages 清单）
② 按顺序生产页面（journey → understanding → support → support+）
③ 每页完成后更新 README.md 中对应 Status
④ 路径完成后补全 meta/seo.json 和 meta/ai.json
⑤ 更新 README.md Status = Complete，填写 Version 和完成日期
```

## 版本规则

```
0.x   生产中
1.0   首次完整交付
1.x   内容迭代（不改结构）
2.0   结构调整（需重新评审）
```

## 命名规则

```
路径文件夹    P001, P002, P003 ...
页面文件      journey.mdx, u001.mdx, sup001.mdx, s001.mdx ...
图片资源      /assets/PXXX/
```
