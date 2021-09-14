/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it. */

const reverseOnlyLetters = (s) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let j = s.length - 1;
  let i = 0;

  let arr = s.split('');

  while (i < j) {
    let lowerCaseI = arr[i].toLowerCase();
    let lowerCaseJ = arr[j].toLowerCase();
    if (alphabet.indexOf(lowerCaseI) > -1 && alphabet.indexOf(lowerCaseJ) > - 1) {
      let temp = arr[i];

      arr[i] = arr[j];
      arr[j] = temp;
      j--;
      i++;
    } else if (alphabet.indexOf(lowerCaseI) === -1) {
      i++;
    } else if (alphabet.indexOf(lowerCaseJ) === -1) {
      j--;
    }
  }

  return arr.join('');
}

console.log(reverseOnlyLetters('ab-cd')); //dc-ba
console.log(reverseOnlyLetters('"a-bC-dEf-ghIj"')); //j-Ih-gfE-dCba