//Write a function called binarySearch which accepts a sorted array and a values and returns the index at which the value exists. Otherwise, return -1

const binarySearchIterative = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((max + min) / 2);

  while (min <= max) {
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      min = mid + 1;
    }

    if (arr[mid] > target) {
      max = mid - 1;
    }

    mid = Math.floor((max + min) / 2);
  }
  return -1;

}

const binarySearchRecursive = (arr, target, min = 0, max = arr.length - 1) => {
  if (min > max) {
    return -1;
  }

  let mid = Math.floor((max + min) / 2);

  if (arr[mid] === target) {
    return mid;
  } if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, max);
  } else {
    return binarySearchRecursive(arr, target, min, mid - 1);
  }
}

console.log(binarySearchIterative([1, 2, 3, 4, 5], 2)) //1
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 4)) //3