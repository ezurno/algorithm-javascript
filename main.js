const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let data = input[1].split(" ").map(Number);
let result = 0;
let arrow = new Array(1000001).fill(0); // 각 높이의 화살 갯수

for (let height of data) {
  if (0 < arrow[height]) {
    // 해당 높이에 이미 쏜 화살이 있다면
    arrow[height] -= 1; // 해당 화살이 아래로 떨어지므로 하나 뺌
    arrow[height - 1] += 1; // 한칸 밑으로 떨어진 화살
  } else {
    // 해당 높이에 화살이 없다면
    arrow[height - 1] += 1;
    result += 1; // 화살 수 세기
  }
}

console.log(result);
