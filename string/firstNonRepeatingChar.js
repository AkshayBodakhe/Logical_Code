function firstNonRepeatingCharacter(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("racecars")); // Output: "e"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
