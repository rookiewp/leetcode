// 给定两个二叉树，编写一个函数来检验它们是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例1:

// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true
// 示例 2:

// 输入:      1          1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// 输出: false
// 示例3:

// 输入:       1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// 输出: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 使用递归
function isSameTree(p, q) {
  // 如果2个节点都为null, 认为相等
  if (!p && !q) return true;

  // 如果有一个节点为null, 则认为不等
  if ((p && !q) || (!p && q)) return false;

  // 如果2个节点都存在，比较2个节点的值是否相等
  if (p.val !== q.val) return false;

  // 比较左节点
  if (!isSameTree(p.left, q.left)) return false;

  // 比较右节点
  if (!isSameTree(p.right, q.right)) return false;

  return true;
}

// 使用循环
function isSameTree2(p, q) {
  // 如果2个树都为null, 认为相等
  if (!p && !q) return true;

  // 如果有一个数为null, 则认为不等
  if ((p && !q) || (!p && q)) return false;

  const queue = [p, q];
  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    // 如果2个节点都不存在，continue
    if (!node1 && !node2) continue;

    // 如果有一个数为null, 则认为不等
    if ((node1 && !node2) || (!node1 && node2)) return false;

    // 如果2个节点都存在，比较值是否相等
    if (node1.val !== node2.val) return false;

    queue.push(node1.left, node2.left, node1.right, node2.right);
  }
  return true;
}
