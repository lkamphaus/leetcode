const selectionSort = (arr) => {
  let min = arr[0];
  let index;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;

    //reset min
    min = arr[i + 1];
    index = i + 1;
  }

  return arr;
}

console.log(selectionSort([7, 1, 4, 5, 6]));
console.log(selectionSort([9, 5, 2, 3, 4, 1]));