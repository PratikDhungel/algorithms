const Node = require('./binary_tree');

const breadthFirstSearch = (root, target) => {
  if (root === null) return [];

  const queue = [root];

  while (queue.length > 0) {
    const topItem = queue.shift();

    if (topItem.value === target) return true;

    topItem.left && queue.push(topItem.left);
    topItem.right && queue.push(topItem.right);
  }

  return false;
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

console.log(breadthFirstSearch(a, 'f'));
