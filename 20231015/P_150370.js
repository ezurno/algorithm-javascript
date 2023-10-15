function solution(today, terms, privacies) {
  var answer = [];
  const [todayYear, todayMonth, todayDay] = today
    .split(".")
    .map((s) => Number(s));

  const termsObj = {};
  terms.forEach((term) => {
    const [termType, month] = term.split(" ");
    termsObj[termType] = Number(month);
  });

  privacies.map((privacy, idx) => {
    const [date, termType] = privacy.split(" ");
    const [year, month, day] = date.split(".").map((str) => Number(str));

    const termsMonth = termsObj[termType];
    const addYear = Math.floor(termsMonth / 12);
    const addMonth = termsMonth - addYear * 12;

    let lastYear, lastMonth, lastDay;

    if (addMonth + month > 12) {
      lastYear = addYear + year + 1;
      lastMonth = addMonth + month - 12;
    } else {
      lastYear = addYear + year;
      lastMonth = addMonth + month;
    }

    if (day - 1 === 0 && lastMonth === 1) {
      lastYear--;
      lastMonth = 12;
      lastDay = 28;
    } else if (day - 1 === 0) {
      lastMonth--;
      lastDay = 28;
    } else {
      lastDay = day - 1;
    }

    if (lastYear < todayYear) {
      answer.push(idx + 1);
    } else if (lastYear === todayYear && lastMonth < todayMonth) {
      answer.push(idx + 1);
    } else if (
      lastYear === todayYear &&
      lastMonth === todayMonth &&
      lastDay < todayDay
    ) {
      answer.push(idx + 1);
    }
  });
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/150370 개인정보 수집 유효기간
