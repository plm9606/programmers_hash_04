function solution(numbers) {
  var answer = "";

  const four = numbers.reduce((acc, n, i) => {
    acc.push({
      idx: i,
      origin: n,
      number: String(n)
        .repeat(4)
        .slice(0, 4)
    });
    return acc;
  }, []);
  four.sort((a, b) => {
    return a.number - b.number;
  });

  // console.log(four);
  while (four.length > 0) {
    const fourItem = four.pop();
    const number = fourItem.origin;
    if (answer === "0" || number === 0)
      answer = String(Number(answer) + number);
    else answer += String(number);
  }
  return answer;
}
console.log(solution([12, 121]));
console.log(solution([21, 212]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([0, 0, 100, 0]));
console.log(solution([20, 200, 20]));
console.log(solution([0, 0, 0, 1000]));
console.log(solution([998, 9, 999]));
console.log(solution([1, 10, 1000, 100]));
console.log(solution([30, 33, 330, 335, 55]));
