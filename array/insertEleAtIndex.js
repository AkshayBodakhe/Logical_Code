const insertElementAtIndex = (arr, index, element) => {
  if (index < 0 || index > arr.length) {
    console.log("Index out of bound");
    return arr;
  }

  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (i < index) {
      newArr[i] = arr[i];
    } else if (i === index) {
      newArr[i] = element;
    } else {
      newArr[i] = arr[i - 1];
    }
  }
  return newArr;
};

const array = [1, 2, 3, 4, 5];
const insertedArr = insertElementAtIndex(array, 4, 6);
console.log("insertedArr => ", insertedArr); // [1, 2, 3, 4, 5, 6]
