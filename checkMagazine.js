function checkMagazine(magazine, note) {


}



let arr1 = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
let arr2 = ['ive', 'got', 'some', 'coconuts'];

let arr3 = ['give', 'me', 'one', 'grand', 'today', 'night'];
let arr4 = ['give', 'one', 'grand', 'today'];

let arr5 = ['two', 'times', 'three', 'is', 'not', 'four'];
let arr6 = ['two', 'times', 'two', 'is', 'four'];

console.log(checkMagazine(arr1, arr2)); //no
console.log(checkMagazine(arr3, arr4)); //yes
console.log(checkMagazine(arr5, arr6)); //no