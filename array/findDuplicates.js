// brute force method
// there are several better ways for this. (need to learn)

let a = [1, 2, 3, 3, 2, 4, 5, 3, 5, 3, 6, 7];
let duplicates = [];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] == a[j] && i != j) {
      // console.log(a[j])
      // !duplicates.includes(a[j]) && duplicates.push(a[j]);
      if (!duplicates.includes(a[j])) {
        duplicates[duplicates.length] = a[j];
      }
    }
  }
}
// console.log(duplicates);
// the above way can be improved and can be done in other ways
 
// --------------------------------------------------------------

// Improved Way (Using Hash Map)
let arr = [1, 2, 3, 3, 2, 4, 5, 3, 5, 3, 6, 7];
let freq = {};
let duplicates2 = [];

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}

for (let num in freq) {
  if (freq[num] > 1) {
    duplicates2.push(Number(num));
  }
}

console.log(duplicates2); // Output: [2, 3, 5]

// Similar Programs You Can Try------
// Find the most repeating number
// Find the second most repeating number
// Find each repeating number with its repeat count
// Find the first duplicate in the array
// Find all unique elements (no duplicates)
// Remove all duplicates from the array
// Find numbers that appear exactly twice