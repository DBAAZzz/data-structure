### 从上到下打印二叉树 II

描述：

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

示例：

```js
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

输出：

[
    [3],
    [9,20],
    [15,7]
]
```


#### 解题步骤


#### 实现
```js
var levelOrder = function(root) {
  if(!root) return []
  
  const queue = [[root, 0]], res = []

  while(queue.length) {
    const [node, level] = queue.shift()

    // 初始化当前层级
    if(!res[level]) res[level] = []

    res[level].push(node.val)

    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }

  return res
}
```