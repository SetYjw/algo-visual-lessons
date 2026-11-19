# Algo Visual Lessons · 算法演示教学合集

面向算法与数据结构学习者的交互式微课与动画演示合集，纯静态 HTML/JS 实现，支持通过 GitHub Pages 直接在线访问。

- 🌐 **在线目录页**：https://setyjw.github.io/algo-visual-lessons/

## 已上线课程

| 课程 | 分类 | 路径 |
| :--- | :--- | :--- |
| 从零掌握搜索树与平衡树（BST / AVL） | 数据结构 | [`lessons/bst-avl/index.html`](./lessons/bst-avl/index.html) |

## 目录结构

```text
algo-visual-lessons/
├── index.html               # 课程目录主页（支持分类筛选与关键词搜索）
├── lessons.js               # 课程配置清单（数据驱动目录渲染）
└── lessons/
    └── bst-avl/
        └── index.html       # 搜索树与平衡树交互微课
```

## 如何新增一节演示教学

1. 在 `lessons/` 下新建专题目录，例如 `lessons/segment-tree/index.html`。
2. 在 `lessons.js` 的 `window.ALGO_LESSONS` 数组中追加一条记录：
   ```js
   {
     id: "segment-tree",
     title: "线段树原理与区间修改演示",
     subtitle: "建树 · 懒标记下传 · 区间查询",
     category: "数据结构",
     level: "进阶",
     tags: ["线段树", "Lazy Tag", "RMQ"],
     path: "./lessons/segment-tree/index.html",
     updatedAt: "2026-11-20",
     status: "published",
     highlights: ["..."]
   }
   ```
3. 提交并推送至 `main` 分支，GitHub Pages 会自动更新。
