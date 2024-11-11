function findPairs(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === targetSum) {
                console.log(arr[i], arr[j]);
            }

        }
    }
}

let arr = [3, 7, 1, 8, 9, 2, 4, 0, 7, 1, 5];
let targetSum = 5;

findPairs(arr, targetSum);
