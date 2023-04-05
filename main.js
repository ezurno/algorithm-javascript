const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numbers = input[0].split("").map(Number);

numbers.sort((a, b) => {
  return b - a;
});

let logs = "";

for (value of numbers) {
  logs += `${value}`;
}

console.log(logs);
