const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

let timer = Number(input[1].split(" "));

minute += timer;

while (60 <= minute) {
  hour += 1;
  minute -= 60;

  if (hour === 24) {
    hour = 0;
  }
}

console.log(hour + " " + minute);
