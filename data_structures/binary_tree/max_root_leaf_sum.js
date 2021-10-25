const Node = require('./binary_tree');

// Condition -> Tree contains at least one node
const maxRootLeafSum = (root) => {
  // Add Base Case
  if (root === null) return -Infinity;

  // If both children are null, ignore recursion and return value
  if (root.left === null && root.right === null) return root.value;

  const leftValue = maxRootLeafSum(root.left);
  const rightValue = maxRootLeafSum(root.right);

  console.log(`Returning, ${root.value} + ${Math.max(leftValue, rightValue)}`);
  return root.value + Math.max(leftValue, rightValue);
};

const a = new Node(5);
const b = new Node(11);
const c = new Node(35);
const d = new Node(4);
const e = new Node(2);
const f = new Node(-10);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//          5
//       /    \
//       11    35
//      / \     \
//     4   2     -10

console.log(maxRootLeafSum(a));
