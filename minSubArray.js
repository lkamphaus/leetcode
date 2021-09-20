var minSubArrayLen = function(target, nums) {
  let res = +Infinity;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      while (sum >= target) {
          res = Math.min(res, i - j + 1);
          sum -= nums[j++];
      }
  }


   return res === +Infinity ? 0 : res;

};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) // 2