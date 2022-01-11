### 组合总和 II

描述：

给你一个由候选元素组成的集合 `candidates` 和一个目标数 `target` ，找出 candidates 中所有可以使数字和为 `target` 的组合。

`candidates` 中的每个元素在每个组合中只能使用 **一次** 。

**注意**：解集不能包含重复的组合。 

示例：

```js
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
]
```

```js
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
    [1,2,2],
    [5]
]
```

#### 解题思路

这道题是典型的可以使用回溯法解决的题目。难点在于每个元素在每个组合中只能使用一次，也就是说不能有**重复组合**。

```js
var combinationSum2 = function (candidates, target) {
  let result = [], path = []
  candidates.sort((a, b) => a - b)
  function dfs(start, sum) {
    if (sum == target) {
      result.push(path.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      // 因为是排序后的数组，所以可以直接break
      if (candidates[i] + sum > target) break;
      // 跳过重复的数字，重复的不选择 
      if (candidates[i] == candidates[i - 1] && i > start) continue;
      path.push(candidates[i])
      // 确保不会选到之前的
      dfs(i + 1, sum + candidates[i])
      path.pop()
    }
  }
  dfs(0, 0)
  return result
};
```


