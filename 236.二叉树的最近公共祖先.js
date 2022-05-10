/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null
  function postorder(root) {
    if (!root) return 0
    const leftTargetNodeCount = postorder(root.left)
    const rightTargetNodeCount = postorder(root.right)
    const curTargetNodeCount =
      leftTargetNodeCount + rightTargetNodeCount + (root.val === p.val || root.val === q.val ? 1 : 0)
    if (curTargetNodeCount === 2 && ans === null) {
      ans = root
    }
    return curTargetNodeCount
  }
  postorder(root)
  return ans
}
// @lc code=end
