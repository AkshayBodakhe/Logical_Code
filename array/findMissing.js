// missing number in array
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
const array = [1, 2, 4, 5, 6, 7, 8, 9, 11]; // Missing number: 4
const missingNumber = findMissingNumber(array);
// console.log("Missing number:", missingNumber);

// all missing numbers in array
function prletMissingElements(arr, N) {
  let diff = arr[0] - 0; // Initialize the difference between the first element and its index

  for (let i = 0; i < N; i++) {
    // console.log('arr[i] - i ',arr[i] - i )
    if (arr[i] - i != diff) { // Check if the current element minus its index does not match the initial difference
      while (diff < arr[i] - i) { // Print all missing numbers until the difference matches the current element's difference
        console.log(i + diff + " "); // Print the missing number
        diff++; // Increment the difference
      }
    }
  }
}
arr = [1, 2, 6, 7, 10, 11, 13];
let N = arr.length;
prletMissingElements(arr, N);
