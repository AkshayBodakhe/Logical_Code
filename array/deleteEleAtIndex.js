const deleteElement = (arr, index) => {
  if (index < 0 || index > arr.length) {
    console.log("Index out of bound");
  }
  const newArray = [];
  for (let i = 0; i < index; i++) {
    newArray[i] = arr[i];
  }
  for (let i = index + 1; i < arr.length; i++) {
    newArray[i - 1] = arr[i];
  }
  return newArray;
};

// this is with single loop , a bit efficient way
const removeElement = (arr, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[index] === arr[i]) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.length = arr.length - 1;
      break;
    }
  }
  return arr;
};

const array = [1, 2, 3, 4, 5, 6];

const deletedEleArr = removeElement(array, 1);

console.log("deletedEleArr => ", deletedEleArr);

