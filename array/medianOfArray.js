

const findMedian = (a) => {
  let temp;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length - i; i++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  let mid = Math.floor(a.length / 2); // if 1.5 , it will be 1

  if (a.length % 2 == 0) {
    return (a[mid - 1] + a[mid]) / 2;
  } else {
    return a[mid];
  }
};

console.log(findMedian([3, 1, 4, 2])); // Output: 2.5
console.log(findMedian([7, 1, 3])); // Output: 3
