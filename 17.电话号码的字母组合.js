/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return []
  const ans = []
  const map = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])
  let i = 0
  function backtrack(str) {
    if (str.length === digits.length) {
      ans.push(str)
      return
    }
    const list = map.get(digits[i])
    for (let j = 0; j < list.length; j++) {
      i++
      backtrack(str + list[j])
      i--
    }
  }
  backtrack('')
  return ans
};
// @lc code=end

