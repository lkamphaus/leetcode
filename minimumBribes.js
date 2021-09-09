function minimumBribes(q) {
  let length = q.length;
  let result = 0;

  for (let i = 0; i < length; i++) {
      let curr = i + 1;
      if (curr !== q[i] && q[i] > i) {
         let diff = Math.abs(q[i] - curr);

         if (diff > 2) {
           return 'Too chaotic';
         }

         result += diff;
      }
  }
  return result;
}


console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));