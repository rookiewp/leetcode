// const tree = {
//   value: 1,
//   isIterated: false,
//   left: {
//     value: 2,
//     isIterated: false,
//     left: {
//       isIterated: false,
//       value: 4,
//     },
//     right: {
//       isIterated: false,
//       value: 5,
//     }
//   },
//   right: {
//     isIterated: false,
//     value: 3,
//   }
// };

// 使用递归，前序遍历
function iterateTree(treeNode) {
  console.log(treeNode.value);
  if (treeNode.left) {
    iterateTree(treeNode.left);
  }
  if (treeNode.right) {
    iterateTree(treeNode.right);
  }
}

// 使用循环（stack），前序遍历，该方法需要给treeNode加额外的字段isIterated来表示改节点是否被遍历过？
function iterateTree2(treeNode) {
  const stack = [treeNode];
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (iterateTree2.isPopTreeNode(currentNode)) {
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
// 判断节点是否需要被pop出stack
iterateTree2.isPopTreeNode = function(treeNode) {
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
};

// iterateTree(tree);
