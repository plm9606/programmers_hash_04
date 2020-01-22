function solution(citations) {
  var answer = 0;
  const n = citations.length;

  citations.sort((a, b) => {
    return b - a;
  });

  for (let h = n; h >= 0; h--) {
    let upperCount = 0;
    citations.some(c => {
      if (c < h) return true;
      upperCount++;
    });
    if (upperCount >= h) {
      answer = h;
      break;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([1, 137, 3, 95, 115]));

/**
 * 1. n부터 0까지 차례로 계산한 후 조건을 만족하는 가장 큰 값을 리턴한다.
 * 2. 원소의 평균을 구하고
 *      if(평균>n) : n->0순으로 탐색
 *      if(평균<=n) : 0->n순으로 탐색
 *
 * 2번을 생각하고 구현하다 보니 h값을 만족하는 가장 큰 값 아래로는 h-index공식을 만족.
 * 따라서 평균값으로 n->0순, 0->n순을 구별하는게 의미가 없었다.
 * n->0순으로 h값을 대입해 계산을 해야한다.
 *
 * 이때 citations배열을 정렬한 후 탐색을 하게 되면 h보다 작은 값이 나왔을 때 바로 탐색을 종료할 수 있는 장점이 있다.
 * 따라서 sort함수를 이용해 내림차순으로 배열을 소팅한 후 조건을 판별하면 모든 배열을 탐색하지 않아도 된다.
 */
