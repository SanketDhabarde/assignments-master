/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  for(let i=0;i<str1.length;i++) {
    let char = str1[i].toLowerCase();
    if(!str2.toLowerCase().includes(char)) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
