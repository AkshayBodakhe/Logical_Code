function subArrayWithGivenSum(arr, targetSum) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum = currentSum + arr[end];

    while (currentSum > targetSum && start <= end) {
      currentSum = currentSum - arr[start];
      start++;
    }

    if (currentSum === targetSum) {
    //   return { start: start, end: end };
    return arr.slice(start, end + 1);

    }
  }
  return null;
}

const array = [1, 0, 3, 3, 5, 6, 7];

const subArray = subArrayWithGivenSum(array, 4);

console.log(subArray);
