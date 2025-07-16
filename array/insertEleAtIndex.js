const insertElementAtIndex = (arr, index, element) => {
  if (index < 0 || index > arr.length) {
    console.log("Index out of bound");
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
    // console.log(arr[i]);
  }
  newArr[index] = element;
  for (let i = index; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }

  return newArr;
};

const array = [1, 2, 3, 4, 5];

const insertedArr = insertElementAtIndex(array, 5, 6);

console.log("insertedArr => ", insertedArr);
