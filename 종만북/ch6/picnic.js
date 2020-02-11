function solution(n,m,friends){
    const friendsList = [];
    const remains = [];
    let answer = 0;

    for(let i=0; i<n; i++){
        remains.push(i);
    }

    for(let i=0; i<friends.length; i=i+2){
        const pair = [];
        const idx = i;
        pair.push(Number(friends[idx]))
        pair.push(Number(friends[idx+1]))
        friendsList.push(pair)
    }

    findPairings(remains)

    function findPairings(remains){
        if(remains.length == 0 ) {answer++;  return;}

        const student = remains[0];

        for(let i=0; i<friendsList.length; i++){
            const pair = friendsList[i];
            let studentPairNo;
            let studentFriendPairNo;

            if(pair[0] == student) {studentPairNo = 0; studentFriendPairNo = 1}
            else if(pair[1] == student) {studentPairNo = 1; studentFriendPairNo = 0;}
            else continue;

            if(pair[studentFriendPairNo] < student) continue;
            const remainIdx = remains.indexOf(pair[studentFriendPairNo]);
            if(remainIdx !== -1) {
                const cpy_remains = JSON.parse(JSON.stringify(remains))
                cpy_remains.splice(remainIdx,1);
                cpy_remains.shift();
                findPairings(cpy_remains)
            }
        }
    }

    return answer;
}


solution(2,1,"01")
console.log(solution(4,6,"011223300213"))
console.log(solution(6,10,"01021213142324343545"))


/**
 * [못 푼 이유]
 * 하나의 친구쌍을 만드는건 성공. 
 * 중복되지 않는 친구쌍 전부를 만들기 위해선..? => 
 * friendsList를 잘못 만듬......(가장 큰 실수)
 * 
 * [중복 사항]
 * (0,1)과 (1,0)은 같다.
 * (0,1)(2,3)과 (2,3)(0,1)은 같다. 
 * 
 * 같은 답을 중복으로 세는 상황을 해결하기 위해서는 항상 특정 형태를 갖는 답만을 세도록 한다. 
 * 사전순으로 가장 먼저 오는 답 하나만을 센다.
 * ex) (2,3)(0,1)이나 (1,0)(2,3)은 세지 않지만 (0,1)(2,3)은 센다.
 * 이 속성을 강제하기 위해서 남은 학생들 중 번호가 가장 빠른 학생의 짝을 찾아주면 된다. 
 * 
 *
 */