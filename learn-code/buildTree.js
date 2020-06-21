class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preOrder, inOrder) {
  const inOrderMap = {};
  const length = inOrder.length;

  for (let i = 0; i < length; i++) {
    inOrderMap[inOrder[i]] = i;
  }

  const root = build(preOrder, 0, length - 1, inOrder, 0, length - 1, inOrderMap);
  return root;
}

function build (preOrder, preOrderStart, preOrderEnd, inOrder, inOrderStart, inOrderEnd, inOrderMap) {
  if (preOrderStart > preOrderEnd) return null;
  const nodeVal = preOrder[preOrderStart];
  const inOrderIndex = inOrderMap[nodeVal];
  const leftTreeNodeCount = inOrderIndex - inOrderStart;
  const rightTreeNodeCount = inOrderEnd - inOrderIndex;
  const node = new TreeNode(nodeVal);
  node.left = build(
    preOrder,
    preOrderStart + 1,
    preOrderStart + leftTreeNodeCount,
    inOrder,
    inOrderStart,
    inOrderIndex - 1,
    inOrderMap);
  node.right = build(
    preOrder,
    preOrderEnd - rightTreeNodeCount + 1,
    preOrderEnd,
    inOrder,
    inOrderIndex + 1, 
    inOrderEnd,
    inOrderMap
  );
  return node;
}

const preOrder = [3];
const inOrder = [3];

console.log(buildTree(preOrder, inOrder));

