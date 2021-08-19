//Write a function sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

const sameFrequency = (num1, num2) => {
  let str1 = num1.toString().split('');
  let str2 = num2.toString().split('');

  if (str1.length !== str2.length) {
    return false;
  }

  let frequency1 = str1.reduce((map, el) => {
    if (map[el] !== undefined) {
      map[el]++
    } else {
      map[el] = 1;
    }
    return map;
  }, {});

  let frequency2 = str2.reduce((map, el) => {
    if (map[el] !== undefined) {
      map[el]++
    } else {
      map[el] = 1;
    }
    return map;
  }, {});

  for (let key in frequency1) {
    if (!frequency2[key]) {
      return false;
    }

    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false

//o(n) time complexity