const Node = require('./binary_tree');

const treeIncludesDFS = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;

  return treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(treeIncludesDFS(a, 'f'));
