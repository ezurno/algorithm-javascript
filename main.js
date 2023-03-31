const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let data = input.map((value) => Number(value));
let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42);
}

console.log(mySet.size);
