const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// Mac, Linux 는 유닉스 기반이라 /dev/stdin 으로 인해 터미널 상에서 데이터값을 입력 할 수 있음
// 하지만 window는 불가능하기 때문에 /input.txt 파일을 따로 만들어서 테스트 해주어야 함
let input = fs.readFileSync(filePath).toString().split("\n");
// fs-module 을 사용하여 입력값 받아오기

let line = input[0].split(" ");

let a = line[0];
let b = line[1];

b_1 = b[2]; // 각 자릿 수 값은 문자열의 특성을 이용해 쉽게 구현 가능
b_10 = b[1];
b_100 = b[0];

console.log(Number(a) * Number(b_1));
console.log(Number(a) * Number(b_10));
console.log(Number(a) * Number(b_100));
console.log(Number(a) * Number(b));
