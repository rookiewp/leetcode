/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// 暴力遍历
// var isSubtree = function (root, subRoot) {
//   function isSameTree(root1, root2) {
//     if (root1 === null && root2 === null) return true
//     if (root1 === null || root2 === null || root1.val !== root2.val) return false
//     return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
//   }
//   let ans = false
//   function prevOrder(root) {
//     if (!root || ans === true) return
//     ans = isSameTree(root, subRoot)
//     prevOrder(root.left)
//     prevOrder(root.right)
//   }
//   prevOrder(root)
//   return ans
// }

// 将tree转成数组，通过kmp匹配
var isSubtree = function (root, subRoot) {
  function prevOrder(root, list) {
    if (!root) return list
    list.push(root.val)
    root.left ? prevOrder(root.left, list) : list.push('l')
    root.right ? prevOrder(root.right, list) : list.push('r')
    return list
  }

  function getNext(subList) {
    const next = [-1]
    let k = -1
    for (let i = 1; i < subList.length; i++) {
      while (k !== -1 && subList[i] !== subList[k + 1]) {
        k = next[k]
      }
      if (subList[i] === subList[k + 1]) {
        k++
      }
      next[i] = k
    }
    return next
  }

  function kmp(list, subList) {
    const next = getNext(subList)
    let j = 0
    for (let i = 0; i < list.length; i++) {
      while (j > 0 && list[i] !== subList[j]) {
        j = next[j - 1] + 1
      }
      // 已经匹配
      if (list[i] === subList[j]) {
        j++
      }
      if (j === subList.length) return true
    }
    return false
  }
  const rootList = prevOrder(root, [])
  const subRootList = prevOrder(subRoot, [])
  return kmp(rootList, subRootList)
}
// @lc code=end
