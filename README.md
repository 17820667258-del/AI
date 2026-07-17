# 习惯打卡 ✦

一个现代、轻量的习惯追踪工具。每天打卡，见证改变。

## 在线体验

👉 **[立即使用](https://aitool2026.github.io/habit-tracker/习惯打卡.html)**

直接打开即可使用，无需安装、无需注册，所有数据保存在浏览器本地。

## 功能

- **今日打卡** — 每天一键标记习惯完成状态
- **日历视图** — 月度打卡热力图，一目了然
- **数据统计** — 当前连击、最长记录、月完成率
- **习惯管理** — 添加/编辑/删除，排序自定义
- **6 种主题** — 奶油拿铁、薄荷苏打、蜜桃乌龙、海盐汽水、落日海岸、星空午夜
- **彩蛋庆祝** — 打卡成功有彩色纸屑飞舞 🎉

## 技术栈

纯前端，零依赖：

| 层 | 技术 |
|---|---|
| 界面 | HTML + CSS + Vanilla JS |
| 存储 | 浏览器 localStorage |
| 图标 | Emoji + CSS 动画 |
| 打包 | 无（单 HTML 文件） |

## 多平台路线图

| 平台 | 状态 | 技术方案 |
|---|---|---|
| Web (GitHub Pages) | ✅ 已发布 | 当前 HTML + PWA |
| 微信小程序 | 📋 计划中 | Taro / 原生 WXML |
| Android | 📋 计划中 | Capacitor / Taro RN |
| iOS | 📋 计划中 | Capacitor |
| macOS 桌面 | 📋 计划中 | Tauri |

## 开始使用

```bash
# 克隆到本地
git clone https://github.com/AItool2026/habit-tracker.git

# 直接用浏览器打开
open 习惯打卡.html
```

## 开发

当前为单 HTML 文件架构，所有代码集中在 `习惯打卡.html` 中：

- `<style>` 部分 — 样式 + 6 套主题变量
- `<script>` 部分 — 所有逻辑（CRUD、统计、渲染）

### 目录结构

```
习惯打卡测试/
├── 习惯打卡.html      # 主应用（单页）
├── README.md          # 说明文档
└── .gitignore
```

## License

MIT

---

Made with ✨ by AItool
