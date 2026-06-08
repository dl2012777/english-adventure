# 英语大冒险 🗺️ English Adventure

沪教版（牛津上海版）5A+5B 小学英语闯关游戏，一个**自包含 HTML 文件**，无需安装任何软件，用 Chrome 浏览器打开即可玩。

## 🎮 快速体验

直接用浏览器打开 `Day22_What_a_mess.html`，或访问在线版：

**https://10c0c3bfd6134883be9316b7a920c7e0.app.codebuddy.work**

## 🏗️ 项目结构

```
├── Day22_What_a_mess.html    ← 主游戏文件（单页应用，所有代码和数据都在这个文件里）
├── GDD_英语大冒险_30天.md     ← 游戏设计文档（40天完整方案）
├── AI出题_Prompt模板.md       ← AI 出题的 Prompt 模板
├── questionBank.js           ← 40天完整题库（数据源）
└── README.md
```

## 🎯 游戏特色

- **5 关 31 题**：词汇(10) → 语法(8) → 听力(6) → 跟读(4) → Boss(3)
- **AI 生成关卡**：基于课本内容自动出题，每次题目随机变化
- **语音功能**：听力题自动朗读、跟读题语音识别判对错
- **计分系统**：综合难度、速度、连击加成
- **完全离线可用**：一个 HTML 文件，Chrome 直接打开

## 🖥️ 使用方式

### 方式一：本地打开
```bash
# 直接用 Chrome 打开
open Day22_What_a_mess.html
```

### 方式二：本地服务器（推荐，语音功能更稳定）
```bash
python3 -m http.server 8000
# 访问 http://localhost:8000/Day22_What_a_mess.html
```

### 方式三：手机访问
同一 WiFi 下，用电脑启动本地服务器，手机浏览器访问 `http://你电脑IP:8000/Day22_What_a_mess.html`

## 📚 课本信息

- **教材**：上海教育出版社（沪教版/牛津上海版）2017年1月第一版
- **覆盖**：5A 上册 (12单元) + 5B 下册 (12单元)
- **总时长**：40天 × 25分钟 = 1000分钟

## 📄 License

MIT
