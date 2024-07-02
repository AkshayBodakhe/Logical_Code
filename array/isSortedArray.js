const arr = [1, 3, 2, 4, 5, 6];

function isArraySorted(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      return "array is not sorted";
    }
  }
  return "array is sorted";
}

console.log(isArraySorted(arr));
