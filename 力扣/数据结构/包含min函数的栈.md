### 包含min函数的栈

描述：

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，**调用 min、push 及 pop 的时间复杂度都是 O(1)**。

示例：

```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

#### 解题思路：

1、我们需要在常量的时间内找到最小值，说明我们不能在调用min方法时再做排序、查找等操作来获取

2、所以关键点是可以创建两个栈，一个是主栈 stack，另一个是辅助栈 minStack ，用来存放对应主栈不同时期的最小值。
（为什么要 minStack 而不是一个变量，是因为 pop 过程中有可能会将最小值 pop 出去，所以需要缓存不同时期的最小值）


#### 实现：

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    // 存放一个无穷大的值，minStack 的排序方式为由大到小
    this.minStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 如果 minStack 为空或者 push 进来的值小于等于 minStack 中的最小值，就 push 进 minStack
    if(!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x)
    }
    return this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popData = this.stack.pop()
    // 如果主数据栈 pop 的是最小值，那么 minStack 也将该最小值 pop 出去
    if(popData == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
    return popData
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1]
};

```