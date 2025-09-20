let a = 0;
let b = 1;
let c;

function printFibonacci(n) {
  for (i = 1; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

printFibonacci(10)

function printFibonacciRecSeq(n, a = 0, b = 1) {
  if (n === 0) return;
  console.log(a);
  printFibonacciRecSeq(n - 1, b, a + b);
}

// Example usage:
// printFibonacciRecSeq(10); // Prints first 10 Fibonacci numbers