const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let pibo = [];
pibo.push(0);
pibo.push(1);

while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
} // 비교 할 피보나치 수열을 생성

// console.log(pibo);

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let n = Number(input[i]); // Data 값
  let result = [];
  let index = pibo.length - 1;

  while (n > 0) {
    if (n >= pibo[index]) {
      n -= pibo[index];
      result.push(pibo[index]);
    }

    index--;
  }

  let answer = "";
  for (let i = result.length - 1; 0 <= i; i--) {
    answer += result[i] + " ";
  }
  console.log(answer);
}
