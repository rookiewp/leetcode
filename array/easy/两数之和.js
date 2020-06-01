/* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1：暴力方法，2次循环，时间复杂度O(n2)
var twoSum = function(nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let n = i + 1; n < len; n++) {
      if (nums[i] + nums[n] === target) return [i, n];
    }
  }
  return -1;
};

// 2：map，时间复杂度O(n)
var twoSum = function(nums, target) {
  const map = new Map();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < len; i++) {
    const n = map.get(target - nums[i]);
    if (n >= 0 && i !== n) return [i, n];
  }
  return -1;
};

// 3：边存边比较，时间复杂度O(n)
var twoSum = function(nums, target) {
  const map = new Map();
  let len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const n = map.get(target - nums[i]);
    if (n >= 0 && i !== n) {
      return [i, n];
    } else {
      map.set(nums[i], i)
    }
  }
  return -1;
};

// const v = twoSum([2, 7, 11, 15], 9)
// console.log(v)
