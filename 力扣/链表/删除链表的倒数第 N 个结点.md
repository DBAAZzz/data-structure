### 删除链表的倒数第 N 个结点

描述：

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

示例：

![](../../static/remove_ex1.jpg)

```js
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

```js
输入：head = [1], n = 1
输出：[]
```

```js
输入：head = [1,2], n = 1
输出：[1]
```

#### 解题思路

如果要不满足进阶条件的话，可以先遍历一遍链表获取链表的长度，然后用总长度减去 n ，我们很快就得到了要删除节点的下标，然后就是移动指针到目标节点的前一个节点直接删除即可。

双指针（**快慢指针**）的经典应用

    1、我们可以设置{一个快指针和一个慢指针同时指向头节点，让快指针先走 n 个节点
    2、然后让慢指针和快指针同时开始，直到快指针遍历结束
    3、让慢指针的 next 指针 指向 慢指针next.next
    4、返回头节}点


#### 实现

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head, slow = head;
  for(let i = 0; i < n; i++) {
    fast = fast.next
  }  
  if(!fast) return head.next // 处理 n 为链表长度的情况
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
};
```