const moveNegativesToOneSide = (arr) => {
  let result = new Array(arr.length);
  let negativeIndex = 0;
  let nonNegativeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
        result[negativeIndex] = arr[i]
        negativeIndex++
    }
  }

  nonNegativeIndex = negativeIndex
  for(let i=0;i<arr.length;i++){
    if(arr[i] > 0){
        result[nonNegativeIndex] = arr[i]
        nonNegativeIndex++
    }
  }
  return result
};


console.log(moveNegativesToOneSide([1, -2, 3, -4, 5, -6])); 
console.log(moveNegativesToOneSide([-1, 2, -3, 4, -5, 6])); 