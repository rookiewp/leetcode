// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function mergeTwoLists(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1 || !l2) return l1 || l2;
  let result = l1;
  let curNode1 = l1;
  let curNode2 = l2;
  let prev = null;
  while (curNode1 && curNode2) {
    if (curNode1.val > curNode2.val) {
      const next = curNode2.next;
      if (prev) {
        curNode2.next = prev.next;
        prev.next = curNode2;
      } else {
        curNode2.next = curNode1;
        result = curNode2;
      }
      prev = curNode2;
      curNode2 = next;
    } else {
      prev = curNode1;
      curNode1 = curNode1.next;
    }
  }
  if (!curNode1 && curNode2) {
    prev.next = curNode2;
  }

  return result;
}

function mergeTwoLists2(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
}
