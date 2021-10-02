const LinkedList = require('../data_structures/linked_list');

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

const mergeSort = (linkedList) => {
  if (linkedList.getSize() <= 1) {
    return linkedList;
  }

  const { leftHalf, rightHalf } = splitList(linkedList);
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  // const sortedList = mergeList(sortedLeft, sortedRight);

  // return sortedList;
};

const LL = new LinkedList();

LL.addItem(32);
LL.addItem(14);
LL.addItem(11);
// LL.addItem(973);
// LL.addItem(89);
// LL.addItem(35);
// LL.addItem(531);
// LL.addItem(22);
// LL.addItem(48);

mergeSort(LL);
