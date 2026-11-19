// 课程注册表：新增算法演示教学时，只需将网页放入 lessons/<slug>/index.html，并在此数组追加一项即可。
window.ALGO_LESSONS = [
  {
    id: "bst-avl",
    title: "从零掌握搜索树与平衡树（BST / AVL）",
    subtitle: "6 节互动微课 · 实时旋转动画 · 随堂小测 · 三道实战题解",
    category: "数据结构",
    level: "零基础友好",
    tags: ["BST", "AVL 树", "四大旋转", "名次树", "FHQ-Treap", "P3369"],
    path: "./lessons/bst-avl/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "左右双栏联动：边读微课边一键触发慢动作演示",
      "直观展示普通 BST 有序退化与 AVL 自动平衡对比",
      "含 T2 子树过继原理图、5 道随堂测验与 3 道 C++ 实战题解"
    ]
  },
  {
    id: "tarjan-scc",
    title: "从零掌握 Tarjan 强连通分量与缩点",
    subtitle: "6 节互动微课 · 实时 DFS 栈动画 · 实际应用案例 · 三道实战题解",
    category: "图论",
    level: "零基础友好",
    tags: ["Tarjan", "强连通分量", "SCC", "缩点", "DAG", "P3387", "P2341"],
    path: "./lessons/tarjan-scc/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "左右双栏联动：图、dfn/low/stk 数组、C++ 伪代码与调用栈同步追踪",
      "图解四种 DFS 边与横叉边陷阱，支持拖动节点与自定义任意有向图",
      "含软件依赖检测/2-SAT/单向路网 4 大实际应用案例与 3 道洛谷 C++ 题解"
    ]
  }
];
