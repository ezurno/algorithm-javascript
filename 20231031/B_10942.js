const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "20231031/input_10942.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// console.log(input);

let N = input.shift();
let array = input.shift().split(" ").join("");
let cycle = input.shift();
let answer = [];

const dp = Array.from({ length: N }, () => new Array(N).fill(false));

for (let i = 0; i < N; i++) {
  dp[i][i] = true;
  // 가장 첫 숫자는 true

  if (i + 1 < N) {
    if (array[i] === array[i + 1]) dp[i][i + 1] = true;
    else dp[i][i + 1] = false;
  }
}

for (let j = 2; j < N; j++) {
  for (let i = 0; i < N - 1; i++) {
    if (array[i] !== array[j]) continue;

    if (dp[i + 1][j - 1]) dp[i][j] = true;
  }
}

input.forEach((value) => {
  const [src, dst] = value.split(" ").map(Number);

  if (dp[src - 1][dst - 1]) answer.push(1);
  else answer.push(0);
});

console.log(answer.join("\n"));
