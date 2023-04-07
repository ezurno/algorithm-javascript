const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let sugar = Number(input[0]);
let five = 0;
let three = 0;
let sum = -1;

let array = [0, 1, 2, 4, 7];

while (!array.find((value) => value == sugar)) {
  if (sugar % 5 == 0) {
    five = sugar / 5;
    sum = five + three;

    break;
  } else {
    sugar -= 3;
    three++;
  }
} // 5로 나눴을 때 값이 나누어떨어지지 않았을 시 3을 빼주면서 다시 나눈다.

console.log(sum);
