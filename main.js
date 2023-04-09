const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [ball, chest] = input[0].split(" ").map(Number);
let sum = 0;

for (let i = 1; i <= chest; i++) {
  sum += i;
}

if (ball < sum) {
  // 공의 갯수가 부족한 경우
  console.log(-1);
} else {
  // 공의 갯수가 충분한 경우
  ball -= sum; // 한개씩은 다 담아야 하므로

  if (ball % chest == 0) {
    console.log(chest - 1);
  } else {
    console.log(chest);
  }
}
