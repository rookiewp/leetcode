/* 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。 */

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (currentValue < target) continue;
    if (currentValue >= target) return i;
  }
  return nums.length;
}

// 二分查找：查找“第一个大于等于”target的值，如果找不到，则插入数组最后
function searchInsert2(nums, target) {
  let head = 0;
  let tail = nums.length - 1;
  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2);
    if (nums[mid] < target) {
      head = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] < target) return mid;
      tail = mid - 1;
    }
  }
  // 如果找不到，则插入数组最后
  return nums.length;
}
