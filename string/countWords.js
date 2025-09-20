function countWords(str) {
  let inWord = false;
  let wordCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inWord) {
        inWord = true;
        wordCount++
    }else if(str[i] === ' '&& inWord){
        inWord = false
    }
  }
  return wordCount
}

const string = 'this is a string'

const wordCount = countWords(string)

console.log(wordCount)

// 🧠 Similar Questions to Practice
// Here are some problems you can try next:
// Count characters without spaces
// Count vowels and consonants in a string

// Reverse words in a string
// Input: "this is a string" → Output: "string a is this"

// Capitalize first letter of each word
// Input: "hello world" → Output: "Hello World"

// Find the longest word in a sentence
// Check if two strings are anagrams
// Count frequency of each word in a sentence
// Remove extra spaces (multiple to single)
// Check if a sentence is a palindrome (ignoring spaces and punctuation)
// Split string into array of words without using .split()