
const reverseNumber = (n) => {
    let reversed = 0;
    let isNegative = n < 0

    if(isNegative){
        n = - n
    }

    while(n != 0){
        let lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10)
    }

    if(isNegative) {
        reversed= - reversed
    }

    return reversed
}

console.log(reverseNumber(543021))


// sort number

function sortn(...n) {
    for (let i = 0; i < n.length - 1; i++) {
      for (let j = 0; j < n.length - i - 1; j++) {
        if (n[j] > n[j + 1]) {
          // Swap n[j] and n[j + 1]
          let temp = n[j];
          n[j] = n[j + 1];
          n[j + 1] = temp;
        }
      }
    }
    return n;
  }
  
  // Example usage
  console.log(sortn(5, 3, 8, 1, 2, 7)); // Output: [1, 2, 3, 5, 7, 8]

  