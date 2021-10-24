const Node = require('./binary_tree');

const treeSumDFS = (root) => {
  if (root === null) return 0;

  return root.value + treeSumDFS(root.left) + treeSumDFS(root.right);
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

//          a
//       /    \
//       b    c
//      / \     \
//     d   e     f

console.log(treeSumDFS(a));
