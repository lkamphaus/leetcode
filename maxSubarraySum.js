//Write function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, n) => {
  if (arr.length === 0) {
    return null;
  }

  let max = -Infinity;

  //first subarray sum
  let tempMax = sum(arr.slice(0, n));

  //start from n
  for (let i = n; i < arr.length; i++) {
    tempMax = tempMax - arr[i - n] + arr[i];
    if (max < tempMax) {
      max = tempMax;
    }
  }

  return max;
}

const sum = (arr) => {
  let sum = 0;

  arr.forEach(el => {
    return sum += el;
  });

  return sum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([], 3)); //6

//o(n) time complexity
