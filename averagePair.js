//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const averagePair = (arr, target) => {

  let i = 0;
  let j = arr.length - 1;

  while(i < j ) {
    if (arr[i] + arr[j] / 2 === target) {
      return true;
    } else if (arr[i] + arr[j] / 2 > target) {
      j--
    } else if (arr[i] + arr[j] / 2 < target) {
      i++
    }

  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)) //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true

//o(n) time complexity