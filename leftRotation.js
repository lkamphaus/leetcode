function rotLeft(a, d) {
  // Write your code here

  for (let i = 0; i < d; i++) {
      let first = a.shift();
      a.push(first);
  }

  return a;
}

//time complexity O(m)

let input = [1, 2, 3, 4, 5];

console.log(rotLeft(input, 4)) // [ 5, 1, 2, 3, 4]