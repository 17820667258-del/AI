#!/bin/bash
# 习惯打卡 - GitHub 一键发布脚本
# 运行方式: bash github-setup.sh

set -e

echo "=== 习惯打卡 - GitHub 发布脚本 ==="
echo ""

# 1. 检查 gh 是否安装
if ! command -v gh &>/dev/null; then
    echo "正在安装 GitHub CLI..."
    brew install gh
fi

# 2. 登录 GitHub
echo "请按以下步骤登录 GitHub："
echo ""
gh auth login -h github.com -p ssh

# 3. 创建远程仓库
echo "创建远程仓库..."
gh repo create habit-tracker --public --push --remote origin --source .

echo ""
echo "=== 完成！==="
echo "仓库地址: https://github.com/AItool2026/habit-tracker"
echo ""
echo "GitHub Pages 部署："
echo "1. 打开 https://github.com/AItool2026/habit-tracker/settings/pages"
echo "2. Source 选择 main 分支，root 目录"
echo "3. 保存后等待 1-2 分钟"
echo "4. 访问 https://aitool2026.github.io/habit-tracker/习惯打卡.html"
