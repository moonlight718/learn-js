class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function mirrorTree(root) {
  if (!root) return null;

  const stack = [ root ];

  while(stack.length) {
    const node = stack.shift();

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
    
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  return root;
}



function buildTree(arr, index) {
  if (index >= arr.length) return null;

  const node = new TreeNode(arr[index]);
  node.left = buildTree(arr, index * 2);
  node.right = buildTree(arr, index * 2 + 1);
  return node;
}

const arr = [0,1,2,3,4,5,6,7,8,9];
const root = buildTree(arr, 1);
const newRoot = mirrorTree(root);
console.log(newRoot);