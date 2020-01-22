//k번째 수
function solution(array, commands) {
  var answer = [];

  commands.forEach(command => {
    const i = command[0];
    const j = command[1];
    const k = command[2];

    const newArr = array.slice(i - 1, j);

    newArr.sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  });

  return answer;
}

solution([1, 5, 2, 6, 3, 7, 4][([2, 5, 3], [4, 4, 1], [1, 7, 3])]);
/**
 * i번째부터 j번째까지를 자른다는 것이 일반적인 배열의 인덱스와 다르다.
 * [2, 5, 3] 의 경우 2번째부터 5번째까지를 자르는 것인데
 * 실제 인덱스로 생각하면 1부터 4까지의 배열을 자르는 것이므로 i에 대한 인덱스값 계산 처리가 필요하다
 * 최종으로 소팅한 변수에서 k번째에 해당하는 수를 구할 때도 -1을 해주어야 한다
 */
