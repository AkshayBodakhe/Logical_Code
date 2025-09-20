const mergeArrays = (arr1, arr2) => {
  const mergeArray = new Array(arr1.length + arr2.length)
  console.log(mergeArray)

  for (let i = 0; i < mergeArray.length; i++) {
    if (i < arr1.length) {
      mergeArray[i] = arr1[i];
    } else {
      mergeArray[i] = arr2[i - arr1.length];
    }
  }
  return mergeArray;
  //  return arr1 + "," + arr2
};

const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);

console.log(mergedArray)