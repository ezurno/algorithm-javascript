function solution(t, p) {
  let array = [];
  let tmp = t.split("");

  let size = p.length;
  let counter = 0;
  let start = 0;

  while (start + size <= t.length) {
    let str = "";

    for (let i = start; i < start + size; i++) {
      str += tmp[i];
    }

    array.push(str);

    start += 1;
  }

  // return array;
  // 문자열 자르기 성공

  array.map((number) => {
    if (Number(number) <= Number(p)) {
      counter += 1;
    }
  });

  return counter;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/147355 크기가 작은 부분 문자열
