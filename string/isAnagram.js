function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (charCount[char] == undefined) {
      return false;
    } else {
      charCount[char]--;
      if (charCount[char] < 0) {
        return false;
      }
    }
  }

  for(let key in charCount){
    if(charCount[key] !== 0){
        return false
    }
  }
  return true
}

console.log(areAnagrams('listen','silent'))
console.log(areAnagrams("triangle", "integral"));
