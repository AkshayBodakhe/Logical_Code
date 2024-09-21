let number = 2;

function printNumber(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// printNumber()

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} =`, num * i);
  }
  console.log("---------");
}

// printTable(3)

function checkEvenOdd(num) {
  if (typeof num !== "number") {
    console.log("this is not a number");
    return null;
  }
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// checkEvenOdd("a");

// checkEvenOdd(203);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

// console.log(Math.sqrt(7))
