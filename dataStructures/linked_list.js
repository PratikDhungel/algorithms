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

  // Constant time operation = O(1)
  addItem = (value) => {
    let newItem = new Node(value);
    newItem.nextNode = this.head;
    this.head = newItem;
  };

  // Linear time operation = O(n)
  representation = () => {
    const currentList = [];
    let current = this.head;

    while (current) {
      if (current === this.head) {
        currentList.push(`Head ${current.value}`);
      } else if (current.nextNode === null) {
        currentList.push(`Tail ${current.value}`);
      } else {
        currentList.push(current.value);
      }

      current = current.nextNode;
    }

    return currentList;
  };
}

const L1 = new LinkedList();
L1.addItem(1);
L1.addItem(2);
L1.addItem(3);
L1.addItem(4);

console.log(L1);
console.log(L1.getSize());
console.log(L1.representation());
