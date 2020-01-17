function solution(tickets) {
  var answer = [];
  const q = [];

  dfs("ICN");
  function dfs(node) {
    answer.push(node);
    while (tickets.length > 0) {
      let nextDestination;
      tickets.forEach((ticket, idx) => {
        const dept = ticket[0];
        const dest = ticket[1];
        if (dept !== node) return;

        if (!nextDestination) {
          nextDestination = idx;
          return;
        }
        if (isNewDestIsLower(tickets[nextDestination][1], dest))
          nextDestination = idx;
      });
      const destination = tickets[nextDestination][1];
      tickets.splice(nextDestination, 1);
      dfs(destination);
    }
  }
  return answer;
}

function isNewDestIsLower(originDest, newDest) {
  if (getLowerAlpha(originDest, newDest) === originDest) return false;
  return true;
}

function getLowerAlpha(word1, word2) {
  for (let i = 0; i < 3; i++) {
    if (word1[i] < word2[i]) return word1;
    if (word1[i] > word2[i]) return word2;
  }
}

/**
 * [["ICN","COO"],["ICN","BOO"],["COO","ICN"],["BOO"-"DOO"]]
 * 의 경우에 대해 만족해야 한다.
 */
