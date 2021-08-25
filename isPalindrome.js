//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise it returns false

const isPalindrome = (s) =>{
  let letters = s.split('');

  if (letters[0] !== letters.pop()) {
      return false;
  } else if (s.length <= 1) {
      return true;
  }

return isPalindrome(s.substring(1, s.length -1));
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false