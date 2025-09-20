// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all original letters exactly once.

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}


console.log(areAnagrams('listen','silent'))
console.log(areAnagrams("triangle", "integral"));
