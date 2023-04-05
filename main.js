const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let array = [];

for (let i = 1; i <= cycle; i++) {
  let word = input[i];
  array.push(word);
}

array = [...new Set(array)]; // 중복 값 Set 으로 정렬 후 다시 ... 로 풀어서 초기화

// console.log(array);

array.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

let logs = "";

for (let i = 0; i < array.length; i++) {
  logs += `${array[i]}\n`;
}

console.log(logs);
