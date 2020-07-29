// 编写一个程序，找到两个单链表相交的起始节点。
// 也就是从该节点开始，后面节点都相同

// 示例:

// 输入: listA = [4,1,8,4,5], listB = [5,0,1,8,4,5]
// 输出: 8

// 输入: listA = [0,9,1,2,4], listB = [3,2,4]
// 输出: 2

// 输入: listA = [2,6,4], listB = [1,5]
// 输出: null

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  const map = new Map();
  let current = headA;
  while (current) {
    map.set(current, true);
    current = current.next;
  }
  current = headB;
  while (current) {
    if (map.has(current)) return current;
    current = current.next;
  }
  return null;
}
