const mergeArrays = (arr1, arr2) => {
  const mergeArray =  arr1.length + arr2.length

  for (let i = 0; i < mergeArray.length; i++) {
    if (i < arr1.length) {
      mergeArray[i] = arr1[i];
    } else {
      mergeArray[i] = arr2[i];
    }
  }
  return mergeArray;
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);

