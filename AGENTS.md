# 算法交互式微课制作与挂载指南（供后续新对话复用）

本仓库（`SetYjw/algo-visual-lessons`）是一个**面向零基础学习者的交互式算法微课与动画演示合集**，部署于 GitHub Pages：
- 仓库地址：`https://github.com/SetYjw/algo-visual-lessons`
- 在线主页：`https://setyjw.github.io/algo-visual-lessons/`
- 本地路径：`f:\cpp\algo-visual-lessons`

当后续新对话要求“制作一个 XX 算法的讲解/演示并挂到目录中”时，请严格遵循以下**演示模式**与**添加流程**。

---

## 一、标准教学演示模式（微课架构）

参考已完成的范例：[lessons/bst-avl/index.html](./lessons/bst-avl/index.html)

### 1. 核心定位
- 默认读者**尚未掌握该算法/数据结构**，不能只给一个冷冰冰的操作台或干瘪的公式总结。
- 必须做成**边读边演、循序渐进的交互式微课（Interactive Guided Lesson）**。

### 2. 页面布局规范
- **顶部导航栏（Sticky）**：
  - 左侧：专题名称 + 一句话副标题。
  - 中间：分课切换胶囊按钮（如 `1. 动机 -> 2. 核心原理 -> ... -> 6. 实战题解`），记录已学进度。
  - 右侧：**必须包含返回目录链接** `<a class="theme-btn" href="../../index.html" style="text-decoration:none;">← 目录</a>`、学习进度徽章、以及浅色/深色主题切换按钮（`🌓 主题`）。
- **宽屏双栏联动教室（`>= 1160px` 左右分栏，窄屏自动上下堆叠）**：
  - **左栏（微课讲义区）**：
    1. **动机与直觉引入**：先讲为什么需要这个算法（对比暴力/已有方案的痛点）。
    2. **通俗拆解核心机制**：用直觉、生活类比、精简 SVG 静态原理图讲清关键难点。
    3. **文内嵌入式微实验卡片（`.try-card`）**：每个关键知识点旁放 1~2 个 `▶ 演示...` 按钮，点击后**直接驱动右侧演示台**加载对应样例并慢动作播放。
    4. **随堂互动小测（`.quiz-box`）**：每节课末尾附 1 道概念检查题，点击选项即时判题并给出通俗解析。
    5. **梯度实战题解（最后一课）**：提供 2~3 道由浅入深的经典题（如洛谷 / LeetCode / CSP），说明“为何选用该算法 + 建模思路 + 可直接提交的 C++ 代码 + 一键复制按钮”，并支持一键把样例加载到右侧演示台。
  - **右栏（吸顶实时交互动画台 `.workbench-sticky`）**：
    1. **自由实验控制区**：支持切换模式（如基础版 vs 进阶版）、输入自定义数据、触发核心操作、随机生成样例、清空重置。
    2. **SVG 实时画布**：使用稳定的节点 `id` 配合 CSS `transform` 过渡实现平滑位移动画，支持点击图/树节点交互。
    3. **步骤解说条 + 播放控制栏**：记录完整步骤快照（Step Trace），支持 `⏮ 上一步 / ▶ 播放·⏸ 暂停 / ⏭ 下一步 / 进度滑块 / 速度选择`，绑定键盘快捷键（`Space` 播放暂停、`←`/`→` 单步）。
    4. **状态观测区 + 同步伪代码追踪**：实时展示关键指标、辅助数据结构状态，并高亮当前步骤对应的 C++ 伪代码行。

### 3. 技术与视觉规范
- **单文件自包含**：每个课程是一个独立的 `index.html`（无构建步骤、无需后端、开箱即用）。
- **公式排版**：不要直接裸写 `$O(\log n)$` LaTeX 语法（页面不引入 MathJax/KaTeX）；请使用原生 HTML 数学排版（如 `<span class="math">O</span>(log <span class="math">n</span>)`、`&le;`、`&ge;`、`<sub>`、`<sup>`）。
- **视觉主题**：沿用仓库统一的浅色/深色自适应 CSS 变量体系（`--bg`, `--panel`, `--sunk`, `--ink`, `--muted`, `--accent`, `--ok`, `--warn`, `--err`, `--purple`）及字体栈（`IBM Plex Sans` + `Space Grotesk` + `JetBrains Mono`）。

---

## 二、新增演示教学的标准添加流程

### 第 1 步：创建课程文件
在 `lessons/` 下新建语义化英文短横线目录，并写入 `index.html`：
```text
lessons/<slug>/index.html
```
（例如 `lessons/segment-tree/index.html`、`lessons/tarjan-scc/index.html`）

确保顶部导航栏包含返回目录链接：
```html
<a class="theme-btn" href="../../index.html" style="text-decoration:none;">← 目录</a>
```

### 第 2 步：在 `lessons.js` 中注册课程
打开根目录的 `lessons.js`，在 `window.ALGO_LESSONS` 数组中追加一条配置对象（目录主页 `index.html` 会自动据此渲染卡片、分类筛选与搜索）：
```js
{
  id: "<slug>",
  title: "课程主标题",
  subtitle: "核心内容一句话概括（如：X 节微课 · 交互演示 · 实战题解）",
  category: "数据结构", // 如：数据结构 / 图论 / 动态规划 / 字符串 / 数学
  level: "零基础友好",   // 如：零基础友好 / 进阶 / 提高组
  tags: ["标签1", "标签2", "代表题号"],
  path: "./lessons/<slug>/index.html",
  updatedAt: "YYYY-MM-DD",
  status: "published",
  highlights: [
    "亮点 1（简短明了）",
    "亮点 2",
    "亮点 3"
  ]
}
```

### 第 3 步：更新 `README.md` 与语法自检
1. 在 `README.md` 的“已上线课程”表格中追加一行链接。
2. 用 Node 快速校验内嵌 `<script>` 无语法错误：
```powershell
node -e "const fs=require('fs'); const html=fs.readFileSync('lessons/<slug>/index.html','utf8'); const m=html.match(/<script>([\s\S]*?)<\/script>/); new Function(m[1]); console.log('JS OK');"
```

### 第 4 步：提交并推送至 GitHub（自动部署 Pages）
```powershell
Set-Location 'f:\cpp\algo-visual-lessons'
git add .
git commit -m "feat: add <slug> interactive lesson"
git push
```
> 注：本机 `gh` CLI 路径为 `C:\Users\尹佳文\AppData\Local\Programs\GitHub CLI\bin\gh.exe`（已配置为 git credential helper，直接 `git push` 即可鉴权）。推送到 `main` 分支后，GitHub Pages（`https://setyjw.github.io/algo-visual-lessons/`）会在约 1 分钟内自动更新。
