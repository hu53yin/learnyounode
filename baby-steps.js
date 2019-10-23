'use strict';

let sum = 0;

for (let index = 2; index < process.argv.length; index++) {
  const number = process.argv[index];
  sum += Number(number);
}

console.log(sum);
