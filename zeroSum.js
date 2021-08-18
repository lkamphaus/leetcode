//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes values that sum to zero or undefined if a pair does not exist.


const zeroSum = (arr) => {

  let start = 0;
  let end = arr.length - 1;

  //while start is less than end
  for (; start < end;) {
    if (arr[start] + arr[end] === 0) {
      return [arr[start], arr[end]]
    } else if (arr[start] + arr[end] > 0) {
      end--
    } else if (arr[start] + arr[end] < 0) {
      start++
    }
  }
}


console.log(zeroSum([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(zeroSum([-10, -5, -2, 0, 1, 10, 13, 17, 19])); // [-10, 10]
console.log(zeroSum([-10, -5, -3, 0, 1, 2, 3, 4, 5, 13])); // [-5, 5]
console.log(zeroSum([1, 2, 3])); // undefined

//o(n) time complexity