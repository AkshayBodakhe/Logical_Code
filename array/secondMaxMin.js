// returns second largest number without sorting array
function findSecondMax(arr) {
  let largest = -Infinity;
  let second_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] != largest) {
      second_largest = arr[i];
    }
  }
  return second_largest;
}

function secondMaximum(a) {
  let temp;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
    // here if we change the < to > it will return smallest
      if (a[i] < a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a[1];
}

const array = [-1,-3, -2, -3, -4, -5, -6, -7, -8, -9];

const secondMax = findSecondMax(array);
console.log("second largest is =>", secondMax);
