const a = [2, 4, 7, 3];

let sumOfAll = 0;
let sumOfEven = 0;
let sumOfOdd = 0;

let average = 0;

for (let i = 0; i < a.length; i++) {
  sumOfAll = sumOfAll + a[i];
  average = sumOfAll / a.length
  if (a[i] % 2 == 0) {
    sumOfEven += a[i];
  } else {
    sumOfOdd += a[i];
  }
}

console.log("sum of all elements", sumOfAll);

console.log("sum of all even", sumOfEven);

console.log("sum of all odd", sumOfOdd);

console.log("average of all", average);

