// To determine if a given year is a leap year, you need to follow these rules:
// A year is a leap year if it is evenly divisible by 4.
// However, if the year is also evenly divisible by 100, it is not a leap year, unless:
// The year is also evenly divisible by 400, in which case it is a leap year.

const isLeapYear = (year) => {
  if (typeof year !== "number" || year % 1 !== 0) {
    return "Input is not a valid integer";
  }
  // if (year % 400 === 0) {
  //   return `${year} is a leap year`;
  // } else if (year % 100 == 0) {
  //   return `${year} is not a leap year`;
  // } else if (year % 4 === 0) {
  //   return `${year} is a leap year`;
  // } else {
  //   return `${year} is not a leap year`;
  // }
   // simple logic
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};

console.log(isLeapYear(2004));
