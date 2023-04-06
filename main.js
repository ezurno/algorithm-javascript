const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 최솟값을 구하려면 최대한 많은 수를 뺄셈에 맞춰 괄호안에 넣어야 함
//  a - (b + c) - (d + e + f) ...

let delMin = input[0].split("-");

// console.log(delMin);

let logs = 0;

for (let i = 0; i < delMin.length; i++) {
  let target = delMin[i].split("+").map(Number);
  let sum = target.reduce((a, b) => a + b);

  if (i == 0) logs += sum;
  else logs -= sum;
}

console.log(logs);
