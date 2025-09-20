
const factorialWithRec = (n) => {
    if(n < 0) {
        return  'factorial is not defined for negative numbers'
    } 
    if(n === 0 || n === 1){
        return 1
    }
    return n * factorialWithRec(n - 1)
}

console.log(factorialWithRec(4))

const factorial = (n) => {
    if(n < 0) {
        return  'factorial is not defined for negative numbers'
    } 
    let result = 1
    for(let i = 2; i <= n; i++){
        // result *= i
        result = result * i
    }
    return result
}

console.log(factorial(5))
