const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0].split(" ")[0]);
// 문자열을 수로 변환 할때 일반적으로 parseInt 보다 Number가 더 빠르게 동작함

let sum = 0;

while (0 < number) {
  sum += number;
  number -= 1;
}
console.log(sum);
