const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = Number(input[0]);
let array = [];
let N = 0;

function dfs(result, depth) {
  if (depth == N - 1) {
    let str = ""; // 현재 수식 문자열
    for (let i = 0; i < N - 1; i++) str += array[i] + result[i];
    str += array[N - 1] + "";

    current = eval(str.split(" ").join("")); // 공백을 제거 한 후 배열을 총 합
    if (current == 0) console.log(str);
    return;
  }

  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}

for (let i = 1; i <= testCase; i++) {
  N = Number(input[i]);
  array = [];

  for (let i = 1; i <= N; i++) {
    array.push(i);
  }

  dfs([], 0);
  console.log();
}
