function getPairsCount(arr, n, sum) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == sum) {
        count++
      }
    }
  }
  return count
}

let array =  [ 1, 5, 7, -1, 5 ];
let n = array.length
let sum = 6
// console.log('Count of pairs is',getPairsCount(array,n,sum))  


// Your implementation of getPairsCount is correct and straightforward for counting pairs with a 
// given sum. However, it has a time complexity of
// O(n2) , which can be inefficient for large arrays. If the array size is not very large, this implementation is fine. But for larger arrays, you might want to consider a more efficient solution using a hash map with TC - O(n2)

// this program needs to be revised and understand

function getPairsCount2(arr, n, sum) {
    let count = 0;
    let freq = {};

    for (let i = 0; i < n; i++) {
        let complement = sum - arr[i];
        console.log(`Current element: ${arr[i]}, Complement needed: ${complement}`);

        // Check if the complement exists in the hash map
        if (freq[complement]) {
            count += freq[complement];
            console.log(`Found complement ${complement} in freq ${freq[complement]} time(s). New count: ${count}`);
        }

        // Update the frequency of the current element
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        }
        console.log(`Updated freq:`, JSON.stringify(freq));
        console.log('-----------------------------');
    }

    console.log(`Final count: ${count}`);
    return count;
}

// Example usage:
let arr2 = [1, 5, 7, -1, 5];
let sum2 = 6;
let n2 = arr2.length;
let result = getPairsCount2(arr2, n2, sum2);
console.log("Number of pairs with given sum:", result); // Output: 3





// get actual pairs ---------------------------------------
// unrevised

function getPairs(arr, sum) {
  let freq = {};
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let complement = sum - arr[i];

    // If complement exists, add all pairs to the result
    if (freq[complement]) {
      for (let k = 0; k < freq[complement]; k++) {
        pairs.push([complement, arr[i]]);
      }
    }

    // Update frequency of current element
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  return pairs;
}

// Example usage:
let arr3 = [1, 5, 7, -1, 5];
let sum3 = 6;
console.log(getPairs(arr3, sum3)); 
// Output: [ [1, 5], [1, 5], [7, -1] ]