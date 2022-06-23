function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let str1Arr = str1.split("").sort((a, b) => a - b);
  let str2Arr = str2.split("");

  let count = 0;

  for (let i = 0; i < str1Arr.length; i++) {
    let letter = str1Arr[i];
    if (str2Arr.includes(letter)) {
      count++;
      str1Arr.shift();
      str2Arr.splice(str2Arr.indexOf(letter), 1);
      i--;
    }
  }
  return count === str2.length && count === str1.length;
}
module.exports = isAnagram;
