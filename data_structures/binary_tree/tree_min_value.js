const Node = require('./binary_tree');

// Condition -> Tree contains at least one node
const treeMinValue = (root) => {
  // Add Base Case
  if (root === null) return Infinity;

  return Math.min(root.value, treeMinValue(root.left), treeMinValue(root.right));
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//          3
//       /    \
//       11    4
//      / \     \
//     4   2     1

console.log(treeMinValue(a));
