/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 使用快慢指针找到链表的中间节点，递归构建BST。时间复杂度O(nlongn)
// var sortedListToBST = function(head) {
//   /**
//    * @description: 使用快慢指针找到单链表的中间节点
//    * @param {ListNode} left 链表的开始节点
//    * @param {ListNode | null} right 链表的结束节点
//    * @return {ListNode}
//    */  
//   function getMid(left, right) {
//     let slow = left
//     let fast = left
//     while (fast !== right && fast.next !== right) {
//       slow = slow.next
//       fast = fast.next.next
//     }
//     return slow
//   }
//   function buildTree(left, right) {
//     if (left === right) return null
//     const mid = getMid(left, right)
//     const cur = new TreeNode(mid.val)
//     cur.left = buildTree(left, mid)
//     cur.right = buildTree(mid.next, right)
//     return cur
//   }
//   return buildTree(head, null)
// };


var sortedListToBST = function(head) {
  /**
   * @description: 获取链表长度
   * @param {ListNode} head 链表的头
   * @return {number}
   */  
  let cur = head
  function getLen(head) {
    let count = 0
    while (head) {
      count++
      head = head.next
    }
    return count
  }
  function buildTree(left, right) {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2)
    const node = new TreeNode()
    node.left = buildTree(left, mid - 1)
    node.val = cur.val
    cur = cur.next
    node.right = buildTree(mid + 1, right)
    return node
  }
  const len = getLen(head)
  return buildTree(0, len - 1)
};
// @lc code=end

