function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if(str[i] === vowels[j]){
            count++
            break;
        }
    }
  }
  return count
}

console.log(countVowels("hello")); // Output: 2
console.log(countVowels("HELLO")); // Output: 2
console.log(countVowels("sky"));   // Output: 0

//-------------------------------------------

function countEachVowel(str) {
    let vowelCounts = { a: 0, e: 0, i: 0, o: 0, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0 };
    for (let i = 0; i < str.length; i++) {
        if (vowelCounts.hasOwnProperty(str[i])) {
            vowelCounts[str[i]]++;
        }
    }
    return vowelCounts;
}
// Example usage:
console.log(countEachVowel("hello")); // Output: { a: 0, e: 1, i: 0, o: 1, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0 }

