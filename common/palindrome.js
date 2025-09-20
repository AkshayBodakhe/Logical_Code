// A palindrome is a number or string that reads the same backward as forward.

// Reverse the number:
// Take the original number, extract its digits one by one from the end, and build a new number in reverse order.
// Compare:
// If the reversed number is the same as the original, it’s a palindrome.

let no = 12121;
let temp = no;
let rev = 0;
let rem;

function palindromeNum() {
  while (temp !== 0) {
    rem = temp % 10;
    console.log("rem =>", rem);
    rev = rev * 10 + rem;
    console.log("rev =>", rev);
    temp = Math.floor(temp / 10); // Use Math.floor() for integer division
    console.log("temp =>", temp);
    console.log("----");
  }

  if (no === rev) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
}

// more improvised version 
function isPalindromeNumber(num) {
  let temp = num;
  let rev = 0;

  while (temp > 0) {
    let rem = temp % 10;         // Get last digit
    rev = rev * 10 + rem;        // Build reversed number
    temp = Math.floor(temp / 10); // Remove last digit
  }

  return num === rev;
}

// Usage example:
// const number = 12121;
// if (isPalindromeNumber(number)) {
//   console.log(`${number} is a palindrome`);
// } else {
//   console.log(`${number} is not a palindrome`);
// }

// palindromeNum();

// -------------------------------------------------------------

// Reverse the string:
// Build a new string by appending characters from the end to the start.
// Compare:
// If the reversed string is the same as the original, it’s a palindrome.


function isPalindrome1(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        console.log(str[i], str[j])
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i])
        rev += str[i];
        // console.log(rev)
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(isPalindrome1(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

