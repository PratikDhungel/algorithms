const Node = require('./binary_tree');

const depthFirstSearch = (root) => {
  if (root === null) return [];

  const stack = [root];
  const traversedItems = [];

  while (stack.length > 0) {
    const topItem = stack.pop();
    traversedItems.push(topItem.value);

    topItem.right && stack.push(topItem.right);
    topItem.left && stack.push(topItem.left);
  }

  return traversedItems;
};

const depthFirstSearchRecursive = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstSearchRecursive(root.left);
  const rightValues = depthFirstSearchRecursive(root.right);

  return [root.value, ...leftValues, ...rightValues];
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

console.log(depthFirstSearch(a));
console.log(depthFirstSearchRecursive(a));
