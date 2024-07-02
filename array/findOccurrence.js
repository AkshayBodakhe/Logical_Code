const array = [1, 2, 2, 3, 2, 3, 4, 5, 6, 7, 8];

function findOccurance(ele) {
  let occurrence = 0;
  for (let i = 0; i < array.length; i++) {
    if (ele === array[i]) {
      occurrence++;
    }
  }
  return occurrence;
}

console.log(findOccurance(2));
