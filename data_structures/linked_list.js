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
      current = current.nextNode;
    }

    return size;
  };

  // Constant time operation = O(1)
  addItem = (value) => {
    let newItem = new Node(value);
    newItem.nextNode = this.head;
    this.head = newItem;
  };

  getItemAtIndex = (index) => {
    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.nextNode;
      i++;
    }

    return current;
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
  // Search node takes linear time = O(n)
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

  // Linear run operation = O(n)
  remove = (searchValue) => {
    let current = this.head;
    let previous = null;
    let found = false;

    while (current && !found) {
      if (current.value === searchValue && current === this.head) {
        found = true;
        this.head = current.nextNode;
      } else if (current.value === searchValue) {
        found = true;
        previous.nextNode = current.nextNode;
      } else {
        previous = current;
        current = current.nextNode;
      }
    }

    return current;
  };

  // Linear run operation = O(n)
  removeAtIndex = (index) => {
    let current = this.head;
    let position = index;

    if (position === 0) {
      this.head = current.nextNode;
      return current;
    }

    let previous = null;

    while (position > 0) {
      previous = current;
      current = current.nextNode;
      position -= 1;
    }

    previous.nextNode = current.nextNode;
    return current;
  };

  // Linear time operation = O(n)
  repr = () => {
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

// (() => {
//   const L1 = new LinkedList();
//   L1.addItem(11);
//   L1.addItem(32);
//   L1.addItem(35);
//   L1.addItem(14);
//   L1.addItem(89);
//   L1.addItem(973);
//   L1.addItem(531);

//   // console.log(L1.search(10));

//   // console.log(L1.repr());
//   // L1.insert(17, 4);
//   // console.log(L1.repr());

//   // console.log(L1.repr());
//   // console.log(L1.remove(11));
//   // console.log(L1.repr());

//   console.log(L1.repr());
//   L1.removeAtIndex(2);
//   console.log(L1.repr());
// })();

module.exports = LinkedList;
