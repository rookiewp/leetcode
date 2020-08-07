// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。

// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果nums1的大小比nums2小很多，哪种方法更优？
// 如果nums2的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// hash
function intersection1(nums1, nums2) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const k = nums1[i];
    const v = map.get(k);
    if (v) {
      map.set(k, v + 1);
    } else {
      map.set(k, 1);
    }
  }
  for (let n = 0; n < nums2.length; n++) {
    const k = nums2[n];
    const count = map.get(k);
    if (count && count > 0) {
      result.push(k);
      map.set(k, count - 1);
    }
  }
  return result;
}

// 排序+双指针
function intersection2(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  const result = [];
  for (; i < nums1.length && j < nums2.length;) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
