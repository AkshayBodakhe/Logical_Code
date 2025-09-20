function findMaxInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i]
    }
  }
  return max;
}

function findMinInArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < min){
        min = arr[i]
      }
    }
    return min;
  }
  

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const max = findMaxInArray(array);
const min = findMinInArray(array)

console.log('Maximum value in the array is:', max);
console.log('Minimum value in the array is:', min);

