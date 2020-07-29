// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

// 示例 1：

// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3

// 示例 2：

// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 使用 map或数组
function middleNode(head) {
  let i = 0;
  const map = new Map();
  while (head) {
    map.set(i, head);
    i++;
    head = head.next;
  }
  return map.get(Math.floor(i / 2));
}

// 使用2次循环，时间换空间
function middleNode2(head) {
  // 第一循环得出链表长度，并得出中间节点index
  let i = 0;
  let current = head;
  while (current) {
    i++;
    current = current.next;
  }
  const index = Math.floor(i / 2);
  // 第二次循环返回中间节点
  i = 0;
  current = head;
  while (current) {
    if (i === index) return current;
    i++;
    current = current.next;
  }
}

// 快慢指针，用两个指针 slow 与 fast 一起遍历链表。slow 一次走一步，fast 一次走两步。那么当 fast 到达链表的末尾时，slow 必然位于中间。
function middleNode3(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
