const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
let K = input[1].trim().split(" ");
let visited = new Array(10).fill(false);

let big = "";
let small = "";

let array = [];

function dfs(depth) {
  if (depth == N + 1) {
    let check = true;
    for (let i = 0; i < K.length; i++) {
      if (K[i] == "<") {
        if (array[i] > array[i + 1]) check = false;
      } else if (K[i] == ">") {
        if (array[i] < array[i + 1]) check = false;
      }
    }

    if (check) {
      big = "";
      for (let x of array) big += `${x}`;
      if (small == "") small = big;
    }

    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    array.push(i);
    dfs(depth + 1);
    visited[i] = false;
    array.pop();
  }
}

dfs(0);
console.log(`${big}\n${small}`);
