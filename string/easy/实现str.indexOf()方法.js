// 给定一个haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回-1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1

// 说明:
// 当needle是空字符串时，返回0。

// 滑动窗口 O((m-n+1)*n) m: haystack长度； n: needle字符串长度
function indexOf(haystack, needle) {
  if (needle === '') return 0;
  const len = needle.length;
  for (let i = 0; i < haystack.length - len + 1; i++) {
    if (needle === haystack.slice(i, len + i)) return i;
  }
  return -1;
}

// 滑动窗口+双指针：上面的方法会对所以长度为needle.length的字符串进行比较，这是不需要的，只有第一个字符相等的情况下才进行比较
function indexOf2(haystack, needle) {
  if (needle === '') return 0;
  let p1 = 0;
  let p2 = 0;
  let current = 0;
  const len = needle.length;
  while (p1 < haystack.length - len + 1) {
    if (haystack[p1] === needle[p2]) {
      current = p1;
      p1++;
      p2++;
      while (p2 < len) {
        if (haystack[p1] === needle[p2]) {
          p1++;
          p2++;
        } else {
          p1 = current + 1;
          p2 = 0;
          break;
        }
      }
      if (p2 === len) return current;
    } else {
      p1++;
    }
  }
  return -1;
}
