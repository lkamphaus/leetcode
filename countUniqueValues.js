//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in array, but it will be sorted.


const countUniqueValues = (arr) => {
  let i = 0;
  let j = i + 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;

      let temp = arr[j];
      arr[i] = arr[j];
    }

    j++
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 6, 27])); //7

//o(n) time complexity
