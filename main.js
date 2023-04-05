const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cycle = Number(input[0]);
let array = [];

for (let i = 1; i <= cycle; i++) {
  let [age, name] = input[i].split(" ");
  array.push({ age: Number(age), name: name });
}

array.sort((a, b) => {
  if (a.age != b.age) return a.age - b.age;
  else return a.name - b.name;
});

let logs = "";

for (x of array) {
  logs += `${x.age} ${x.name}\n`;
}

console.log(logs);
