const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let logs = "";

let array = [];

for (let i = 1; i <= cycle; i++) {
  let xy = input[i].toString().split(" ").map(Number);

  array.push({
    x: xy[0],
    y: xy[1],
  });
}

array.sort((a, b) => {
  if (a.y != b.y) return a.y - b.y;
  else return a.x - b.x;
});

array.forEach((value) => {
  logs += `${value.x} ${value.y}\n`;
});

console.log(logs);
