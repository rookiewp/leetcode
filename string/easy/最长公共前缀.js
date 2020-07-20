/* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例1:

输入: ["flower","flow","flight"]
输出: "fl"

示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。 */

/**
 * @param {string[]} strs
 * @return {string}
 */

 // 水平扫描，用str1和str2比较得出commonPrefix，在用commonPrefix和str3比较...以此类推
 // 这是官方实现
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return '';
    }
  }
  return prefix;
};

// 将官方的改成递归
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  function recursion(prefix, idx) {
    if (idx === strs.length) return prefix;
    let len = prefix.length;
    for (let i = 0; i < len && strs[idx].indexOf(prefix) !== 0; i++) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (!prefix) {
        return '';
      }
    }
    return recursion(prefix, ++idx);
  }
  return recursion(strs[0], 1);
};
