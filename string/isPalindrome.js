
function isPalindrome (str) {
    let start = 0;
    let end = str.length -1;

    while(start < end){
      if(str[start] != str[end]){
        return false;
      }
      start++;
      end--;
    }
    return true
}

const string = 'madam'
const isPalindromeStr = isPalindrome(string)
console.log('isPalindromeStr =>',isPalindromeStr)