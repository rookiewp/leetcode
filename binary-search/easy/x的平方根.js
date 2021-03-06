// 实现Math.sqrt(x)函数。计算并返回x的平方根，其中x是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:
// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

// 二分查找，查找“最后一个小于等于”
function sqrt(x) {
  let head = 0;
  let tail = x;
  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2);
    if ((mid * mid) > x) {
      tail = mid - 1;
    } else {
      if (mid === x || ((mid + 1) * (mid + 1)) > x) return mid;
      head = mid + 1;
    }
  }
}
