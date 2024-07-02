const a = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    const reversedArray = []
  for (let i = a.length-1; i >= 0; i--) {
    reversedArray.push(arr[i])
  }
  return reversedArray
}

console.log(reverseArray(a))
