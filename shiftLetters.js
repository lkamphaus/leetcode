var shiftingLetters = function(s, shifts) {
  let alphabet = {
      a: '1',
      b: '2',
      c: '3',
      d: '4',
      e: '5',
      f: '6',
      g: '7',
      h: '8',
      i: '9',
      j: '10',
      k: '11',
      l: '12',
      m: '13',
      n: '14',
      o: '15',
      p: '16',
      q: '17',
      r: '18',
      s: '19',
      t: '20',
      u: '21',
      v: '22',
      w: '23',
      x: '24',
      y: '25',
      z: '26'
  };

  let alphabet2 = {
      1: 'a',
      2: 'b',
      3: 'c',
      4: 'd',
      5: 'e',
      6: 'f',
      7: 'g',
      8: 'h',
      9: 'i',
      10: 'j',
      11: 'k',
      12: 'l',
      13: 'm',
      14: 'n',
      15: 'o',
      16: 'p',
      17: 'q',
      18: 'r',
      19: 's',
      20: 't',
      21: 'u',
      22: 'v',
      23: 'w',
      24: 'x',
      25: 'y',
      26: 'z'
  };

  let numbers = [];
  let currSum = 0;

  for (let i = shifts.length - 1; i >= 0; i--) {
    numbers.push((shifts[i]) + currSum);
    currSum += shifts[i];
  }

  let newShifts = numbers.reverse();

  let newPositions = [];

  for (let i = 0; i < s.length; i++) {
    let startIndex = parseInt(alphabet[s[i]]);
    let endIndex = newShifts[i];

    let diff = startIndex + endIndex;

    if (diff > 26) {
        let position = Math.ceil(diff % 26) ? Math.ceil(diff % 26) : 26;
      newPositions.push(position)
    } else {
      newPositions.push(diff);
    }
  }

    console.log(newPositions);

  let count = 0;
  let res = '';

    for (let i = 0; i < newPositions.length; i++) {

       if (alphabet2[newPositions[i]]) {
           res += alphabet2[newPositions[i]]
       }
    }

    return res;
};

console.log(shiftingLetters('aaa', [1, 2, 3]));
console.log(shiftingLetters('abc', [3, 5, 9]));