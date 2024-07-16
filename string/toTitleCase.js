function toTitleCase(str) {
  let result = "";
  let newWord =true;

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (char === " ") {
      result += char;
      newWord = true;
    } else {
      if (newWord) {
        result += char.toUpperCase();
        newWord = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }
  return result;
}

console.log(toTitleCase("this is a string"));
