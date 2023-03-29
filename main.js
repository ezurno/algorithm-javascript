const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number_1 = Number(input[0].split(" ")[0]);
let number_2 = Number(input[0].split(" ")[1]);
let number_3 = Number(input[0].split(" ")[2]);

if (number_1 == number_2 && number_2 == number_3)
  console.log(10000 + number_1 * 1000);
else if (number_1 == number_2) console.log(1000 + number_1 * 100);
else if (number_1 == number_3) console.log(1000 + number_1 * 100);
else if (number_2 == number_3) console.log(1000 + number_2 * 100);
else console.log(Math.max(number_1, number_2, number_3) * 100);
