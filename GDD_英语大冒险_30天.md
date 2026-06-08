# Game Design Document: 英语大冒险 (English Adventure)

**版本**: v2.1 | **目标平台**: Web (移动端优先) | **目标用户**: 小学五年级学生 (10-11岁)

> 📌 **课本依据**: 上海教育出版社《义务教育教科书·英语》(九年级义务教育课本)  
> 五年级 (5A / 5B)，2017年1月第一版，沪教版（牛津上海版）

---

## 1. 设计支柱 (Design Pillars)

1. **每日微习惯，不压垮** — 每天 25 分钟即可完成，设计上确保"放下手机时意犹未尽，不是精疲力竭"

> **时间升级**: v1.0 是 20 min × 30 天 = 600 min；v2.0 是 **25 min × 45 天 = 1,125 min**，总学习时长接近翻倍，每单元平均从 25 分钟提升到 47 分钟，覆盖深度翻番。
2. **有意义的竞争** — 排名奖励的是"坚持 + 准确率"，不是"谁泡得久"
3. **课本即游戏内容** — 每一道题都对应上海教育出版社五年级英语（沪教版/牛津上海版）的具体知识点，不是泛泛的英语题
4. **听得懂、说得出** — 听力题型占比不低于 35%，口语通过录音对比实现（降级方案为听力选图）

---

## 2. 核心设定

### 世界观（30秒读懂）
> 你是一名小小探险家，收到一封神秘信件——**"失落的语言宝藏"**藏在一座由 30 个浮空岛组成的群岛上。每天你解锁一个新岛，每个岛上有 3 个关卡。闯过所有岛，就能找到宝藏。

### 玩家身份
- 角色名：玩家自拟（默认：小探险家）
- 视觉：Q 版卡通角色，可通过闯关解锁服装/配饰（纯装饰，不付费）

---

## 3. 核心循环 (Core Loop)

```
┌───────────────────────────────────────────────────┐
│                   每日登录                          │
│  → 领取昨日奖励 / 查看排名变化                      │
└──────────────┬────────────────────────────────────┘
               ↓
┌───────────────────────────────────────────────────┐
│               解锁新岛屿（Day N）                    │
│  → 剧情对话切入（2-3句英语，带中文翻译）              │
└──────────────┬────────────────────────────────────┘
               ↓
┌───────────────────────────────────────────────────┐
│           岛内闯关（3 关，约 18 分钟）                │
│  第1关: 词汇闯关 (6min)                             │
│  第2关: 语法迷宫 (6min)                             │
│  第3关: 听力挑战 (6min)                             │
└──────────────┬────────────────────────────────────┘
               ↓
┌───────────────────────────────────────────────────┐
│            Boss 关（最后 2 分钟）                     │
│  混合题型，限时，分数翻倍                             │
└──────────────┬────────────────────────────────────┘
               ↓
┌───────────────────────────────────────────────────┐
│             结算 & 社交炫耀                          │
│  今日得分 → 排名变化 → 分享成绩卡片 → 明日预告         │
└───────────────────────────────────────────────────┘
```

### 3.1 按时间切分（25 分钟严格拆分）

| 阶段 | 时长 | 内容 | 题量 | 题型 |
|------|------|------|------|------|
| 登录 + 剧情 | 1 min | 自动播放前情提要 + 今日学习目标预告 | — | — |
| 词汇闯关 | 8 min | 10-12 道词汇题 | 比之前多 2-4 题 | 看图选词、英译中、中译英、拼写填空、词义配对 |
| 语法迷宫 | 7 min | 8-10 道语法题 | 比之前多 2 题 | 选词填空、排序成句、改错、时态判断 |
| 听力挑战 | 7 min | 6-8 道听力题 | 比之前多 1-2 题 | 听音选图、听对话答问、听音排序、听写 |
| Boss 关 | 2 min | 3 道综合题，限时每题 15s | 不变，但分值提高 | 混合题型，分数 2x |
| 结算 | ~30s | 得分、排名、分享、明日预告 | — | — |

**时间硬约束**: 每题单独计时（15-30s 不等），超时自动跳过算错，保证总时长不超过 27 分钟。

---

## 4. 40 天内容规划

> 📌 **课本体系**: 上海教育出版社·义务教育教科书·英语 五年级 (沪教版/牛津上海版)  
> **覆盖**: 5A 上册 (12单元) + 5B 下册 (12单元) = **24 单元，40 天**  
> **节奏**: 7个关键单元占 2 天，其余单元 1 天，每学完一个 Module 插入复习日

### 4.1 整体节奏

```
5A 上册 (19天)
  ├── Module 1: 5天 (U1×2 + U2 + U3 + 复习)
  ├── Module 2: 4天 (U1 + U2 + U3 + 复习)   ← M2U1从2天压缩为1天
  ├── Module 3: 6天 (U1×2 + U2×2 + U3 + 复习) ← M3U3从2天压缩为1天
  ├── Module 4: 3天 (U1 + U2 + U3)
  └── 5A 综合冲刺: 1天

5B 下册 (21天)
  ├── Module 1: 5天 (U1×2 + U2×2 + U3 + 复习)
  ├── Module 2: 4天 (U1×2 + U2 + U3 + 复习)
  ├── Module 3: 4天 (U1×2 + U2 + U3 + 复习)
  ├── Module 4: 3天 (U1 + U2 + U3)
  └── 全册冲刺: 5天 (5B冲刺 + Final Boss预热 + 决战)
```

### 4.2 按周划分

| 周次 | 天数 | 覆盖内容 | 对应课本 |
|------|------|---------|---------|
| **W1** | Day 1-7 | 5A M1: 生日→上学→未来→复习 → M2: 祖父母→朋友 | 5A 上册 |
| **W2** | Day 8-14 | 5A M2: 搬家→复习 → M3: 城市→购物 | 5A 上册 |
| **W3** | Day 15-21 | 5A M3: 看医生→复习 → M4: 水/风/火 → 5A冲刺 | 5A→5B过渡 |
| **W4** | Day 22-28 | 5B M1: 整理/生长/未来 →复习 → M2: 食物 | 5B 下册 |
| **W5** | Day 29-35 | 5B M2: 家居/乐器→复习 → M3: 标识/服装/健康→复习 | 5B 下册 |
| **W6** | Day 36-40 | 5B M4: 蝴蝶/太阳/地球日 → 5B冲刺 → **Final Boss** | 5B+全册 |

### 4.3 双日与单日单元调整说明

相比 45 天版，从 **9 个双日单元缩减为 7 个**，节省 2 天；合并部分复习冲刺日，再省 3 天：

| 调整内容 | 45天 → 40天 |
|---------|------------|
| M2U1 Grandparents | ✅ 从 2 天降为 1 天（频率副词并到一课讲完练透） |
| M3U3 Seeing the doctor | ✅ 从 2 天降为 1 天（病症+should/shouldn't 一节课搞定） |
| 5A 冲刺 | 从 2 天降为 1 天 |
| W6→W7 冲刺段 | 从 7 天压缩为 5 天 |
| **保留的双日单元 (7个)** | M1U1, M3U1, M3U2, M1U1(5B), M1U2(5B), M2U1(5B), M3U1(5B) |

（完整 30 天内容表见附录）

---

## 5. 评分机制

### 5.1 分数构成

```
单题得分 = 基础分 × 难度系数 × 速度系数 × 连击系数

基础分:        100 分（普通题）
难度系数:      1.0 (Easy) / 1.5 (Medium) / 2.0 (Hard)
速度系数:      1.0 ~ 1.3（越快越高，30s 题 10s 内答对 = 1.3）
连击系数:      1.0 + (连击数 - 1) × 0.05，最高 1.5 (即 11 连击封顶)
```

### 5.2 每日得分

```
每日总分 = 3 关得分之和 + Boss 关得分 × 2 + 完美通关奖金

完美通关奖金:  500 分（当日本关全部答对且没有超时）
```

### 5.3 每周额外奖励

| 条件 | 奖励 |
|------|------|
| 本周 7 天全勤 | +1000 分 |
| 本周平均准确率 ≥ 90% | +800 分 |
| 本周平均准确率 ≥ 80% | +400 分 |
| 本周有 5 天 Boss 关全对 | +500 分 |

---

## 6. 排名系统

### 6.1 三个排名维度

| 排名维度 | 更新频率 | 计算方式 | 设计目的 |
|---------|---------|---------|---------|
| **🌞 今日榜** | 每日重置 | 当日总分降序 | 鼓励"每天都冲一把" |
| **🏆 总积分榜** | 累计 | 30 天累计总分 | 体现长期坚持 |
| **🎯 准确率榜** | 每周更新 | 本周答题准确率降序 | 鼓励认真答题而非乱点 |

### 6.2 排名可见范围

- **自己**：始终可见自己在三个榜单上的位置
- **好友**：可见好友排名（好友需互相添加）
- **全班/全校**（可选）：学校/班级排行榜，需教师创建班级

### 6.3 排名激励设计

| 排名位置 | 今日榜奖励 | 总榜奖励（期末） |
|---------|-----------|----------------|
| 第 1 名 | 🥇 金牌 + 300  bonus 分 | 专属称号"英语大师" + 限定皮肤 |
| 第 2-3 名 | 🥈🥉 银/铜牌 + 150 bonus 分 | 称号"英语达人" + 限定头像框 |
| 第 4-10 名 | 鼓励徽章 + 50 bonus 分 | 称号"努力之星" |
| 参与奖 | 参与徽章 | — |

**防摆烂设计**: 连续 3 天低于全班平均分 → 触发"加油模式"（题目变简单 + 双倍积分，帮助学生重回正轨）

---

## 7. 题型详细设计

### 7.1 词汇类 (6min / 8-10题)

| 子题型 | 示例 | 难度 |
|-------|------|------|
| 看图选词 | 🖼️ 显示苹果图片 → 选 apple/banana/orange | Easy |
| 英译中 | `delicious` → 选 美味的/困难的/有趣的 | Easy |
| 中译英 | "图书馆" → 选 library/hospital/school | Medium |
| 拼写填空 | `_ p p _ _` → 输入 apple | Hard |
| 词义配对 | 左列: food/drink/sport → 右列匹配正确图片 | Medium |

### 7.2 语法类 (6min / 6-8题)

| 子题型 | 示例 | 难度 |
|-------|------|------|
| 选词填空 | She \_\_\_ a student. (is/am/are) | Easy |
| 排序成句 | 拖拽: `is / cat / there / a` → `There is a cat.` | Medium |
| 改错 | `He go to school every day.` → 选错误并改正 | Hard |
| 时态判断 | `He is playing football.` → 这是哪个时态？ | Medium |

### 7.3 听力类 (6min / 5-6题)

| 子题型 | 示例 | 难度 |
|-------|------|------|
| 听音选图 | 播放 "I like apples." → 选对应图片 | Easy |
| 听对话答问 | 播放短对话 → "What does Tom want to eat?" | Medium |
| 听音排序 | 播放 4 句话 → 按听到的顺序排列图片 | Hard |
| 听写单词 | 播放 "beautiful" → 输入拼写 | Hard |

### 7.4 Boss 关 (1-2min / 3题)

- 从当日三种题型中各抽 1 题
- 每题限时 15s
- 得分 × 2
- 全部答对额外 +200 分

---

## 8. 反馈系统 (Player Feedback)

### 8.1 即时反馈

| 事件 | 视觉 | 音效 |
|------|------|------|
| 答对 | ✅ 绿色闪光 + 得分弹出 (+100!) | 清脆叮声 |
| 答错 | ❌ 红色闪烁 + 显示正确答案 | 低沉嘟声 |
| 连击 | 火焰特效，连击数显示 🔥 x5 | 音效渐强 |
| 超时 | 灰色 X，自动下一题 | 时钟滴答声 |
| Boss 关全对 | 🎉 全屏烟花 | 胜利号角 |

### 8.2 每日总结

```
📊 今日报告
━━━━━━━━━━━━━━━━━━━━━━━
得分: 2,850  排名: #3/42
准确率: 87%  连击最高: 8
完美关卡: 2/4

🏅 获得的徽章: "闪电答题" (连续5题10秒内答对)
```

---

## 9. 技术实现建议

### 9.1 技术栈

| 层 | 建议 |
|----|------|
| 前端框架 | React / Vue + 移动端自适应 |
| 游戏框架 | Phaser 3（若需要动画和关卡地图）或纯 CSS 动画 |
| 音频引擎 | Howler.js（听力播放 + 音效） |
| 后端 | 轻量级 API（Node.js / Python），用于排名和用户管理 |
| 题库存储 | JSON 或 SQLite（本地） / 远程 API |

### 9.2 AI 生成关卡的接口设计

```
POST /api/generate-stage
{
  "day": 5,
  "topic": "food",
  "grammar_point": "there_be",
  "student_level": "intermediate"
}

→ 返回: 
{
  "vocabulary": [ { "question": "...", "options": [...], "answer": 0, "type": "image_select" }, ... ],
  "grammar":    [ ... ],
  "listening":  [ { "audio_url": "...", "question": "...", "options": [...], "answer": 1 }, ... ],
  "boss":       [ ... ]
}
```

---

## 10. 平衡性与防疲劳设计

| 问题 | 解决方案 |
|------|---------|
| 学生乱点刷分 | 答题时间低于 3s 的得分 × 0.3；准确率低于 40% 触发降级难度 |
| 高分段学生失去动力 | 巅峰赛（每周六额外开放，仅 Top 30% 可参与，争夺专属称号） |
| 低分段学生挫败感 | 动态难度调节：连续答错 3 题 → 下一题降一档难度 |
| 排名焦虑 | 今日榜仅显示前 10 名 + 自己的位置和前后各 1 名 |
| 题量不够 | 题库池至少 1,200 题（45 天 × 每天约 27 题 = 1,215 题，算上冗余） |

---

## 附录 A: 40 天知识点完整表

> **课本**: 上海教育出版社·五年级英语 (沪教版/牛津上海版，2017年1月第一版)  
> **每天 25 分钟 | 5A 上册 19天 + 5B 下册 21天 = 40 天 | 总学习时长 1,000 分钟**

### 逐日表

| Day | 课本 | 单元 | 📖 词汇主题 | 🔤 语法点 | 🎧 听力主题 |
|-----|------|------|-----------|----------|----------|
| **1** | 5A M1U1-a | My birthday | 序数词 first~tenth, birthday cake, present | When's your birthday? It's on June 1st. | 生日月份 |
| **2** | 5A M1U1-b | My birthday | 序数词 eleventh~thirty-first, party, invite | My birthday is on July 15th. I can't wait! | 邀请电话 |
| **3** | 5A M1U2 | My way to school | by bus/car/bike/metro, on foot, near/far | How do you come to school? I come by bus. | 上学交通 |
| **4** | 5A M1U3 | My future | teacher/doctor/pilot/cook/firefighter/nurse | What do you want to be? I want to be a pilot. | 梦想职业 |
| **5** | Review M1 | 复习 | 序数词+交通+职业综合 | 句型混合复习 | 主题对话 |
| **6** | 5A M2U1 | Grandparents | always/often/sometimes/never, visit, play chess | What do you usually do? I always visit them. | 周末活动 |
| **7** | 5A M2U2 | Friends | same/different, both, all, classmate | We're both in the same class. | 朋友介绍 |
| **8** | 5A M2U3 | Moving home | bedroom/kitchen/living room/bathroom, why/because | Why do you like your new home? Because it's big. | 新家描述 |
| **9** | Review M2 | 复习 | M2词汇综合 | 一般现在时+频率副词复习 | 话题综合 |
| **10** | 5A M3U1-a | Around the city | museum/post office/library/cinema/hospital, near/next to | Excuse me. Where's the post office? | 地点位置 |
| **11** | 5A M3U1-b | Around the city | left/right, straight, corner, traffic lights | Turn left/right. Go straight. | 指路指令 |
| **12** | 5A M3U2-a | Buying new clothes | shoes/socks/coat/dress/T-shirt/hat, size, cheap/expensive | Can I help you? I'd like to try it on. | 试穿对话 |
| **13** | 5A M3U2-b | Buying new clothes | price, change, pay, fit, too small/big | How much is it? It fits me well. | 付款对话 |
| **14** | 5A M3U3 | Seeing the doctor | have a cold/fever/headache, rest, medicine, should/shouldn't | What's wrong? You should rest. You shouldn't eat ice cream. | 看医生 |
| **15** | Review M3 | 复习 | 城市+购物+看医生 | 问句+建议复习 | 情景对话 |
| **16** | 5A M4U1 | Water | water, tap, rain, river, clean, drink, cook, wash | Where does water come from? We use water to wash. | 水的用途 |
| **17** | 5A M4U2 | Wind | wind, gently/strongly, blow, paper, kite | The wind is blowing gently. | 天气描述 |
| **18** | 5A M4U3 | Fire | fire, burn, firefighter, match, safety | Fire is useful but dangerous. Don't play with matches. | 消防安全 |
| **19** | 5A 冲刺 | 5A全册 | 全册核心词汇扫雷 | 5A全部句型混练 | 5A综合听力 |
| **20** | 5B M1U1-a | What a mess! | 物主代词: mine/yours/his/hers, tidy/messy, put away | Whose book is this? It's mine. | 物品归属 |
| **21** | 5B M1U1-b | What a mess! | ours/theirs, own, throw away, keep | Whose… are these? They're ours. | 整理房间 |
| **22** | 5B M1U2-a | Watch it grow! | caterpillar, butterfly, egg, cocoon | It was an egg. Now it's a caterpillar. | 生长阶段 |
| **23** | 5B M1U2-b | Watch it grow! | first/then/next/finally, life cycle | First an egg, then a caterpillar. | 顺序描述 |
| **24** | 5B M1U3 | In the future | will/won't, robot, machine, future | In the future, I will be a doctor. | 未来生活 |
| **25** | Review M1 | 5B M1复习 | 物主代词+生命周期+将来时 | 混合时态对比 | 主题故事 |
| **26** | 5B M2U1-a | Food and drinks | some/any, a lot of, fruit/meat/vegetables | Do we have any juice? Yes, we have some. | 冰箱有什么 |
| **27** | 5B M2U1-b | Food and drinks | countable/uncountable, shopping list | We need some rice and two apples. | 购物清单 |
| **28** | 5B M2U2 | Our new home | dining room/garden/bedroom, was/were, before/now | There was a small garden before. | 过去和现在 |
| **29** | 5B M2U3 | Musical instruments | piano/violin/guitar/drum/flute, play the… | What can you play? I can play the guitar. | 音乐会 |
| **30** | Review M2 | 5B M2复习 | 食物+家居+乐器 | some/any+there be+can | 情景对话 |
| **31** | 5B M3U1-a | Signs | must/mustn't, sign, meaning, rule | What does this sign mean? You mustn't smoke. | 公共标识 |
| **32** | 5B M3U1-b | Signs | can/can't, parking, danger, entrance/exit | Can I park here? No, you can't. | 标识辨音 |
| **33** | 5B M3U2 | Clothes(续) | wear, fit, suit, size, large/medium/small | Does it fit? It's too small. | 服装店 |
| **34** | 5B M3U3 | Healthy or unhealthy? | healthy/unhealthy, exercise, enough, too much | Eating vegetables is healthy. Walking is good exercise. | 健康生活 |
| **35** | Review M3 | 5B M3复习 | 标识+服装+健康 | must/mustn't+购物+建议 | 综合情景 |
| **36** | 5B M4U1 | Butterflies | lay eggs, hatch, grow, life cycle, leaf | A butterfly lays eggs on a leaf. | 蝴蝶一生 |
| **37** | 5B M4U2 | The sun | sun, rise, set, shine, shadow, light | The sun rises in the morning. | 太阳/影子 |
| **38** | 5B M4U3 | Earth Hour | Earth, hour, save, energy, environment | Earth Hour is in March. We turn off lights. | 环保活动 |
| **39** | 5B 冲刺 | 5B全册 | 5B全部核心词汇大扫除 | 5B全部句型混练 | 5B综合听力 |
| **40** | **🏆 Final Boss** | **全册** | **40题大决战 (词汇15+语法15+听力10)** | **限时25min，得分×3计入总榜** | **长篇综合** |

### 学力对比表

| 指标 | v1.0 (30天×20min) | v2.0 (40天×25min) | 提升 |
|------|-------------------|-------------------|------|
| 总时间 | 600 分钟 | **1,000 分钟** | **+67%** |
| 每单元平均时间 | 25 分钟 | **42 分钟** | **+68%** |
| 双日单元 | 0 个 | **7 个** | 关键单元深耕 |
| 复习日 | 4 天 | **8 天** | 翻倍 |
| 总题量(估) | ~660 题 | **~1,080 题** | +64% |
| 题库需求 | 500-700 题 | **900-1,200 题** | 可控 |

---

## 附录 B: 美术风格参考

- 风格：扁平卡通，明亮色彩，低多边形浮空岛
- 主色调：蓝色 (#4A90D9) + 橙色 (#FF9F43) 对比
- 字体：圆体/手写体（匹配儿童感）
- 角色：2.5 头身 Q 版，男女可选

---

## 下一阶段建议

1. ✓ **已完成**：核心 GDD
2. **待完成**：使用 AI 生成 500 道题库的 prompt 模板
3. **待完成**：UI 线框图 / 低保真原型
4. **待完成**：技术架构 + 数据库设计
5. **待完成**：可玩原型（1-3 天版本，用于用户测试）
