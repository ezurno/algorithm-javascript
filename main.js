const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0].split(" ")[0]);
// 문자열을 수로 변환 할때 일반적으로 parseInt 보다 Number가 더 빠르게 동작함
let log = "";

for (let i = 0; i < number; i++) {
  for (let j = 0; j <= i; j++) {
    log += "*";
  }
  log += "\n";
}

console.log(log);
