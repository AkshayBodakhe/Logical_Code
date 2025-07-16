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
console.log(duplicates);
// the above way can be improved and can be done in other ways

// programs can be
// --most repeating number , second most
// --repeating number with it's repeat count
// --find first duplicate


