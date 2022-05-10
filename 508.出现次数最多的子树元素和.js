/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) return []
  let ans = []
  const map = new Map()
  let maxCount = 0
  function postorder(root) {
    if (!root) return 0
    const leftSum = postorder(root.left)
    const rightSum = postorder(root.right)
    const sum = root.val + leftSum + rightSum
    const count = (map.get(sum) || 0) + 1
    if (count > maxCount) {
      ans = [sum]
      maxCount = count
    } else if (count === maxCount) {
      ans.push(sum)
    }
    map.set(sum, count)
    return sum
  }
  postorder(root)
  return ans
}
// @lc code=end
