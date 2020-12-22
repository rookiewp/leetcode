// 前序遍历 递归
function iterateTree(treeNode) {
  if (treeNode) console.log(treeNode.value);
  if (treeNode.left) iterateTree(treeNode.left);
  if (treeNode.right) iterateTree(treeNode.right);
}

// 前序遍历 循环
function iterateTree2(treeNode) {
  const stack = [];
  let current = treeNode;
  while (current || stack.length > 0) {
    while (current) {
      console.log(current.value);
      stack.push(current);
      current = current.left;
    }
    const stackTop = stack.pop();
    current = stackTop.right;
  }
}

// 中序遍历 递归
function iterateTree3(treeNode) {
  if (treeNode.left) iterateTree(treeNode.left);
  if (treeNode) console.log(treeNode.value);
  if (treeNode.right) iterateTree(treeNode.right);
}

// 中序遍历 循环
function iterateTree4(treeNode) {
  const stack = [];
  let current = treeNode;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const stackTop = stack.pop();
    console.log(stackTop.value);
    current = stackTop.right;
  }
}

// 后序遍历 递归
function iterateTree5(treeNode) {
  if (treeNode.left) iterateTree(treeNode.left);
  if (treeNode.right) iterateTree(treeNode.right);
  if (treeNode) console.log(treeNode.value);
}

// 后序遍历 循环
function iterateTree6(treeNode) {
  const stack = [];
  let current = treeNode;
  let prev = null;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const stackTop = stack[stack.length - 1];
    if (!stackTop.right || stackTop.right === prev) {
      console.log(stackTop.value);
      prev = stack.pop();
    } else {
      current = stackTop.right;
    }
  }
}

// 层次遍历
function iterateTree7(root) {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr.value);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
}

// const treeNode = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//     },
//     right: {
//       value: 5,
//       left: {
//         value: 8,
//       },
//       right: {
//         value: 9,
//       }
//     }
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 6
//     },
//     right: {
//       value: 7,
//     }
//   }
// };
// iterateTree7(treeNode);
