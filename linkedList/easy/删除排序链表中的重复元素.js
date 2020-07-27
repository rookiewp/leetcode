// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

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

function deleteDuplicates(head) {
  if (!head) return null;
  let prev = head;
  let current = head.next;
  while (current) {
    if (prev.val === current.val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return head;
}
