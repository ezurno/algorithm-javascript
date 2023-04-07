const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let S = Number(input[0]);
// 1에서부터 자연수를 더하는게 가장 많은 수를 더하는 것과 같음

let sum = 0;
let current = 0;

while (sum <= S) {
  current += 1; // 현재 자연수
  sum += current;
}
console.log(current - 1);
