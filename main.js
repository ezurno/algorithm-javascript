const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let array = input[1].split(" ").map(Number);

let newArray = [...new Set(array)]; // set 으로 풀어쓴 후 초기화

// console.log(newArray);

newArray.sort((a, b) => {
  return a - b;
});

// console.log(newArray);

let logs = "";

let numbers = new Map();

for (let i = 0; i < newArray.length; i++) {
  numbers.set(newArray[i], i); // map 으로 key 와 value 값으로 세팅
}

for (x of array) {
  logs += `${numbers.get(x)} `;
}

console.log(logs);
