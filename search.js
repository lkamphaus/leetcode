//Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed to the function is located. If the value is not found, return -1.


const search = (arr, value, min = 0, max = arr.length - 1) => {

  if (min > max) {
    return -1;
  }

  let middle = Math.floor((max + min) / 2);

  if (arr[middle] === value) {
    return middle;
  } else if (value > arr[middle]) {
    return search(arr, value, middle + 1 , max);
  } else if (value < arr[middle]) {
    return search(arr, value, min, middle - 1);
  }

}

console.log(search([1, 2, 3, 4, 5, 6], 4)) //3
console.log(search([1, 2, 3, 4, 5, 6], 6)) //5
console.log(search([1, 2, 3, 4, 5, 6], 8)) //-1