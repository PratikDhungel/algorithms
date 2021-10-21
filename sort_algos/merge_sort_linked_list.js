const LinkedList = require('../data_structures/linked_list');

// Takes O(k log n) time
const splitList = (linkedList) => {
  let leftHalf = null;
  let rightHalf = null;

  // if (linkedList.head === null) {
  //   leftHalf = linkedList;
  // }

  const midPoint = Math.floor(linkedList.getSize() / 2);
  const midNode = linkedList.getItemAtIndex(midPoint - 1);
  leftHalf = linkedList;
  rightHalf = new LinkedList();
  rightHalf.head = midNode.nextNode;
  midNode.nextNode = null;

  return { leftHalf, rightHalf };
};

// Takes O(n) time
const mergeList = (leftHalf, rightHalf) => {
  const merged = new LinkedList();

  // Add a fake head to simplify code, will be removed later
  merged.addItem(0);
  currentHead = merged.head;

  leftHead = leftHalf.head;
  rightHead = rightHalf.head;

  while (leftHead || rightHead) {
    // If there are no items in left list, add all items from right node to merged list
    if (leftHead === null) {
      currentHead.nextNode = rightHead;
      rightHead = rightHead.nextNode;
    }
    // If there are no items in right list, add all items from left node to merged list
    else if (rightHead === null) {
      currentHead.nextNode = leftHead;
      leftHead = leftHead.nextNode;
    }
    // Condition of comparison of items
    else {
      // If left item is smaller than right, add it to merged list
      // Move leftHead to next node
      if (leftHead.value < rightHead.value) {
        currentHead.nextNode = leftHead;
        leftHead = leftHead.nextNode;
      } else {
        currentHead.nextNode = rightHead;
        rightHead = rightHead.nextNode;
      }
    }
    currentHead = currentHead.nextNode;
  }

  // Remove fake head

  const newHead = merged.head.nextNode;
  merged.head = newHead;

  return merged;
};

// Overall run time: O(kn log n)
const mergeSort = (linkedList) => {
  if (linkedList.getSize() <= 1) {
    return linkedList;
  }

  const { leftHalf, rightHalf } = splitList(linkedList);
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  const sortedList = mergeList(sortedLeft, sortedRight);

  return sortedList;
};

const LL = new LinkedList();

LL.addItem(32);
LL.addItem(14);
LL.addItem(11);
LL.addItem(973);
LL.addItem(89);
LL.addItem(35);
LL.addItem(531);
LL.addItem(22);
LL.addItem(48);

const sortedList = mergeSort(LL);
console.log(sortedList.repr());
