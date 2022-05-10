/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const ans = []
  if (!root) return ans
  const stack = [root]
  while (stack.length > 0) {
    let len = stack.length
    const res = []
    while (len > 0) {
      const node = stack.shift()
      res.push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
    ans.unshift(res)
  }
  return ans
};
// @lc code=end

