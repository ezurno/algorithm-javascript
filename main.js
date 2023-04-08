const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let city = Number(input[0]);
let km = input[1].split(" ").map(Number);
let oil = input[2].split(" ").map(Number);
let sum = BigInt(0); // 값이 커질 수 있기 때문에
let array = [];

for (let i = 0; i < km.length; i++) {
  array.push(oil[i]);
  let cheap = array.reduce((a, b) => Math.min(a, b)); // 제일 싼 기름 찾기
  sum += BigInt(cheap) * BigInt(km[i]);
}

console.log(String(sum)); // 뒤에 붙는  n 제거
