const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [cycle, money] = input[0].split(" ").map(Number);
let array = [];

for (let i = 1; i <= cycle; i++) {
  array.push(Number(input[i]));
}

let counter = 0;

for (let i = cycle - 1; 0 <= i; i--) {
  counter += parseInt(money / array[i]);
  money %= array[i];
}

console.log(counter);
