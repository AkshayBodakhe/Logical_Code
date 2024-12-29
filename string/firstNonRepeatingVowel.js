function firstNonRepeatingVowel(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const frequency = {};

  for (const char of str) {
    if (vowels.has(char)) {
      frequency[char] = (frequency[char] || 0) + 1;
    //   console.log(frequency);
    }
  }

  for(const char of str){
    if(vowels.has(char) && frequency[char] == 1){
        return char
    }
  }
  // console.log(frequency);
  return null
}

const result = firstNonRepeatingVowel("liveinbengalore");

console.log(result)