function containsSubstring(str, substr) {
  if (substr.length === 0) {
    return true;
  }
  for (let i = 0; i <= str.length - substr.length; i++) {
    let j;
    for (j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        break;
      }
    }
    if (j === substr.length) {
      return true;
    }
  }
  return false;
}

console.log(containsSubstring("hello world", "world"));

// Similar Programs
// Check if a string starts with a given substring (manual, no inbuilt methods)
// Check if a string ends with a given substring
// Find the first index of a substring in a string
// Count occurrences of a substring in a string
// Replace all occurrences of a substring with another substring
// Extract all substrings of a given length
// Check if two strings are anagrams
// Reverse a substring within a string
// Find the longest common substring between two strings
// Check if a string is a rotation of another string
