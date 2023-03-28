# 🤓 JavaScript로 알고리즘 공부하기 💯

## 시작하기 전에...

- **Tool**🛠️ 은 `vscode` 를 사용할 예정
- `vscode`의 `Code Runner` **extension**을 설치

<br/>
<hr/>

## 📕 목 록

#### [1. 시간 복잡도란?](#)

#### [2. 입출력에 따른 팁](#)

#### [3. 알고리즘에 주로 등장하는 JavaScript 문법](#)

<br/>

---

###### 20230327

> ## 1. 시간 복잡도란?

<br/>

## 시간 복잡도

- 알고리즘 성능을 나타내는 척도
- 특정한 크기 입력에 대하여 알고리즘의 수행 시간 분석
- 동일한 기능을 수행하는 알고리즘이 있다면, 복잡도가 낮을수록 우수함
- **빅오 표기법 (Big-O Notation)** 을 사용해 나타냄

<br/>

## 빅오 표기법

- 가장 빠르게 증가하는 항만 고려하는 표기법, 함수의 상한을 나타냄
- 연산횟수가 3N^3 + 5N^2 + 5000 의 알고리즘이 있으면 3N^3 의 증가량이 제일 크므로 큰 항만 고려함
- **Big-O Notation**에서는 가장 큰 항의 계수를 제외하여 표기함

<br/>

| 시간 복잡도 | 의미                             |
| ----------- | -------------------------------- |
| O(1)        | 상수시간 (constant time)         |
| O(*log*N)   | 로그 시간 (log time)             |
| O(N)        | 선형 시간 (linear time)          |
| O(N*log*N)  | 로그 선형 시간 (log-linear time) |
| O(N^2)      | 이차 시간 (quadratic time)       |
| O(N^3)      | 삼차 시간 (cubic time)           |
| O(2^N)      | 지수 시간 (exponential time)     |

<br/>

문제에서 가장 먼저 확인해야 하는 내용은 **시간 제한** 이다. 시간제한에 따라 범위값을 보면 알수 있음.

- 입력 값의 범위가 500 인 경우 => 시간 복잡도가 `O(N^3)` 인 알고리즘이 최적
- 입력 값의 범위가 2,000 인 경우 => 시간 복잡도가 `O(N^2)` 인 알고리즘이 최적
- 입력 값의 범위가 100,000 인 경우 => 시간 복잡도가 `O(N*log*N)` 인 알고리즘이 최적
- 입력 값의 범위가 10,000,000 인 경우 => 시간 복잡도가 `O(N)` 인 알고리즘이 최적

<br/>

> ## 2. 입출력에 따른 팁

<br/>

**JavaScript 에서 입력방식은 여러가지가 존재한다.**

<br/>

- 모든 코딩테스트 문제에는 입력과 출력이 주어지며 정해진 폼에 맞춰서 입출력을 받는것이 관건
- JavaScript는 `template-return` 을 적절히 사용할 수 있다.

```JS
    value = 35;
    console.log(`정답은 ${value}`); //template-return
```

<br/>

- `console.log` 를 사용을 남발하면 출력 때문에 시간초과에 빠질 수 있으므로 문자열을 **뭉쳐서** 반환 하는 것이 좋다.

```JS
    let answer = "";
    for(let i = 0; i < 100; i++) {
        answer += i = "\n"; // 문자열 값을 answer 에 일일히 "뭉쳐서" 반환
    }

    console.log(answer);
```

**FS-module**

- 입력데이터가 **텍스트 파일** 형태로 주어지는 경우, `Fs-module` 을 사용한다. (파일시스템 모듈)

```JS
    let fs = require('fs');
	let input = fs.readFlieSync('/dev/stdin').toString().split('\n'); // /dev/stdin 파일의 텍스트를 읽어오는 경우

    console.log(input);
```

**readline-module**

- 한줄씩 입력받아서 처리하는 `Interface`를 따로 만들어 사용도 가능

```JS
	const rl = require.('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let input = [];
	rl.on('line', (line) => {
		// 콘솔 입력창에서 줄바꿈(enter)를 입력 시 호출
		input.push(line);
	}).on('close', () => {
		// 콘솔 입력창에서 Ctrl + C or Ctrl + D 입력 시 호출
		console.log(input);
		process.exit();
	});
```

<br/>

> ## 3. 알고리즘에 주로 등장하는 JavaScript 문법

<br/>

**Array.prototype.reduce()**

- reduce() 함수는 기본적으로 reducer() 를 가지며, reducer 는 두 개의 args 를 갖는다 (accumulator, currentValue)

- 배열에 사용하며 각 원소 값은 currentValue 에 해당
- reduce 함수의 return 값은 그 이후 accumulator 로 반환 함
- 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 사용

```JS
	let data = [5,2,9,8,4];
	let minValue = data.reduce((a, b) => Math.min(a,b));
	console.log(minValue); // 2

	let summary = data.reduce((a, b) => a + b );
	console.log(summary); // 28
```

<br/>
<br/>

**fill()**

fill() 함수를 사용해 배열을 간단하게 초기화 할 수 있다.

```JS
	let arr = [8,1,4,5,7]; // 직접 초기화
	let arr = new Array(5).fill(0); // 배열을 새로 5 로 만들어 0을 채워 넣은 배열로 초기화
```

<br/>
<br/>

**Set()**

특정 원소의 등장여부를 파악할 때 집합 자료형`Set`을 효과적으로 사용할 수 있다.

- 중복된 원소를 포함하지 않는다는 것이 특징

```JS
	let mySet = new Set(); // 집합 객체 선언

	mySet.add(3);
	mySet.add(5);
	mySet.add(7);
	mySet.add(3);

    console.log(`원소의 갯수 : ${mySet.size}`); // 3
    console.log(`원소는 7을 포함하고 있는가 ? ${mySet.has(7)}`); // true

    mySet.delete(5); // 원소 제거

    for (let item of mySet) console.log(item); // 원소를 하나씩 출력
```

<br/>
<br/>

**fixed()**

실수를 출력할 때 `fixed()`를 사용해 소수점 아래 특정자리에서 반올림 할 수 있다.

```JS
	let x = 123.456;
	console.log(x.toFixed(2)); // 소숫점 둘째자리까지 출력 => 123.45
```

<br/>

---

###### 20230328

> ## 4. fs-module 활용하기

<br/>

## fs-module 사용시 /dev/stdin 을 찾을 수 없다는 error 발생

<br/>

- `fs-module`으로 `/dev/stdin`에 접근을 할 수 없는 error.
- **Mac, Linux**는 유닉스 기반 운영체제로, /dev/stdin 으로 인해 터미널 상에서 데이터값을 입력 할 수 있음
- 하지만 **Window**운영체제는 불가능 하기 때문에 외부에 `input.txt` 파일을 만들어 따로 접근해야 한다.

<br/>

```JS
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// Mac, Linux 는 유닉스 기반이라 /dev/stdin 으로 인해 터미널 상에서 데이터값을 입력 할 수 있음
// 하지만 window는 불가능하기 때문에 /input.txt 파일을 따로 만들어서 테스트 해주어야 함
let input = fs.readFileSync(filePath).toString().split("\n");
// fs-module 을 사용하여 입력값 받아오기
let line = input[0].split(" ");
let a = parseInt(line[0]);
let b = parseInt(line[1]);
console.log(a + b);
```

<br/>

## 각자리 숫자 합을 곱하는 예제 풀이

<br/>

- [문제](https://www.acmicpc.net/problem/2588)
- 각자리 숫자를 접근 할 시 문자열 값에 접근 하는 것이 제일 간단한 방법

```JS
/*-- 중략 --*/
let a = line[0];
let b = line[1];

b_1 = b[2]; // 각 자릿 수 값은 문자열의 특성을 이용해 쉽게 구현 가능
b_10 = b[1];
b_100 = b[0];

console.log(Number(a) * Number(b_1));
console.log(Number(a) * Number(b_10));
console.log(Number(a) * Number(b_100));
console.log(Number(a) * Number(b));
```

<br/>
