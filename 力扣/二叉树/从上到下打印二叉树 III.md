### 从上到下打印二叉树 III

描述：

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如：

```js
给定二叉树: [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7

输出：

[
  [3],
  [20,9],
  [15,7]
]
```

#### 实现

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [[root, 0]], result = []

  while (queue.length) {
    let [node, level] = queue.shift()
    if (!result[level]) result[level] = []

    level % 2 == 0 ? result[level].push(node.val) : result[level].unshift(node.val)

    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }
  return result
};
```
