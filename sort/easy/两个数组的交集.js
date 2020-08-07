// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 说明：
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// set
function intersection(nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item));
}

// hash
function intersection2(nums1, nums2) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }
  for (let n = 0; n < nums2.length; n++) {
    if (map.get(nums2[n])) {
      result.push(nums2[n]);
      map.delete(nums2[n]);
    }
  }
  return result;
}

// 排序+双指针
function intersection3(nums1, nums2) {
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
  return [...new Set(result)];
}
