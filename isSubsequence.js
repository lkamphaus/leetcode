//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequences of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {

  let j = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[j] === str2[i]) {
      j++
    }
  }

  return j === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('abc', 'acb')); //false

//o(n) time complexity
