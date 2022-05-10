/*
 * @lc app=leetcode.cn id=865 lang=javascript
 *
 * [865] 具有所有最深节点的最小子树
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
 * @return {TreeNode}
 */
// 2次遍历，第一次找出所有的深度最大的节点，第二次找出最近公共祖先节点
var subtreeWithAllDeepest = function (root) {
  let ans = null
  let maxDeep = 0
  const deep2NodeListMap = new Map()
  function buildMapAndGetMaxDeep(root, deep) {
    if (!root) return
    let nodeListMap = deep2NodeListMap.get(deep)
    if (nodeListMap === undefined) {
      nodeListMap = new Map([[root, true]])
    } else {
      nodeListMap.set(root, true)
    }
    deep2NodeListMap.set(deep, nodeListMap)
    maxDeep = Math.max(maxDeep, deep)
    buildMapAndGetMaxDeep(root.left, deep + 1)
    buildMapAndGetMaxDeep(root.right, deep + 1)
  }
  buildMapAndGetMaxDeep(root, 0)
  const maxDeepNodeListMap = deep2NodeListMap.get(maxDeep)
  const count = maxDeepNodeListMap.size
  function traverse(root) {
    if (!root) return 0
    const leftCount = traverse(root.left)
    const rightCount = traverse(root.right)
    let curCount = leftCount + rightCount
    if (maxDeepNodeListMap.get(root)) {
      curCount += 1
    }
    if (ans === null && curCount === count) {
      ans = root
    }
    return curCount
  }
  traverse(root)
  return ans
}
// @lc code=end
