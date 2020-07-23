/*
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

  有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。

    输入: "()"
    输出: true
    输入: "()[]{}"
    输出: true
    输入: "(]"
    输出: false
    输入: "([)]"
    输出: false
    输入: "{[]}"
    输出: true
*/

function isValid(str) {
  if (str === '') return true;
  const map = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(str[i]);
    } else {
      const v = stack.pop();
      if (map.get(v) !== str[i]) {
        return false;
      }
    }
  }
  return true;
}
