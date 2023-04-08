const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let communicate = Number(input[0]);
let array = [];
for (let i = 1; i <= communicate; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  array.push({ start: start, end: end });
}

array.sort((a, b) => {
  if (a.end != b.end) {
    return a.end - b.end;
  } else {
    return a.start - b.start;
  }
});

let current = 0;
let counter = 1;

for (let i = 1; i < communicate; i++) {
  if (array[current].end <= array[i].start) {
    current = i;
    counter += 1;
  }
}

console.log(counter);
