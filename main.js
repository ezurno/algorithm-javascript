const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let log = "";

for (let i = 1; i <= cycle; i++) {
  let array = input[i].split(" ").map(Number);
  let array_length = array[0];
  let sum = 0;
  let counter = 0;

  for (let j = 1; j <= array_length; j++) {
    sum += array[j];
  }

  avg = sum / array_length; // 평균 값

  for (let i = 1; i <= array_length; i++) {
    if (avg < array[i]) counter++;
  }

  log += `${((counter / array[0]) * 100).toFixed(3)}%\n`;
}

console.log(log);
