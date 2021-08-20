//Write a function minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length pf a contiguous subarray of which the sum os greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.


const minSubArrayLen = (arr, target) => {

  let minLen = +Infinity;
  let tempSum = 0;

  let i = 0;
  let j = 0;

  while(i < arr.length) {
    if (tempSum >= target) {
      if (minLen > j - i) {
        minLen = j - i;
      }
      tempSum -= arr[i];
      i++;
    } else if (tempSum < target) {
      tempSum += arr[j];
      j++;
    } else {
      break;
    }
  }

  return minLen;
}


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) //2

//o(n) time complexity