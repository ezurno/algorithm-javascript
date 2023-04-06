const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let array = [];

array = input[1].split(" ").map(Number);

array.sort((a, b) => a - b);
// console.log(array);

let time = 0;
let sum = 0;

for (let i = 0; i < cycle; i++) {
  time += array[i];
  sum += time;
}

console.log(sum);
