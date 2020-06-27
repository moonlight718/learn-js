class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr, index) {
  if (index >= arr.length || !arr[index]) return null;
  const node = new TreeNode(arr[index]);
  node.left = buildTree(arr, index * 2 + 1);
  node.right = buildTree(arr, index * 2 + 2);
  return node;
}

const arr = [3,9,20,null,null,15,7];

const root = buildTree(arr, 0);

function levelOrder(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const len = queue.length;
    const layer = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      layer.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(layer);
  }
  return res;
}

console.log(levelOrder(root));