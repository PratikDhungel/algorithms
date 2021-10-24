const Node = require('./binary_tree');

const breadthFirstSearch = (root) => {
  if (root === null) return [];

  const queue = [root];
  const traversedItems = [];

  while (queue.length > 0) {
    const topItem = queue.shift();
    traversedItems.push(topItem.value);

    topItem.left && queue.push(topItem.left);
    topItem.right && queue.push(topItem.right);
  }

  return traversedItems;
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

console.log(breadthFirstSearch(a));
