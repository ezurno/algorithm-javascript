const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);

for (let i = 1; i <= cycle; i++) {
  let line = input[i].split(" ").map(String);
  let log = "";

  for (let j = 0; j <= line[1].length; j++) {
    log += line[1].charAt(j).repeat(Number(line[0]));
  }

  console.log(log);
}
