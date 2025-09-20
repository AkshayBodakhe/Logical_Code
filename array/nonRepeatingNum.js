// function findNonRepeatingNumbers(arr) {
//   let nonRepeatingNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (i != j && arr[i] === arr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if(!isDuplicate){
//         nonRepeatingNumbers[nonRepeatingNumbers.length] = arr[i]
//     }
//   }
//   return nonRepeatingNumbers;
// }

const array = [1, 2, 3, 3, 2, 4, 5, 3, 5, 3, 6, 7];


function findNonRepeatingNumbers(arr) {
  let freq = {};
  let nonRepeatingNumbers = [];

  // Count frequency of each number
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  // Collect numbers that appear only once
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      nonRepeatingNumbers[nonRepeatingNumbers.length] = arr[i];
    }
  }

  return nonRepeatingNumbers;
}

const result = findNonRepeatingNumbers(array);
console.log('Non-repeating numbers:', result);