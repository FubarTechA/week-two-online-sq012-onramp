function missingNumber(numArr) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!numArr.includes(nums[i])) result.push(nums[i]);
  }
  if (result.length === 0) return false;
  if (result.length === 1) return result[0];

  return result;
}

module.exports = missingNumber;
