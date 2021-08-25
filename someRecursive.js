//Write a recursive function called someRecursion which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise return false.

const someRecursive = (arr, cb) => {
  let curr = arr.pop();
  if (cb(curr)) {
      return true;
  } else if (arr.length === 0) {
      return false;
  }

  return someRecursive(arr, cb)
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false