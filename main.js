const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let data = input.map((x) => Number(x));
let max = Math.max(...data);
// Math.max 함수로 값만 가져와 사용

let index = data.indexOf(max) + 1;
// indexOf 로 인덱스 위치 찾기

console.log(max);
console.log(index);
