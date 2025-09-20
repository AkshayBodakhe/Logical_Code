
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example usage
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
  console.log(reverseString("12345")); // Output: "54321"
  
  