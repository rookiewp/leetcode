/* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。 */

/* 
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21
*/

/* 注意:

假设我们的环境只能存储得下 32位的有符号整数，则其数值范围为 [−2**31, 2**31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let v = Math.abs(x);
  let result = 0;
  while (v !== 0) {
    result = (10 * result) + (v % 10);
    v = (v / 10) | 0; // Math.floor(v / 10);
  }
  if (x < 0) {
    return result <= Math.pow(2, 31) ? -result : 0;
  }
  return result <= Math.pow(2, 31) - 1 ? result : 0;
};

// 转成字符串
var reverse = function(x) {
  let v = Math.abs(x);
  var arr = v.toString().split('').reverse();
  let i = 0;
  let result;
  for (; i < arr.length; i++) {
    if (arr[i] !== '0') break;
  }
  result = arr.slice(i).join('');
  if (x < 0) {
    return result <= Math.pow(2, 31) ? -result : 0;
  }
  return result <= Math.pow(2, 31) - 1 ? result : 0;
};
