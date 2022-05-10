/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
// stack
// var isValidSerialization = function (preorder) {
//   if (!preorder) return true
//   const stack = []
//   let i = 0
//   const arr = preorder.split(',')
//   while (i < arr.length) {
//     stack.push(arr[i])
//     while (
//       stack.length >= 3 &&
//       stack[stack.length - 1] === '#' &&
//       stack[stack.length - 2] === '#' &&
//       stack[stack.length - 3] !== '#'
//     ) {
//       stack.pop()
//       stack.pop()
//       stack.pop()
//       stack.push('#')
//     }
//     i++
//   }
//   return stack.length === 1 && stack[0] === '#'
// }

// 合法二叉树，整个树的出度和入度相等
var isValidSerialization = function (preorder) {
  if (!preorder) return true
  const arr = preorder.split(',')
  let indegree = -1
  let outdegree = 0
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    indegree += 1
    if (indegree > outdegree) return false
    if (v !== '#') outdegree += 2
  }
  return indegree === outdegree
}

// @lc code=end
