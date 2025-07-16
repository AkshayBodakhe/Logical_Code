// swap two numbers without using third variable

const swapNumbers = (a,b) => {
    console.log(`Before swap: a = ${a}, b = ${b}`);
    // a = 2 + 3 = 5
    a = a + b;
    // b = 5 - 3 = 2
    b = a - b;
    // a = 5 - 2 = 3
    a = a - b
    
    console.log(`After swap: a = ${a}, b = ${b}`);
}

swapNumbers(2, 3); 