function hourglassSum(arr) {
  function getOurglass(x, y, gap = 2) {
    let sum = 0;
    for (let i = y; i <= y + 2; i++) {
      sum += arr[x][i];
      sum += arr[x + gap][i];
    }
    sum += arr[x + gap / 2][y + 1];
    return sum;
  }

  const row = arr.length;
  const col = arr[0].length;
  const ourglassList = [];

  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < col - 2; j++) {
      ourglassList.push(getOurglass(i, j));
    }
  }
  ourglassList.sort((a, b) => -a + b);
  return ourglassList.shift();
}

/**
 * 첫번째 시도
 * 각 row마다 sum을 구해서 가장 sum이 큰 row를 기준으로만 ourglass 합을 구해서 최댓값을 찾음
 *
 * 하지만 row의 sum 이 같은 경우도 있고 sum이 크다고 ourglass값이 최대인 보장이 없었다.
 *
 * 그래서 그냥 다 돌림
 */
