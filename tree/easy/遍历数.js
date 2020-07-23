const tree = {
  value: 1,
  isIterated: false,
  left: {
    value: 2,
    isIterated: false,
    left: {
      isIterated: false,
      value: 4,
    },
    right: {
      isIterated: false,
      value: 5,
    }
  },
  right: {
    isIterated: false,
    value: 3,
  }
};

// 使用递归

// 前序遍历
function iterateTree(treeNode) {
  console.log(treeNode.value);
  if (treeNode.left) {
    iterateTree(treeNode.left);
  }
  if (treeNode.right) {
    iterateTree(treeNode.right);
  }
}
// 中序遍历
function iterateTree2(treeNode) {
  if (treeNode.left) {
    iterateTree(treeNode.left);
  }
  console.log(treeNode.value);
  if (treeNode.right) {
    iterateTree(treeNode.right);
  }
}
// 后序遍历
function iterateTree3(treeNode) {
  if (treeNode.left) {
    iterateTree(treeNode.left);
  }
  if (treeNode.right) {
    iterateTree(treeNode.right);
  }
  console.log(treeNode.value);
}

// 判断节点是否需要被pop出stack
function isPopTreeNode(treeNode) {
  let result = false;
  if (treeNode.isIterated) {
    if (!treeNode.left && !treeNode.right) {
      result = true;
    }
    if (treeNode.left && !treeNode.right && treeNode.left.isIterated) {
      result = true;
    }
    if (!treeNode.left && treeNode.right && treeNode.right.isIterated) {
      result = true;
    }
    if (treeNode.left && treeNode.right
      && treeNode.left.isIterated && treeNode.right.isIterated
    ) {
      result = true;
    }
  }
  return result;
}

// 使用循环（stack），要给treeNode加额外的字段isIterated来表示改节点是否被遍历过？

// 前序遍历
function iterateTree4(treeNode) {
  const stack = [treeNode];
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (isPopTreeNode(currentNode)) {
      stack.pop();
      continue;
    }
    if (!currentNode.isIterated) {
      console.log(currentNode.value);
      currentNode.isIterated = true;
    }

    const leftNode = currentNode.left;
    if (leftNode && !leftNode.isIterated) {
      stack.push(leftNode);
      continue;
    }

    const rightNode = currentNode.right;
    if (rightNode && !rightNode.isIterated) {
      stack.push(rightNode);
    }
  }
}
// 中序遍历
function iterateTree5(treeNode) {
  const stack = [treeNode];
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (isPopTreeNode(currentNode)) {
      stack.pop();
      continue;
    }

    const leftNode = currentNode.left;
    if (leftNode && !leftNode.isIterated) {
      stack.push(leftNode);
      console.log(leftNode.value);
      leftNode.isIterated = true;
      continue;
    }

    if (!currentNode.isIterated) {
      console.log(currentNode.value);
      currentNode.isIterated = true;
    }

    const rightNode = currentNode.right;
    if (rightNode && !rightNode.isIterated) {
      stack.push(rightNode);
    }
  }
}

// 中序遍历
function iterateTree6(treeNode) {
  const stack = [treeNode];
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (isPopTreeNode(currentNode)) {
      stack.pop();
      continue;
    }

    const leftNode = currentNode.left;
    if (leftNode && !leftNode.isIterated) {
      stack.push(leftNode);
      console.log(leftNode.value);
      leftNode.isIterated = true;
      continue;
    }

    const rightNode = currentNode.right;
    if (rightNode && !rightNode.isIterated) {
      stack.push(rightNode);
      console.log(rightNode.value);
      rightNode.isIterated = true;
      continue;
    }

    if (!currentNode.isIterated) {
      console.log(currentNode.value);
      currentNode.isIterated = true;
    }
  }
}
