//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (s) => {

  let res = '';
  let copy = s.slice();

  let inner = (str) => {
     if (str.length === 0) {
         return;
     }
     res += str[str.length -1];
     inner(str.slice(0, str.length - 1))
  }
  inner(copy);

  return res;
}

console.log(reverse('awesome')); // 'emosewa'