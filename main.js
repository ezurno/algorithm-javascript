const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function checker(data) {
  let set = new Set(data[0]);

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (set.has(data[i + 1])) {
        return false;
      } else set.add(data[i + 1]);
    }
  }

  return true;
}

let number = Number(input[0]);
let sum = 0;

for (let i = 1; i <= number; i++) {
  let data = input[i];
  if (checker(data)) sum += 1;
}

console.log(sum);
