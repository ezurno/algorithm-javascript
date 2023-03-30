const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0].split(" ")[0]);
let log = "";

for (let i = 1; i <= number; i++) {
  let st = Number(input[i].split(" ")[0]);
  let nd = Number(input[i].split(" ")[1]);

  log += `${st + nd}\n`;
}

console.log(log);
