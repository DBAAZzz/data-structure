### 组合总和 III

描述：
找出所有相加之和为 `n` 的 `k` 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

**说明**：

- 所有数字都是正整数。
- 解集不能包含重复的组合。 

示例：

```js
输入: k = 3, n = 7
输出: [[1,2,4]]
```

```js
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
```

#### 解题思路

回溯法

#### 实现
```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = []

  function dfs(path, start, sum) {
    if (path.length == k) {
      if (sum == n) result.push(path.slice())
      return
    }
    for (let i = start; i <= 9; i++) {
      path.push(i)
      dfs(path, i + 1, sum + i)
      path.pop()
    }
  }

  dfs([], 1, 0)

  return result
};

```

