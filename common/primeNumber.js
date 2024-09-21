// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

const num = 17

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(num));

// console.log(Math.sqrt(num))

function printPrimesUpTo100() {
    for (let num = 2; num <= 100; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(num);
      }
    }
  }
  printPrimesUpTo100();