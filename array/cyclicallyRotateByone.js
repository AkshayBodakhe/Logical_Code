function cyclicallyRotateByOne(arr) {
  let n = arr.length;
  if (n === 0) return arr;

  let lastElement = arr[n-1]

  for (let i = n - 1; i > 0; i--) {
     arr[i] = arr[i-1]
  }
  arr[0] = lastElement
  return arr
}

const array = [1, 2, 3, 4, 5];
let rotatedArr = cyclicallyRotateByOne(array);
console.log(rotatedArr); 