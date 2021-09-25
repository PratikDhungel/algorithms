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
  search = (key) => {
    let current = this.head;

    while (current) {
      if (current.value === key) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
    return null;
  };

  // Insertion takes constant time = O(1)
  //  Search node takes linear time = O(n)
  // Overall O(n)
  insert = (value, index) => {
    if (index === 0) {
      this.addItem(value);
    }

    // TODO: Add check for index being greater than size of the list

    if (index > 0) {
      let newItem = new Node(value);

      let position = index;
      let current = this.head;

      // Execute loop until it points to the item before the index
      while (position > 1) {
        current = current.nextNode;
        position -= 1;
      }

      newItem.nextNode = current.nextNode;
      current.nextNode = newItem;
    }
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
L1.addItem(11);
L1.addItem(32);
L1.addItem(35);
L1.addItem(14);

// console.log(L1.search(10));

console.log(L1.representation());
L1.insert(17, 4);
console.log(L1.representation());
