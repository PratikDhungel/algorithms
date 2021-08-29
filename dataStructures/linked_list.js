class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = null;
  }

  getValue = () => {
    return this.value;
  };
}

const N1 = new Node(10);
N1.getValue();

class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  isEmpty = () => {
    return this.head === null;
  };

  // Linear time operation = O(n)
  getSize = () => {
    let size = 0;
    let current = this.head;

    while (current) {
      size += 1;
      current = this.nextNode;
    }
    return size;
  };

  addItem = (value) => {
    let newItem = new Node(value);
    newItem.nextNode = this.head;
    this.head = newItem;
  };
}

const L1 = new LinkedList();
L1.addItem(1);
L1.addItem(2);
L1.addItem(3);
L1.addItem(4);

console.log(L1);
console.log(L1.getSize());
