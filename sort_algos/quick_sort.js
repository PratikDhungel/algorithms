const quickSort = (list) => {
  if (list.length < 1) {
    return list;
  }

  const pivot = list.splice(0, 1)[0];

  const lessThanPivot = [];
  const greaterThanPivot = [];

  for (let i = 0; i < list.length; i++) {
    const currentItem = list[i];
    if (currentItem <= pivot) {
      lessThanPivot.push(currentItem);
    } else greaterThanPivot.push(currentItem);
  }
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};

const numbersList = [89, 29, 14, 65, 93, 67, 23, 53, 82, 5, 21, 64, 80, 12, 71];
// const numbersList = [89, 29, 14, 65, 93];

const sortedList = quickSort(numbersList);

console.log(sortedList);
