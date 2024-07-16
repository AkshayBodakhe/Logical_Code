function replaceAllOccurances(str, find, replace) {
  if (find === "") {
    return str;
  }
  let result = "";
  let i = 0;

  while (i <= str.length - find.length) {
    let j;
    for (j = 0; j < find.length; j++) {
      if (str[i + j] !== find[j]) {
        break;
      }
    }
    if (j === find.length) {
      result = result + replace;
      i += find.length;
    } else {
      result += str[i];
      i++;
    }
  }

  result += str.slice(i);
  return result
}

console.log(replaceAllOccurances("hello world","world","everyone"))