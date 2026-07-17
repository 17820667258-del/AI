# 习惯打卡 ✦

一个现代、轻量的习惯追踪工具。每天打卡，见证改变。

## 在线体验

👉 **[立即使用](https://AItoolApp.github.io/AI/)**

直接打开即可使用，无需安装、无需注册，所有数据保存在浏览器本地。支持添加到手机桌面（PWA）。

## 功能

- **今日打卡** — 每天一键标记习惯完成状态，打卡成功有彩蛋庆祝
- **日历视图** — 月度打卡日历，一目了然
- **数据统计** — 当前连击、最长记录、月完成率
- **习惯管理** — 添加/编辑/删除，支持自定义 Emoji 图标和主题色
- **6 种主题** — 奶油拿铁、薄荷苏打、蜜桃乌龙、海盐汽水、落日海岸、星空午夜

## 技术栈

纯前端，零依赖：

| 层 | 技术 |
|---|---|
| 界面 | HTML + CSS + Vanilla JS |
| 存储 | 浏览器 localStorage |
| 动画 | CSS Keyframes |
| 打包 | 无（单 HTML 文件） |

## 本地使用

```bash
# 克隆仓库
git clone https://github.com/AItoolApp/AI.git

# 直接打开
open 习惯打卡.html
```

## 多平台路线图

| 平台 | 状态 | 技术方案 |
|---|---|---|
| Web (GitHub Pages) | ✅ 已上线 | 当前 HTML + PWA |
| 微信小程序 | 📋 计划中 | Taro |
| Android / iOS | 📋 计划中 | Capacitor |
| 桌面 (macOS/Win/Linux) | 📋 计划中 | Tauri |

## 目录结构

```
AI/
├── 习惯打卡.html      # 主应用（单页）
├── index.html         # 入口跳转页
├── README.md
└── .gitignore
```

## License

MIT

---

Made with ✨ by AItoolApp
