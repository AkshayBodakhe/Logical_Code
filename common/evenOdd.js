const checkEvenOdd = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return null;
  }
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
};

console.log(checkEvenOdd(10)); 
// console.log(checkEvenOdd(4));

function analyzeArray(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      return null;
    }
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
      countEven++;
    } else {
      sumOdd += arr[i]; 
      countOdd++;
    }
  }
  return {sumEven,sumOdd,countEven,countOdd}
}

const array = [1, 2, 3, 3, 2, 4, 5, 3, 5, 3, 6, 7];
const result = analyzeArray(array);
// console.log('Sum of even numbers:', result.sumEven);
// console.log('Sum of odd numbers:', result.sumOdd);
// console.log('Count of even numbers:', result.countEven);
// console.log('Count of odd numbers:', result.countOdd);
