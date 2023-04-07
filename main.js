const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let flag = false;
let counter = 1;

while (A <= B) {
  if (A == B) {
    flag = true;
    break;
  }

  if (B % 2 == 0) {
    B = parseInt(B / 2);
  } else if (B % 10 == 1) {
    B = parseInt(B / 10);
  } else break;
  counter++;
}

console.log(flag ? counter : -1);
