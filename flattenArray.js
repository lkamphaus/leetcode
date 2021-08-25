//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
  let res = [];

  let inner = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            inner(a[i]);
        } else {
            res.push(a[i]);
        }
    }

  }

  inner(arr);

  return res;
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]