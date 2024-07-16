function startsWith(str, substr) {
  if (substr.length > str.length) {
    return false;
  }

  for (let i = 0; i < substr.length; i++) {
    if (str[i] !== substr[i]) {
      return false;
    }
  }
  return true
}

console.log(startsWith("hello world","hello"))