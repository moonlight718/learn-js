class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSymmetric(root) {
  if (!root) return true;
  return recur(root.left, root.right);
  
}

function recur(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.val !== node2.val) return false;
  return recur(node1.left, node2.right) &&
  recur(node1.right, node2.left);
}



function buildTree (arr, index) {
  if (index >= arr.length) return null;
  
  const node = new TreeNode(arr[index]);
  node.left = buildTree(arr, index * 2);
  node.right = buildTree(arr, index * 2 + 1);

  return node;
}

const arr = [0, 1,2,2,2,null,2];

const root = buildTree(arr, 1);

console.log(isSymmetric(root));

