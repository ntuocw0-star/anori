# P007 · 04 — Production Package
## Sensory Processing / 感觉处理

**Sprint 14 Phase B-3**
**状态：** Skeleton — 结构定义完成，正文待填
**上游：** Problem Universe · Problem Cluster · Journey Blueprint

---

## ① problems.json — 新增 PRB

```json
{
  "id": "PRB-P007-001",
  "title": "剪头发、刷牙、洗头，每次都像打仗",
  "category": "sensory",
  "aliases": [
    "孩子不让剪头发",
    "剪头发崩溃",
    "剪头发要按住",
    "洗头每次哭",
    "刷牙是噩梦",
    "不让剪指甲",
    "理发店进不去",
    "洗澡时候哭",
    "日常护理很难"
  ],
  "search_reason": "如果孩子的日常护理每次都是挣扎，这里整理了为什么会这样，以及今天可以做什么。",
  "related_path": "p007",
  "related_page": "s002",
  "tags": ["感觉", "触觉", "日常护理", "剪头发", "刷牙"]
},
{
  "id": "PRB-P007-002",
  "title": "普通的声音，孩子反应像是在受苦",
  "category": "sensory",
  "aliases": [
    "怕吸尘器",
    "怕吹风机",
    "冲马桶会尖叫",
    "怕铃声",
    "去商场会崩溃",
    "怕气球爆",
    "一有响声就捂耳朵",
    "学校铃声很难",
    "餐厅太吵坐不住",
    "怕雷声"
  ],
  "search_reason": "如果孩子对普通的声音反应很大，这里解释了为什么，以及什么有帮助。",
  "related_path": "p007",
  "related_page": "s001",
  "tags": ["感觉", "听觉", "声音", "捂耳朵", "崩溃"]
},
{
  "id": "PRB-P007-003",
  "title": "孩子一直转圈、跑跳、停不下来",
  "category": "sensory",
  "aliases": [
    "一直转圈转不晕",
    "停不下来",
    "喜欢跳一直跳",
    "一直蹦蹦跳跳",
    "喜欢被甩被抛",
    "是多动症吗",
    "坐不住",
    "一直运动停不下来"
  ],
  "search_reason": "如果孩子一直在动、停不下来，这里帮你理解这背后是什么。",
  "related_path": "p007",
  "related_page": "s003",
  "tags": ["感觉", "前庭", "运动", "感觉寻求", "停不下来"]
},
{
  "id": "PRB-P007-004",
  "title": "孩子一直咬东西、闻东西、把东西放嘴里",
  "category": "sensory",
  "aliases": [
    "咬衣服",
    "咬手",
    "咬铅笔",
    "把东西放嘴里",
    "一直闻东西",
    "闻人",
    "口欲期没过",
    "走路要摸墙",
    "一直摸别人"
  ],
  "search_reason": "如果孩子一直咬东西或闻东西，这里解释了这是什么，以及什么可以帮助他。",
  "related_path": "p007",
  "related_page": "s003",
  "tags": ["感觉", "口腔", "本体觉", "感觉寻求", "咬"]
},
{
  "id": "PRB-P007-005",
  "title": "孩子不知道自己有多大力气，经常撞人或弄坏东西",
  "category": "sensory",
  "aliases": [
    "用力太大",
    "抱人太用力",
    "写字把纸弄破",
    "经常撞到门框",
    "经常撞到东西",
    "推同学不是故意的",
    "不知道轻重",
    "开关门很大声",
    "走路很响"
  ],
  "search_reason": "如果孩子经常用力过大或撞到东西，这里解释了为什么，以及什么有帮助。",
  "related_path": "p007",
  "related_page": "s003",
  "tags": ["感觉", "本体觉", "力道", "撞", "推人"]
},
{
  "id": "PRB-P007-006",
  "title": "一到人多嘈杂的地方，孩子就崩溃",
  "category": "sensory",
  "aliases": [
    "超市里总会崩溃",
    "生日派对哭着跑出来",
    "学校餐厅吃不下",
    "医院诊所很难配合",
    "游泳课换衣服崩溃",
    "节假日不想出门",
    "人多地方走一会儿就不行",
    "突然的变化无法接受",
    "学校回来就崩溃"
  ],
  "search_reason": "如果孩子在复杂环境里特别容易崩溃，这里帮你理解发生了什么。",
  "related_path": "p007",
  "related_page": "s004",
  "tags": ["感觉", "环境", "过载", "崩溃", "商场", "学校"]
}
```

---

## ② path-content.json — P007 骨架

```json
"p007": {
  "journey": {
    "hero_title": "也许这些事情看起来毫无关联",
    "hero_companion": "剪头发崩溃、怕吸尘器、挑食、一直转圈——在很多孩子身上，它们可能来自同一种感觉处理方式。",
    "reframe": "【待填：帮家长从「这是行为/性格问题」转向「这是神经系统的处理方式」】",
    "today_box": "【待填：今天可以做的一件具体的事】",
    "closing": "【待填】",
    "what_you_might_feel": [
      "我不知道这是不是感统问题",
      "我不知道该不该去评估",
      "我担心是不是我做错了什么",
      "我已经试了很多方法，还是不知道怎么帮他"
    ],
    "path_map": [
      { "step": 1, "label": "理解感觉处理", "page": "u001", "desc": "感觉处理怎么运作" },
      { "step": 2, "label": "专业支持", "page": "sup001", "desc": "OT 是什么，怎么找" },
      { "step": 3, "label": "声音太吵", "page": "s001", "desc": "听觉敏感的孩子" },
      { "step": 4, "label": "日常护理", "page": "s002", "desc": "剪头发、洗头、刷牙" },
      { "step": 5, "label": "感觉寻求", "page": "s003", "desc": "转圈、咬、摸、撞" },
      { "step": 6, "label": "公共场合", "page": "s004", "desc": "学校和复杂环境" },
      { "step": 7, "label": "家庭日常", "page": "s005", "desc": "日常调整策略" },
      { "step": 8, "label": "接下来", "page": "s006", "desc": "从这里继续" }
    ],
    "support_grid": {
      "label": "从你最担心的那件事开始",
      "title": "【待填：引导家长选择最相关的入口】",
      "cards": [
        { "icon": "✂️", "title": "日常护理困难", "desc": "剪头发、刷牙、洗头", "page": "s002" },
        { "icon": "🔊", "title": "声音反应很大", "desc": "怕吸尘器、捂耳朵", "page": "s001" },
        { "icon": "🌀", "title": "一直在动", "desc": "转圈、跳、咬东西", "page": "s003" },
        { "icon": "🏫", "title": "公共场合崩溃", "desc": "商场、学校、派对", "page": "s004" },
        { "icon": "👊", "title": "不知道力道", "desc": "撞东西、推人", "page": "s003" },
        { "icon": "🧠", "title": "先了解原理", "desc": "感觉处理怎么运作", "page": "u001" }
      ]
    }
  },
  "u001": {
    "hero_title": "感觉处理怎么运作",
    "hero_companion": "孩子的大脑在做什么——用不用专业词汇都能理解的解释",
    "reframe": "【待填：帮家长理解感觉处理不是感官器官的问题，而是大脑处理方式的差异】",
    "today_box": "【待填】",
    "closing": "【待填】",
    "evidence_box": {
      "stars": 5,
      "headline": "【待填：感觉处理差异的神经科学依据】",
      "points": [
        "【待填：感觉处理差异的存在有神经科学证据】",
        "【待填：OT 干预的效果研究发现】",
        "【待填：早期支持的重要性】"
      ],
      "emotion_translation": "【待填：研究语言 → 家长语言的转译】"
    },
    "what_is_aac": null
  },
  "sup001": {
    "hero_title": "OT 是什么，怎么找",
    "hero_companion": "职能治疗师（OT）是感觉处理评估和支持的主要专业入口",
    "reframe": "【待填：去找 OT 不是说孩子有严重问题，而是获得专业的感觉地图】",
    "today_box": "【待填：今天可以做的第一件事：搜索 OT、打一个电话】",
    "closing": "【待填】",
    "professional_block": {
      "if_have": "【待填：如果已经有 OT，下一步可以问什么】",
      "if_not": "【待填：如果还没有 OT，怎么开始找】"
    }
  },
  "s001": {
    "hero_title": "声音对他来说真的更响",
    "hero_companion": "听觉敏感的孩子——不是胆小，是大脑处理方式不同",
    "reframe": "【待填：从「孩子胆子太小」到「他的大脑接收声音的方式更强烈」】",
    "today_box": "【待填：今天可以为声音敏感的孩子做一件具体的事】",
    "closing": "【待填】",
    "evidence_box": {
      "stars": 5,
      "headline": "【待填：听觉处理差异的研究发现】",
      "points": ["【待填】", "【待填】", "【待填】"],
      "emotion_translation": "【待填】"
    },
    "steps": [
      { "number": 1, "title": "识别触发声音", "body": "【待填】", "example": "【待填】" },
      { "number": 2, "title": "创造可预测的声音环境", "body": "【待填】", "example": "【待填】" },
      { "number": 3, "title": "逐步扩大耐受范围", "body": "【待填】", "example": "【待填】" }
    ],
    "professional_block": {
      "if_have": "【待填】",
      "if_not": "【待填】"
    },
    "next_steps": [
      { "page": "u001", "label": "了解感觉处理原理", "desc": "理解为什么声音对他来说更响" },
      { "page": "s004", "label": "公共场合怎么办", "desc": "嘈杂环境的实际策略" },
      { "page": "sup001", "label": "找 OT 评估", "desc": "专业的听觉处理评估" }
    ]
  },
  "s002": {
    "hero_title": "日常护理为什么这么难",
    "hero_companion": "剪头发、洗头、刷牙——这不是他在故意，是触觉让他真的不舒服",
    "reframe": "【待填：从「孩子故意不配合」到「触觉对他来说是真实的不适」】",
    "today_box": "【待填：今天可以在日常护理上做一件小调整】",
    "closing": "【待填】",
    "steps": [
      { "number": 1, "title": "提前告知和预告", "body": "【待填】", "example": "【待填】" },
      { "number": 2, "title": "让孩子有控制感", "body": "【待填】", "example": "【待填】" },
      { "number": 3, "title": "调整工具和环境", "body": "【待填】", "example": "【待填】" },
      { "number": 4, "title": "建立固定的顺序", "body": "【待填】", "example": "【待填】" }
    ],
    "professional_block": {
      "if_have": "【待填】",
      "if_not": "【待填】"
    },
    "next_steps": [
      { "page": "s005", "label": "家庭日常调整", "desc": "更多日常场景的策略" },
      { "page": "sup001", "label": "OT 可以帮什么", "desc": "触觉脱敏的专业支持" }
    ]
  },
  "s003": {
    "hero_title": "他的身体在找它需要的东西",
    "hero_companion": "转圈、咬东西、一直摸——这是感觉寻求，不是坏习惯",
    "reframe": "【待填：从「坏习惯」到「身体在自己找需要的感觉输入」】",
    "today_box": "【待填：今天可以为感觉寻求的孩子提供一个安全的替代出口】",
    "closing": "【待填】",
    "steps": [
      { "number": 1, "title": "识别他在寻求什么类型的输入", "body": "【待填】", "example": "【待填】" },
      { "number": 2, "title": "提供合适的替代出口", "body": "【待填】", "example": "【待填】" },
      { "number": 3, "title": "在日常里建立感觉饮食", "body": "【待填】", "example": "【待填】" }
    ],
    "professional_block": {
      "if_have": "【待填】",
      "if_not": "【待填】"
    },
    "next_steps": [
      { "page": "u001", "label": "了解前庭和本体觉", "desc": "理解这些感觉寻求背后的系统" },
      { "page": "s005", "label": "家庭日常怎么调整", "desc": "在日常里整合感觉支持" },
      { "page": "sup001", "label": "找 OT 评估", "desc": "专业的感觉需求评估" }
    ]
  },
  "s004": {
    "hero_title": "人多嘈杂的地方，他的系统装不下",
    "hero_companion": "公共场合崩溃——不是任性，是感觉过载",
    "reframe": "【待填：从「孩子在公共场合故意出丑」到「他的神经系统在那个环境里真的超载了」】",
    "today_box": "【待填：今天去一个公共场合前可以做一件准备】",
    "closing": "【待填】",
    "steps": [
      { "number": 1, "title": "在进入前做感觉准备", "body": "【待填】", "example": "【待填】" },
      { "number": 2, "title": "建立离开信号和计划", "body": "【待填】", "example": "【待填】" },
      { "number": 3, "title": "缩短时间，逐步延长", "body": "【待填】", "example": "【待填】" },
      { "number": 4, "title": "在学校建立低感觉避风所", "body": "【待填】", "example": "【待填】" }
    ],
    "professional_block": {
      "if_have": "【待填】",
      "if_not": "【待填】"
    },
    "cross_path": {
      "label": "感觉过载也影响情绪",
      "path": "p002",
      "title": "情绪与行为",
      "desc": "如果孩子在环境崩溃后情绪也很难调节，P002 有更多支持",
      "href": "/paths/p002/journey"
    },
    "next_steps": [
      { "page": "s001", "label": "声音是主要触发", "desc": "听觉敏感的专项支持" },
      { "page": "s005", "label": "日常调整策略", "desc": "家庭和学校的整体方案" }
    ]
  },
  "s005": {
    "hero_title": "家庭日常怎么调整",
    "hero_companion": "不需要一次改变所有事情——从一件事开始",
    "reframe": "【待填：日常的小调整是感觉支持最有效的方式，不是让孩子「克服」它】",
    "today_box": "【待填：今天选一个最容易开始的日常调整】",
    "closing": "【待填】",
    "life_moments": [
      { "emoji": "🌅", "moment": "早晨起床和出门", "how": "【待填：感觉支持的早晨流程】" },
      { "emoji": "🍽️", "moment": "吃饭", "how": "【待填：进食的感觉支持】" },
      { "emoji": "🏫", "moment": "上学和接孩子", "how": "【待填：过渡时期的感觉支持】" },
      { "emoji": "🛁", "moment": "洗澡和护理", "how": "【待填：日常护理的感觉支持】" },
      { "emoji": "🌙", "moment": "入睡", "how": "【待填：睡前的感觉支持策略】" }
    ],
    "professional_block": {
      "if_have": "【待填】",
      "if_not": "【待填】"
    },
    "parent_message": {
      "label": "给你的话",
      "text": "【待填：给家长的直接留言——照顾感觉敏感的孩子很消耗，你也需要支持】"
    },
    "cross_path": {
      "label": "照顾自己也很重要",
      "path": "p006",
      "title": "家长支持",
      "desc": "照顾感觉敏感的孩子很耗心力。P006 是给你的",
      "href": "/paths/p006/journey"
    },
    "next_steps": [
      { "page": "s006", "label": "接下来", "desc": "P007 的最后一页" },
      { "href": "/paths/p006/journey", "page": null, "label": "家长支持", "desc": "照顾自己，也是照顾孩子的一部分" }
    ]
  },
  "s006": {
    "hero_title": "从这里继续",
    "hero_companion": "你已经走过了 P007——感觉处理的理解框架，现在是你的了",
    "reframe": "【待填：从「这是问题」到「这是一套我现在懂了的处理方式」】",
    "today_box": "【待填：今天可以做一件具体的事，把你学到的东西用起来】",
    "closing": "【待填】",
    "path_reflection": {
      "title": "在这条路上，你已经理解了",
      "steps": [
        "【待填：P007 核心洞察 1】",
        "【待填：P007 核心洞察 2】",
        "【待填：P007 核心洞察 3】",
        "【待填：P007 核心洞察 4】",
        "【待填：P007 核心洞察 5】"
      ]
    },
    "cross_path": {
      "label": "感觉处理影响很多地方",
      "path": "p001",
      "title": "沟通",
      "desc": "感觉过载经常是孩子沟通困难的底层原因之一",
      "href": "/paths/p001/journey"
    },
    "next_steps": [
      { "href": "/paths/p001/journey", "page": null, "label": "沟通困难", "desc": "感觉处理如何影响孩子的沟通" },
      { "href": "/paths/p002/journey", "page": null, "label": "情绪崩溃", "desc": "感觉过载与情绪调节的关系" },
      { "href": "/paths/p006/journey", "page": null, "label": "家长支持", "desc": "照顾感觉敏感孩子的家长也需要支持" }
    ]
  }
}
```

---

## ③ Cross-path 规划

### P007 → 其他路径（出口）

| 位置 | 目标 | 原因 |
|------|------|------|
| s004 cross_path | P002（情绪）| 感觉过载→情绪崩溃 |
| s005 cross_path | P006（家长）| 护理消耗家长心力 |
| s006 cross_path | P001（沟通）| 感觉处理影响沟通 |
| s006 next_steps | P001 · P002 · P006 | 三条主要 Cross-path |

### 其他路径 → P007（入口）

| 来源 | 位置 | 原因 |
|------|------|------|
| P001/s001 | parent_message 或 next_steps | 沟通困难可能有感觉处理原因 |
| P002/s001 | cross_path | 情绪崩溃可能是感觉过载 |
| P003/s001 | cross_path | 行为问题可能是感觉寻求 |
| P004/s002 | next_steps | 学校适应困难可能涉及环境感觉 |
| P006/s001 | next_steps | 家长倦怠可能来自护理难度 |

---

## ④ Knowledge Mapping

### 已有 KA（可直接接入）

| KA | 接入位置 | 接入方式 |
|----|---------|---------|
| KA-000001（为什么家长坚持不下去） | s005 parent_message · s006 | evidence_box ka_link |
| KA-000002（家校怎么说同一种语言） | s004（学校适应）| evidence_box ka_link |

### 待建 KA（P007 专属）

| 优先级 | KA 标题方向 | 对应页面 | 来源 EA |
|--------|-----------|---------|--------|
| ★★★★★ | 感觉处理到底是什么——不用专业词汇的解释 | u001 · journey | EA-Sensory-001 |
| ★★★★★ | 为什么孩子怕吸尘器（但可以接受其他声音） | s001 | EA-Sensory-001 |
| ★★★★☆ | 为什么剪头发这么难——触觉防御的真实体验 | s002 | EA-Sensory-002 |
| ★★★★☆ | 孩子一直转圈是想要什么 | s003 | EA-Sensory-001 |
| ★★★☆☆ | 感觉处理不是故意的——给孩子的解释框架 | s005 · s006 | EA-Sensory-001 |
| ★★★☆☆ | 公共场合为什么这么难——感觉过载的机制 | s004 | EA-Sensory-003 |

---

## ⑤ Evidence Mapping

### 待建 EA（Sensory 系列）

| EA ID（待定）| 文献方向 | 关联页面 | 优先级 |
|------------|---------|---------|--------|
| EA-Sensory-001 | Sensory Processing — 基础理论与神经科学（Ayres · Dunn） | u001 · journey | ★★★★★ |
| EA-Sensory-002 | 触觉防御与日常护理困难的研究（Schaaf et al.） | s002 | ★★★★☆ |
| EA-Sensory-003 | 感觉过载与环境参与（School Participation 研究）| s004 | ★★★★☆ |
| EA-Sensory-004 | 感觉处理与 OT 干预效果（RCT/Systematic Review） | u001 · sup001 | ★★★★☆ |
| EA-Sensory-005 | 感觉处理与照顾者压力（家长负担研究）| s005 → P006 | ★★★☆☆ |

### 候选文献

| 作者/标题 | 年份 | 类型 | 优先级 |
|----------|------|------|--------|
| Ayres, A.J. — Sensory Integration and the Child | 1979/更新版 | Foundational Framework | ★★★★★ |
| Dunn, W. — Sensory Processing Framework | 2007 | Theoretical | ★★★★★ |
| Schaaf et al. — An Intervention for Sensory Challenges | 2018 | RCT | ★★★★★ |
| Bodison & Parham — Specific Sensory Techniques and Sensory Environmental Modifications | 2018 | Systematic Review | ★★★★☆ |
| Cohn et al. — Parents' perspectives on OT using sensory integration | 2014 | Qualitative | ★★★★☆ |
| Bar-Shalita et al. — Sensory modulation disorder in daily life | 2008 | Study | ★★★☆☆ |

---

## SEO 元数据骨架

```json
"p007": {
  "journey": {
    "title": "感觉处理——剪头发、怕声音、一直转圈，为什么？| Anori",
    "description": "【待填，60字以内，家长语言】"
  },
  "u001": {
    "title": "感觉处理怎么运作——孩子的大脑在做什么 | Anori",
    "description": "【待填】"
  },
  "sup001": {
    "title": "OT 是什么，怎么找——感觉处理的专业支持 | Anori",
    "description": "【待填】"
  },
  "s001": {
    "title": "孩子怕声音——听觉敏感的真实原因 | Anori",
    "description": "【待填】"
  },
  "s002": {
    "title": "剪头发、刷牙每次都很难——触觉与日常护理 | Anori",
    "description": "【待填】"
  },
  "s003": {
    "title": "一直转圈、咬东西——感觉寻求是什么 | Anori",
    "description": "【待填】"
  },
  "s004": {
    "title": "人多的地方就崩溃——感觉过载怎么帮 | Anori",
    "description": "【待填】"
  },
  "s005": {
    "title": "家庭日常怎么调整——感觉处理支持 | Anori",
    "description": "【待填】"
  },
  "s006": {
    "title": "从这里继续——P007 感觉处理 | Anori",
    "description": "【待填】"
  }
}
```

---

## Production Package 完成标准

- [x] 6 条 PRB 定义完成，可直接写入 problems.json
- [x] 9 页 path-content.json 骨架完成，hero 字段已填，正文标注【待填】
- [x] Cross-path 出口和入口全部规划
- [x] Knowledge Mapping：已有 KA 接入位置 + 待建 KA 优先级
- [x] Evidence Mapping：待建 EA 列表 + 候选文献

**Production Package 状态：✅ 完成**

---

## 下一步

```
✅ Problem Universe
✅ Problem Cluster
✅ Journey Blueprint
✅ Production Package
        ↓
P007 页面正文生产（填写全部【待填】）
        ↓
写入 problems.json（6 条 PRB）
        ↓
写入 path-content.json（P007 正文）
        ↓
astro build 验证
        ↓
EA-Sensory-001 启动
```

---

*P007 · 04-Production-Package · 2026-07-10*
