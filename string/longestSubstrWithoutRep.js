function longestSubstringWithoutRepeatingCharacters(str) {
  let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end]

    if(seen[char] !== undefined && seen[char] >= start){
        start = seen[char] + 1;
    }
    seen[char] = end;
    maxLength = Math.max(maxLength, end - start +1)
  }
  return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters("abcdeabc"))
