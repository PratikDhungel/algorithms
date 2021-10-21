const selectionSort = (list) => {
  const sortedList = [];
  const listLength = list.length;

  for (let i = 0; i < listLength; i++) {
    const minItemIndex = getMinItemIndex(list);

    sortedList.push(list.splice(minItemIndex, 1)[0]);
  }

  return sortedList;
};

const getMinItemIndex = (list) => {
  let minIndex = 0;

  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
};

const numbersList = [89, 29, 14, 65, 93, 67, 23, 53, 82, 5, 21, 64, 80, 12, 71];
// const numbersList = [89, 29, 14, 65, 93];

console.log(selectionSort(numbersList));
