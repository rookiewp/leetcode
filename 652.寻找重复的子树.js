/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  if (!root) return []
  let ans = []
  const map = new Map()
  function postorder(root) {
    if (!root) return '#'
    const leftTree = postorder(root.left)
    const rightTree = postorder(root.right)
    const curTree = `${leftTree},${rightTree},${root.val}`
    const cachedInfo = map.get(curTree)
    if (cachedInfo && cachedInfo.isAdd === false) {
      cachedInfo.isAdd = true
      ans.push(root)
    }
    if (!cachedInfo) {
      map.set(curTree, {
        isAdd: false,
        root,
      })
    }
    return curTree
  }
  postorder(root)
  return ans
}
// @lc code=end
