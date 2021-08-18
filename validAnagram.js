//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.


const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  let storage1 = arr1.reduce((map, el) => {
    if (map[el] !== undefined) {
      map[el]++
    } else {
      map[el] = 1;
    }
    return map
  }, {});

  let storage2 = arr2.reduce((map, el) => {
    if (map[el] !== undefined) {
      map[el]++
    } else {
      map[el] = 1;
    }
    return map
  }, {});


  for (let key in storage2) {
    if (!storage2[key]) {
      return false;
    }

    if (storage1[key] !== storage2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('qwerty', 'qeywrt')); //true
console.log(validAnagram('anagram', 'nagaram')); //true

//o(n) time complexity
