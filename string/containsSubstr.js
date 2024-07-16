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
    if(j === substr.length){
        return true
    }
  }
  return false
}

console.log(containsSubstring("hello world", "world"));