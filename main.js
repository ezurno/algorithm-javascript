const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let array = input[1].split(" ").map(Number);
let newArray = [];

let M = array.reduce((st, nd) => Math.max(st, nd));

for (let i = 0; i < cycle; i++) {
  newArray.push((array[i] / M) * 100);
}

console.log(newArray.reduce((a, b) => a + b) / cycle);
