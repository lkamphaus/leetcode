//Write a function called binarySearch which accepts a sorted array and a values and returns the index at which the value exists. Otherwise, return -1

const binarySearch = (arr, target) => {
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

console.log(binarySearch([1, 2, 3, 4, 5], 2)) //2