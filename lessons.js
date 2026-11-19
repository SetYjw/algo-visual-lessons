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
    id: "segment-tree",
    title: "线段树与懒标记（Segment Tree）",
    subtitle: "5 节互动微课 · 区间修改/查询动画 · Lazy Tag 下传 · 实战题解",
    category: "数据结构",
    level: "零基础友好",
    tags: ["线段树", "Lazy Tag", "pushDown", "区间和", "P3372", "P3373"],
    path: "./lessons/segment-tree/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "用“先欠账、用到再下传”通俗类比讲透懒标记 pushDown",
      "实时 SVG 树画布 + 橙色懒标记徽章 + 原数组逻辑值对照",
      "附洛谷 P3372 / P3373 完整 C++17 模板与乘加优先级解析"
    ]
  },
  {
    id: "dsu-mst",
    title: "并查集与最小生成树（DSU & Kruskal）",
    subtitle: "5 节互动微课 · 路径压缩动画 · Kruskal 贪心判环 · 实战题解",
    category: "图论",
    level: "零基础友好",
    tags: ["并查集", "路径压缩", "按秩合并", "Kruskal", "MST", "P3367", "P3366"],
    path: "./lessons/dsu-mst/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "双模式演示台：并查集森林路径压缩对比 + Kruskal 逐步选边判环",
      "直观开关对比“是否路径压缩”把长链拍扁成星形的瞬间",
      "涵盖切分定理直觉、P3367 / P3366 模板与 P1525 扩展域并查集"
    ]
  },
  {
    id: "shortest-path",
    title: "单源最短路：Dijkstra 与 Bellman-Ford / SPFA",
    subtitle: "5 节互动微课 · 松弛动画 · 负权边翻车对比 · 负环判定",
    category: "图论",
    level: "零基础友好",
    tags: ["最短路", "Dijkstra", "优先队列", "Bellman-Ford", "SPFA", "P4779", "P3385"],
    path: "./lessons/shortest-path/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "支持正权图与负权边反例切换，亲眼看 Dijkstra 如何被负权边坑惨",
      "实时展示 dist[] 数组、小根堆过期状态跳过与最短路径树",
      "附洛谷 P4779 堆优化模板与 P3385 SPFA 判负环题解"
    ]
  },
  {
    id: "kmp",
    title: "KMP 字符串匹配与前缀函数（Border / next）",
    subtitle: "5 节互动微课 · 字符对齐滑动动画 · π 数组递推 · 循环节",
    category: "字符串",
    level: "零基础友好",
    tags: ["KMP", "前缀函数", "Border", "next 数组", "循环节", "P3375"],
    path: "./lessons/kmp/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "双模式对齐画布：实时演示 π[] 自匹配构建与 KMP 永不回退滑动",
      "失配瞬间紫色高亮相等真前后缀（Border），彻底看懂 j = pi[j-1]",
      "用存钱罐势能直觉证明 O(n+m)，附 P3375 与最小循环节题解"
    ]
  }
];
