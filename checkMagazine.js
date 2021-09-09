function checkMagazine(magazine, note) {

  let magObj = {};
  let noteObj = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magObj[magazine[i]] === undefined) {
      magObj[magazine[i]] = 1;
    } else {
      magObj[magazine[i]]++;
    }
  }

  for (let i = 0; i < note.length; i++) {
    if (magObj[note[i]]) {
      magObj[note[i]]--

      if (magObj[note[i]] < 0) {
        return 'No';
      }
    }

    if (magObj[note[i]] === undefined) {
      return 'No';
    }
  }

  return 'Yes';
}



let arr1 = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
let arr2 = ['ive', 'got', 'some', 'coconuts'];

let arr3 = ['give', 'me', 'one', 'grand', 'today', 'night'];
let arr4 = ['give', 'one', 'grand', 'today'];

console.log(checkMagazine(arr1, arr2)); //no
console.log(checkMagazine(arr3, arr4)); //yes