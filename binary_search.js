const binarySearch = (list, target) => {
  if (list.length === 0) return false;

  const midpoint = Math.floor(list.length / 2);

  if (list[midpoint] === target) {
    return true;
  }

  if (target < list[midpoint]) {
    return binarySearch(list.slice(0, midpoint - 1), target);
  }

  if (target > list[midpoint]) {
    return binarySearch(list.slice(midpoint + 1), target);
  }
};

const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(binarySearch(sortedList, 11));
console.log(binarySearch(sortedList, 15));
