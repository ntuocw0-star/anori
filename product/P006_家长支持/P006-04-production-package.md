# P006 · 04 — Production Package (Skeleton)
## Caregiver Support / 家长支持

**Sprint 14 · 补档任务**
**状态：** Skeleton — 结构定义，正文待填

---

## problems.json — 新增 PRB

```json
{
  "id": "PRB-P006-001",
  "title": "我已经撑不住了，但我不能停下来",
  "category": "caregiver",
  "aliases": [
    "我快撑不住了",
    "我太累了",
    "我感觉被掏空了",
    "我不知道还能坚持多久",
    "我整个人都垮了",
    "我每天都在硬撑",
    "我不敢休息",
    "照顾孩子很累怎么办"
  ],
  "search_reason": "如果你已经感到精力耗尽、撑不住，这里整理了这种处境下真正有帮助的方向。",
  "related_path": "p006",
  "related_page": "s001",
  "tags": ["家长", "倦怠", "疲惫", "照顾者"]
},
{
  "id": "PRB-P006-002",
  "title": "身边没有人真的懂，我不知道能跟谁说",
  "category": "caregiver",
  "aliases": [
    "没有人理解我",
    "我一个人在面对这一切",
    "我不敢说说了也没用",
    "我感觉很孤单",
    "身边没有人懂",
    "家人不理解",
    "朋友不懂"
  ],
  "search_reason": "如果你感到没有人理解，这里整理了孤立感从哪里来，以及如何找到真正的连接。",
  "related_path": "p006",
  "related_page": "s002",
  "tags": ["家长", "孤立", "支持", "照顾者"]
},
{
  "id": "PRB-P006-003",
  "title": "我试了很多，还是不知道接下来该怎么走",
  "category": "caregiver",
  "aliases": [
    "我不知道该怎么办",
    "我不知道接下来要做什么",
    "我不知道去哪里找帮助",
    "我试了很多方法都没用",
    "没有人告诉我下一步",
    "我感觉迷失了"
  ],
  "search_reason": "如果你感到方向迷失，这里帮你找到下一步可以做的事。",
  "related_path": "p006",
  "related_page": "s003",
  "tags": ["家长", "方向", "下一步", "照顾者"]
},
{
  "id": "PRB-P006-004",
  "title": "家里人不理解，甚至不相信孩子有问题",
  "category": "caregiver",
  "aliases": [
    "家里人不支持",
    "另一半不相信孩子有问题",
    "祖父母觉得没事",
    "家里意见不一致",
    "家人觉得我大惊小怪",
    "我一个人在做所有的事",
    "没有人帮我分担"
  ],
  "search_reason": "如果家庭内部意见不一致，这里整理了怎么面对这种处境。",
  "related_path": "p006",
  "related_page": "s004",
  "tags": ["家长", "家庭", "支持", "分歧"]
},
{
  "id": "PRB-P006-005",
  "title": "我一直觉得是我的错，不管别人怎么说",
  "category": "caregiver",
  "aliases": [
    "都是我的错",
    "是不是我养育方式有问题",
    "我一定哪里做错了",
    "我是不是不够好的妈妈爸爸",
    "我对孩子发火然后很内疚",
    "我恨自己发那么大的火"
  ],
  "search_reason": "如果你一直在自责，这里帮你把重量放回到正确的位置。",
  "related_path": "p006",
  "related_page": "s005",
  "tags": ["家长", "自责", "内疚", "照顾者"]
},
{
  "id": "PRB-P006-006",
  "title": "我知道应该照顾自己，但不知道怎么做",
  "category": "caregiver",
  "aliases": [
    "我不敢休息",
    "怎么照顾自己",
    "喘息服务是什么",
    "我需要心理咨询吗",
    "我可以把孩子交给别人吗",
    "我去找帮助是不是太夸张了"
  ],
  "search_reason": "如果你不确定自己有没有资格照顾自己，这里是给你的。",
  "related_path": "p006",
  "related_page": "s005",
  "tags": ["家长", "自我照顾", "喘息", "照顾者"]
}
```

---

## path-content.json — P006 骨架

```json
"p006": {
  "journey": {
    "hero_title": "你已经在做一件很难的事",
    "hero_companion": "这里不是要告诉你怎么做得更好——而是帮你看见，你需要支持，而且可以去获得支持。",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】",
    "what_you_might_feel": ["待填"],
    "support_grid": {
      "title": "【待填】",
      "cards": []
    }
  },
  "u001": {
    "hero_title": "研究怎么说",
    "hero_companion": "照顾特殊需求孩子的家长，真实面对着什么",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】",
    "evidence_box": {
      "stars": 5,
      "headline": "【待填：照顾者倦怠的研究核心发现】",
      "points": ["待填"],
      "emotion_translation": "【待填】"
    }
  },
  "sup001": {
    "hero_title": "专业支持在哪里",
    "hero_companion": "心理咨询、社工、喘息服务——怎么找，什么时候去，第一次说什么",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】"
  },
  "s001": {
    "hero_title": "我快撑不住了",
    "hero_companion": "认识照顾者倦怠——不是脆弱，是处境",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】",
    "evidence_box": {
      "stars": 5,
      "headline": "【待填】",
      "points": ["待填"],
      "emotion_translation": "【待填】"
    }
  },
  "s002": {
    "hero_title": "家里没有支持",
    "hero_companion": "当身边的人不理解，甚至不相信",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】"
  },
  "s003": {
    "hero_title": "我不知道下一步",
    "hero_companion": "方向感不是应该有的，而是需要被建立的",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】"
  },
  "s004": {
    "hero_title": "和另一半谈",
    "hero_companion": "当家里意见不一致——怎么开始那个对话",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】"
  },
  "s005": {
    "hero_title": "把重量放回正确的位置",
    "hero_companion": "关于自责，关于照顾自己",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】"
  },
  "s006": {
    "hero_title": "从这里继续",
    "hero_companion": "你走过了这条路——接下来是什么",
    "reframe": "【待填】",
    "today_box": "【待填】",
    "closing": "【待填】",
    "path_reflection": {
      "title": "【待填】",
      "steps": ["待填"]
    },
    "cross_path": {
      "label": "【待填】",
      "path": "p007",
      "title": "感觉处理",
      "desc": "【待填】",
      "href": "/paths/p007/journey"
    }
  }
}
```

---

## SEO 元数据骨架

```json
"p006": {
  "journey": {
    "title": "我已经撑不住了——给照顾特殊孩子家长的支持 | Anori",
    "description": "【待填，60字以内，家长语言】"
  },
  "u001": {
    "title": "照顾者研究：家长真实面对着什么 | Anori",
    "description": "【待填】"
  },
  "sup001": {
    "title": "专业支持在哪里——心理咨询与喘息服务 | Anori",
    "description": "【待填】"
  },
  "s001": {
    "title": "我快撑不住了——认识照顾者倦怠 | Anori",
    "description": "【待填】"
  },
  "s002": {
    "title": "家里没有支持——当身边人不理解 | Anori",
    "description": "【待填】"
  },
  "s003": {
    "title": "我不知道下一步——找到方向感 | Anori",
    "description": "【待填】"
  },
  "s004": {
    "title": "和另一半谈——家庭分歧怎么面对 | Anori",
    "description": "【待填】"
  },
  "s005": {
    "title": "自责与照顾自己——把重量放对位置 | Anori",
    "description": "【待填】"
  },
  "s006": {
    "title": "从这里继续——P006 家长支持 | Anori",
    "description": "【待填】"
  }
}
```

---

## Cross-path 规划

| 来源 | 目标 | 位置 |
|------|------|------|
| P006/s006 | P001/journey | s006 cross_path 区块 |
| P006/s006 | P007/journey | s006 next_steps |
| P001/s006 | P006/journey | 已完成 ✅ |
| P002/s005 | P006/journey | 待添加 |
| P003/s005 | P006/journey | 待添加 |
| P004/s005 | P006/journey | 待添加 |
| P007/s005 | P006/journey | 待添加（P007 建成后） |

---

## Knowledge Mapping

| KA | 关联 P006 页面 | 接入方式 |
|----|-------------|---------|
| KA-000001（为什么家长坚持不下去） | s001 | evidence_box ka_link |
| KA-000002（家校怎么配合） | s003 · s004 | evidence_box ka_link |
| KA-000003（待建：家长同伴支持） | journey · s002 | evidence_box ka_link |

---

## Evidence Mapping

| EA | 关联 P006 页面 | 接入层级 |
|----|-------------|---------|
| EA-000001（Berenguer 2022 家长体验） | u001 · s001 | ET → KA → evidence_box |
| EA-000002（Kim & Soto 2024 家校协作） | s002 · s004 | ET → KA → evidence_box |
| EA-Caregiver-001（待建：照顾者倦怠研究） | u001 · s001 | 未来 EA |

---

*P006 · 04-Production-Package · Skeleton · 2026-07-10*
*下一步：填写正文内容（journey 到 s006）*
