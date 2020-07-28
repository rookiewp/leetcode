// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeElements(head, val) {
  if (!head) return null;
  if (!val) return head;
  // 哨兵节点
  const sentinelNode = new ListNode();
  sentinelNode.next = head;
  let prev = sentinelNode;
  let current = head;
  while (current) {
    const next = current.next;
    if (current.val === val) {
      current.next = null;
      prev.next = next;
    } else {
      prev = current;
    }
    current = next;
  }
  return sentinelNode.next;
}
