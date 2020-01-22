// 가장 큰 수

const NO_SUFFIX = 0.1;

function solution(numbers) {
  var answer = "";

  numbers.sort();
  numbers.forEach((n, i) => {
    numbers[i] = String(n);
  });

  while (numbers.length > 0) {
    var number = numbers[numbers.length - 1];
    var lastNum = number.slice(-1);
    var prefix = number.slice(0, -1);
    if (prefix === "") {
      lastNum = NO_SUFFIX;
      prefix = number;
    }
    for (let i = numbers.length - 2; i >= 0; i--) {
      var compare = numbers[i];

      if (compare.slice(0, prefix.length) !== prefix) break;

      var compareLastNum = compare.slice(prefix.length);
      if (compareLastNum === "") compareLastNum = NO_SUFFIX;
      if (lastNum === NO_SUFFIX) {
        if (compareLastNum <= prefix[0]) continue;
        lastNum = compareLastNum;
        number = compare;
        continue;
      }
      if (compareLastNum === NO_SUFFIX) {
        if (lastNum >= prefix[0]) continue;
        lastNum = compareLastNum;
        number = compare;
        continue;
      }
      if (lastNum < compareLastNum) {
        lastNum = compareLastNum;
        number = compare;
      }
    }

    // console.log(number);
    if (answer === "0" && number === "0") answer = "0";
    if (answer !== "0" && number !== "0") answer += number;
    // else if (number === "0") answer;
    // else answer += number;
    numbers.splice(numbers.indexOf(number), 1);
  }
  return answer;
}

console.log(solution([12, 121]));
console.log(solution([21, 212]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([0, 0, 100, 0]));

/**
 * 문자열로만 비교를 하려고 했다.
 * sort함수를 사용해 오름차순으로 배열을 정렬한 후에
 * 같은 prefix를 가진 숫자끼리 비교를 했다.
 * 12, 121, 124 의 경우 124를먼저 꺼낸 후 prefix=12, lastNum = 4가 된다.
 * 같은 prefix를 가진 숫자들과 비교하여 더 큰 lastNum을 가진 숫자를 answer에 추가
 * 12와 같은 경우에는 지역변수 NO_SUFFIX를 사용하고 그 경우의 수도 세분화
 * 하지만 뭔가 잘못된 방법인것 같았다.
 * [12,121] 의 경우에 문제를 해결할 수 없다.
 */

/**
 * 1. 가장 직관적인 방법은 모든 변수를 조합해 만든 수 중 가장 큰 값을 반환하는 방법이다.
 * 2. number의 원소는 1,000이하의 수이다. 일의자리부터 백의자리까지이다.
 *    numbers의 길이는 1이상 100,000이하이다. 1,000 * 100,000 = 10^8
 *    numbers의 모든 수에 접근하되 모든 숫자가 네자리수가 되게 만들어 이 수들끼리 비교하면 [12,121] 같은 문제도 해결할 수 있지 않을까/?
 */
