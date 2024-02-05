/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const specialCharRegx = /[^a-zA-Z0-9 ]/g;
  let newStr = str.split(" ").join("").replace(specialCharRegx, "");
  let first = 0;
  let last = newStr.length - 1;
  while (first <= last) {
    if (newStr[first].toLowerCase() !== newStr[last].toLowerCase()) return false;
    first++;
    last--;
  }
  return true;
}

module.exports = isPalindrome;
