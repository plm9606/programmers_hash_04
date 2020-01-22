function solution(citations) {
  var answer = 0;
  const n = citations.length;

  const sum = citations.reduce((acc, citiation) => {
    acc += citiation;
    return acc;
  }, 0);
  const average = sum / n;

  console.log(citations);

  //   if (average > n) {
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
  //   }

  //   if(average <= n){
  //     citations.sort((a, b) => {
  //         return a-b;
  //       });

  //       for(let h=0; h<=n; h++){
  //           let lowerCount = 0;
  //         citations.some(c=>{
  //             if(h<=c) return true;
  //             lowerCount++
  //         })
  //         if((n-lowerCount) >= h){
  //             answer =h;

  //         }
  //       }
  //   }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([1, 137, 3, 95, 115]));
