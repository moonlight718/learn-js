class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const res= [];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
}

const arr = [3,9,20,null,null,15,7];

function buildTree(arr, index) {
  if (index >= arr.length || !arr[index]) return null;
  const root = new TreeNode(arr[index]);
  root.left = buildTree(arr, index * 2 + 1);
  root.right = buildTree(arr, index * 2 + 2);
  return root;
}

const root = buildTree(arr, 0);

console.log(levelOrder(root));


