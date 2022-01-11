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
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits == '') return []
    let map = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    }
    let result = []
    function dfs(path, start, cache) {
      if (path.length == digits.length) {
        result.push(path)
        return
      }
      for (let i = 0; i < digits.length; i++) {
        if (start > i) continue;
        for (let value of map[digits[i]]) {
          path += value
          dfs(path, i + 1)
          path = path.substr(0, path.length - 1);
        }
      }
    }
    dfs('', 0)
    return result
};

```

