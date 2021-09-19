
const pascalsTriangle = (numRows) => {
  let arr = [];

  if (numRows > 0) {
    arr.push([1]);
  } else {
    return [];
  }

  console.log(arr[0])


  for (let i = 1; i < numRows; i++) {
    let prevRow = arr[i - 1];
    let row = [1];

    for (let j = 0; j < prevRow.length - 1; j++) {
      let val = prevRow[j] + prevRow[j + 1];
      row.push(val);
    }

    row.push(1);
    arr.push(row);
  }
  return arr;
}

console.log(pascalsTriangle(5));

/*
[[1],
[1, 1],
[1, 2, 1],
[1, 3, 3, 1],
[1, 4, 6, 4, 1]]
*/