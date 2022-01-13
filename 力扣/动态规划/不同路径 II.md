### 不同路径 II

描述：

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

![](https://github.com/DBAAZzz/data-structure/blob/main/static/robot_maze.png)

网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。

![](https://github.com/DBAAZzz/data-structure/blob/main/static/robot1.jpg)


示例：

```js
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

```js
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

#### 解题思路

解题思路可以参考 **不同路径** 那题

只是多了一个限制，即

#### 实现

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = [], m = obstacleGrid.length, n = obstacleGrid[0].length
  for (let i = 0; i <= m; i++) {
    dp[i] = []
    dp[i][0] = 0
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i - 1][j - 1] == 1) {
        dp[i][j] = 0
        continue
      }
      if (i == 1 && j == 1) dp[i][j] = 1
      else dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }
  return dp[m][n]
};
```