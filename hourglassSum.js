

function hourglassSum(arr) {
  let max = 0;

  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          let first = arr[i][j];
          let second = arr[i][j + 1];
          let third = arr[i][j + 2];
          let fourth = arr[i + 1][j + 1];
          let fifth = arr[i + 2][j];
          let sixth = arr[i + 2][j + 1];
          let seventh = arr[i + 2][j + 2];

          let hourglass = [first, second, third, fourth, fifth, sixth, seventh];

          let sum = hourglass.reduce((prev, curr) => {
              return prev + curr;
          }, 0);

          max = Math.max(max, sum);


      }
  }

  return max;
}

let input = [[1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]];



console.log(hourglassSum(input));