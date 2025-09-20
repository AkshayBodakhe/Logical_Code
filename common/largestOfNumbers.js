
function findLargest(...numbers) {
    if(numbers.length === 0){
        return null
    }
    let largest = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i]
        }
    }
    return largest
}

function findSmallest(...numbers) {
    if(numbers.length === 0){
        return null
    }
    let largest = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < largest){
            largest = numbers[i]
        }
    }
    return largest
}


console.log(findLargest(1,2,9,3,4,5,8))

console.log(findSmallest(1,2,9,3,4,5,8))
