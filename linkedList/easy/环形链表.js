// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
  if (!head || !head.next) return false;
  const map = new Map();
  while (head) {
    if (!map.get(head)) {
      map.set(head, true);
    } else {
      return true;
    }
    head = head.next;
  }
  return false;
}

// 进阶：你能用 O(1)（即，常量）内存解决此问题吗？

// 快慢指针
function hasCycle2(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
