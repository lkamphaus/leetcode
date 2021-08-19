//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.


const areThereDuplicates = (...args) => {

  const storage = args.reduce((map, el) => {
    if (map[el] !== undefined) {
      map[el]++
    } else {
      map[el] = 1;
    }

    return map;
  }, {});

  for (let key in storage) {
    if (storage[key] >= 2) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

//o(n) time complexity
