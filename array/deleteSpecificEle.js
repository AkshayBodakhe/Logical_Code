const removeElement = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
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

const deletedEleArr = removeElement(array, 0);

console.log("deletedEleArr => ", deletedEleArr);


