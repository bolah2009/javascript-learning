// DISCLAIMER !!!
// Please do no use this solution to solve the Project Euler (https://projecteuler.net/) problems
// This repository is for personal development only in this regard
// Thanks!

// Multiples of 3 and 5

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;

function multiples(number, multiple) {
  let sum = 0;
  for (let index = 2; index < number; index++) {
    if (index % multiple == 0) {
      sum += index;
    }
  }
  return sum;
}

let sum_of_multiple_of_3 = multiples(1000, 3);
let sum_of_multiple_of_5 = multiples(1000, 5);
let sum_of_multiple_of_15 = multiples(1000, 15);
let sum_of_multiple_of_3_or_5 =
  sum_of_multiple_of_3 + sum_of_multiple_of_5 - sum_of_multiple_of_15;
console.log(sum_of_multiple_of_3_or_5);

// Congratulations, the answer you gave to problem 1 is correct.

// You are the 833392nd person to have solved this problem.

// This problem had a difficulty rating of 5%. The highest difficulty rating you had previously solved was 0%. 
// This is a new record. Well done!