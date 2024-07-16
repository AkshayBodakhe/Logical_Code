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