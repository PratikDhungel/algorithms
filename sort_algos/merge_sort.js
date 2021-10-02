// Time Complexity = O(log n)
const splitList = (list) => {
  // Divide given list using the midpoint
  const midPoint = Math.floor(list.length / 2);
  leftHalf = list.slice(0, midPoint);
  rightHalf = list.slice(midPoint);

  return { leftHalf, rightHalf };
};

// Time Complexity = O(n)
const mergeList = (left, right) => {
  let sortedList = [];
  let i = 0;
  let j = 0;

  // Compare each element from left and right and push to sorted list
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedList.push(left[i]);
      i++;
    } else {
      sortedList.push(right[j]);
      j++;
    }
  }

  // Push remaining elements from left to sorted list
  while (i < left.length) {
    sortedList.push(left[i]);
    i++;
  }

  // Push remaining elements from right to sorted list
  while (j < right.length) {
    sortedList.push(right[j]);
    j++;
  }

  return sortedList;
};

// Overall time complexity = O(n log n)
const mergeSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  // Divide
  const { leftHalf, rightHalf } = splitList(list);
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  // Combine
  return mergeList(left, right);
};

const verifySorted = (list) => {
  const length = list.length;

  // Check if list is empty or a single element
  if (list.length <= 1) {
    return true;
  }

  return list[0] < list[1] && verifySorted(list.slice(1));
};

const numbersList = [89, 29, 14, 65, 93, 67, 23, 53, 82, 5, 21, 64, 80, 12, 71];
const sortedList = mergeSort(numbersList);
console.log(sortedList);

// console.log(verifySorted(numbersList));
// console.log(verifySorted(sortedList));
