function isPalindrome(line) {
  let newLine = line.slice(0).split("").reverse().join("");
  return newLine === line;
}
module.exports = isPalindrome;
