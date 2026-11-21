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
    title: "从零掌握线段树与懒标记（Segment Tree）",
    subtitle: "6 节互动微课 · 实时树形动画 · Lazy Tag 下传 · 应用与题解",
    category: "数据结构",
    level: "零基础友好",
    tags: ["线段树", "Lazy Tag", "pushDown", "区间修改", "LC307", "P3372", "P3373"],
    path: "./lessons/segment-tree/index.html",
    updatedAt: "2026-11-21",
    status: "published",
    highlights: [
      "SVG 树形节点、tr/lz 数组、C++ 伪代码与递归调用栈四联同步追踪",
      "用“先欠账、用到再下传”直观演示 Lazy Tag 下传与区间 O(log n) 拆分",
      "含游戏榜单/K线极值/扫描线 4 大实际应用与 LC307/P3372/P3373 题解"
    ]
  },
  {
    id: "monotonic-stack",
    title: "从零掌握单调栈与单调队列",
    subtitle: "6 节互动微课 · 柱状图实时动画 · 滑动窗口极值 · 实战题解",
    category: "数据结构",
    level: "零基础友好",
    tags: ["单调栈", "单调队列", "滑动窗口", "最大矩形", "P5788", "P1886", "LC84"],
    path: "./lessons/monotonic-stack/index.html",
    updatedAt: "2026-11-21",
    status: "published",
    highlights: [
      "双模式 SVG 柱状图画布：实时演示下一个更大元素与滑动窗口最大值",
      "可视化统计总入栈/出栈次数，直观验证每个元素最多进出各一次的 O(n) 势能",
      "含股票跨度/实时峰值监控/DP 优化 4 大应用与 P5788/LC239/LC84 题解"
    ]
  },
  {
    id: "a-star",
    title: "从零掌握 A* 启发式寻路算法",
    subtitle: "6 节互动微课 · 网格实时寻路台 · 5 算法对比 · 应用与题解",
    category: "搜索与图论",
    level: "零基础友好",
    tags: ["A*", "启发式搜索", "曼哈顿距离", "Dijkstra", "八数码", "P1379", "P2483"],
    path: "./lessons/a-star/index.html",
    updatedAt: "2026-11-21",
    status: "published",
    highlights: [
      "可绘制障碍与泥潭的 9×13 交互网格，同图对比 A*/Dijkstra/贪心/Weighted A*",
      "实时显示每格 f=g+h 估价、Open 优先队列与高估启发式导致次优的反例陷阱",
      "含游戏 NavMesh/自动驾驶/地图导航/八数码 4 大应用与 3 道 C++ 实战题解"
    ]
  },
  {
    id: "tarjan-scc",
    title: "从零掌握 Tarjan 强连通分量与缩点",
    subtitle: "6 节互动微课 · 实时 DFS 栈动画 · 实际应用案例 · 三道实战题解",
    category: "图论",
    level: "零基础友好",
    tags: ["Tarjan", "强连通分量", "SCC", "缩点", "DAG", "B3609", "P3387", "P2341"],
    path: "./lessons/tarjan-scc/index.html",
    updatedAt: "2026-11-19",
    status: "published",
    highlights: [
      "左右双栏联动：图、dfn/low/stk 数组、C++ 伪代码与调用栈同步追踪",
      "图解四种 DFS 边与横叉边陷阱，支持拖动节点与自定义任意有向图",
      "含软件依赖检测/2-SAT/单向路网 4 大实际应用案例与 3 道洛谷 C++ 题解"
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
    id: "dp-knapsack",
    title: "从零掌握背包动态规划（0-1 与完全背包）",
    subtitle: "6 节互动微课 · 状态转移表动画 · 滚动数组正倒序 · 实战题解",
    category: "动态规划",
    level: "零基础友好",
    tags: ["动态规划", "0-1 背包", "完全背包", "滚动数组", "P1048", "P1616", "LC416"],
    path: "./lessons/dp-knapsack/index.html",
    updatedAt: "2026-11-21",
    status: "published",
    highlights: [
      "实时高亮二维 DP 转移来源格与一维滚动数组扫描方向（倒序 vs 正序）",
      "一键对比贪心反例与最优方案回溯，彻底搞懂为何 0-1 背包必须倒序",
      "含云主机装箱/预算分配/物流配载 4 大应用与 P1048/P1616/LC416 题解"
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
