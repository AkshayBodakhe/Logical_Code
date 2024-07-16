function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const string = "this is a string";

const reversed = reverseString(string);

console.log("reversed =>", reversed);
