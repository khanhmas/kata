const fizz = 'Fizz';
const buzz = 'Buzz';

// Impement fizzbuzz logic
function fizzbuzz(number) {
  let res = number;
  if (number % 15 === 0) {
    res = fizz + buzz;
  } else if (number % 5 === 0) {
    res = buzz;
  } else if (number % 3 === 0) {
    res = fizz;
  }
  return res;
}

// Implement the wrapper so we can count from 0 to STOP.
function main(stop) {
   for(let i=0; i<stop;i++) {
     console.log(fizzbuzz(i + 1));
   }
}

main(16);
