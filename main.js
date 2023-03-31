const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0].split(" ")[0]);
let log = "";

let array = input[1].split(" ").map(Number);
let max = -Infinity;
let min = Infinity;

for (let i = 0; i < number; i++) {
  max = Math.max(max, array[i]);
  min = Math.min(min, array[i]);
}

console.log(`${min} ${max}`);
