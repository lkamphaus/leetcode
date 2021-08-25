//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letters of each string in an array;

const capitalizeFirst = (arr) => {
  let newArr = [];

  const inner = () => {
    if (arr.length === 0) {
        return;
    }

     let curr = arr[0];
     arr.shift();
     let firstCap = curr[0].toUpperCase();
     let lowerLetters = curr.substring(1);

     newArr.push(firstCap + lowerLetters);

     inner(arr);
  }
  inner();

  return newArr;
}


console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']