
function isDigitOnly(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if(char < '0' || char > '9'){
        return false
    }
  }
  return true
}

console.log(isDigitOnly("123456")); 