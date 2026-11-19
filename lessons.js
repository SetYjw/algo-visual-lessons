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
  }
];
