
const bubbleSort = (arr) => {
  let swaps;
  for (let i = arr.length; i > 0; i--) {
    swaps = false;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaps = true;
      }
    }
    //if no swap then break out
    if (!swaps) {
      break;
    }
  }
  return arr;
}

const swap = (array, i1, i2) => {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
}

console.log(bubbleSort([7, 1, 4, 5, 6]));

//best case (nearly sorted) o(n)
//worst case o(n^2)