function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;
  var answer = 0;
  let q = [];
  const visited = [];
  const wordLen = begin.length;

  for (let i of words) {
    visited.push(false);
  }

  q.push(begin);
  dfs(begin);
  function dfs(node) {
    if (node === target) {
      //   break;
      q = [];
      return;
    }
    answer++;
    while (q.length > 0) {
      words.forEach((word, wordIdx) => {
        let differentWordCount = 0;
        for (let i = 0; i < wordLen; i++) {
          if (differentWordCount > 1 || visited[wordIdx]) break;
          if (node[i] !== word[i]) {
            differentWordCount++;
          }
        }
        if (differentWordCount <= 1 && !visited[wordIdx]) {
          q.push(word);
          visited[wordIdx] = true;
        }
      });
      console.log(q);
      dfs(q.pop());
    }
  }

  return answer;
}

const res = solution("hit", "let", ["hot", "lot", "got", "let", "gor"]);
console.log(`answer is ${res}`);

/**
 * 이 경우에는 hit-hot-lot-let 이 최단경로인데
 * 프로그램을 돌리면 hit-hot-got-gor-lot-let 최장 경로로 나온다.
 * 그런데 프로그래머스에서는 통과?
 */
