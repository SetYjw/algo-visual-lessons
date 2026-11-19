# Algo Visual Lessons · 算法演示教学合集

面向算法与数据结构学习者的交互式微课与动画演示合集，纯静态 HTML/JS 实现，支持通过 GitHub Pages 直接在线访问。

- 🌐 **在线目录页**：https://setyjw.github.io/algo-visual-lessons/

## 已上线课程（5 讲）

| 课程 | 分类 | 路径 |
| :--- | :--- | :--- |
| 从零掌握搜索树与平衡树（BST / AVL） | 数据结构 | [`lessons/bst-avl/index.html`](./lessons/bst-avl/index.html) |
| 线段树与懒标记（Segment Tree） | 数据结构 | [`lessons/segment-tree/index.html`](./lessons/segment-tree/index.html) |
| 并查集与最小生成树（DSU & Kruskal） | 图论 | [`lessons/dsu-mst/index.html`](./lessons/dsu-mst/index.html) |
| 单源最短路：Dijkstra 与 Bellman-Ford / SPFA | 图论 | [`lessons/shortest-path/index.html`](./lessons/shortest-path/index.html) |
| KMP 字符串匹配与前缀函数（Border / next） | 字符串 | [`lessons/kmp/index.html`](./lessons/kmp/index.html) |

## 目录结构

```text
algo-visual-lessons/
├── index.html               # 课程目录主页（支持分类筛选与关键词搜索）
├── lessons.js               # 课程配置清单（数据驱动目录渲染）
├── AGENTS.md                # 交互式微课制作规范与新增挂载流程（供后续新对话复用）
└── lessons/
    ├── bst-avl/index.html       # 搜索树与平衡树交互微课
    ├── segment-tree/index.html  # 线段树与懒标记交互微课
    ├── dsu-mst/index.html       # 并查集与最小生成树交互微课
    ├── shortest-path/index.html # 单源最短路交互微课
    └── kmp/index.html           # KMP 字符串匹配交互微课
```

> 完整的交互式微课设计模式、技术规范与发布步骤请见 [`AGENTS.md`](./AGENTS.md)。

## 如何新增一节演示教学

1. 在 `lessons/` 下新建专题目录，例如 `lessons/dp-knapsack/index.html`。
2. 在 `lessons.js` 的 `window.ALGO_LESSONS` 数组中追加一条记录。
3. 提交并推送至 `main` 分支，GitHub Pages 会自动更新。
