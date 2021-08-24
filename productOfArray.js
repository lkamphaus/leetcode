//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (!arr.length) {
    return 1;
  }

  return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])) //6
console.log(productOfArray([1, 2, 3, 10])) //60
