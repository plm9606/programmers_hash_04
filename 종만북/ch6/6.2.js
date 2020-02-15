
// n개의 원소 중 순서 상관 없이 m개의 원소를 고르는 모든 조합을 찾는 알고리즘
function pick(n,picked, toPick){
    if(toPick === 0) {
        console.log(picked)
        return;
    }

    let smallest = picked.length === 0 ? 0 : picked[picked.length-1]+1

    for(let i=smallest; i<n;i++){
        picked.push(i)
        pick(n,picked, toPick-1)    
        picked.pop();
    }
}
pick(4,[],2)

/**
 * 중첩 반복문을 재귀함수를 이용해 중첩을 없애고 중첩의 횟수도 자유롭게 설정이 가능하도록 만든다. 
 * m개의 원소를 모두 고르면 toPick=0이 되기때문에 toPick을 기저조건으로 둔다. 
 * 
 * !! 순서를 강제할 수 있을까? 컨셉을 이용한다
 * 순서를 0부터 시작하여 작은 수 순서로 조합을 만드는 순서로 강제하여
 * for루프를 통해 순서대로 조합을 찾을 수 있었다. 
 * 
 * 주어진 변수?가 n,m 두개였는데 이두개만 사용해서 pick함수를 만드려 하니까 만들어지지 않았다. 
 * 문제를 해결하기 위해서 추가로 보조적인 변수나 자료구조를 만들 수 있다. (picked)
 */


 // 순서까지 상관해서 고르는 경우
function c1(str,toPick, picked, usedIdx){
    if(toPick === 0){
        console.log(picked);
        return;
    }
    for(let i=0; i<str.length; i++){
        let isUsed = false;
        for(let j=0; j<usedIdx.length; j++){
            if(usedIdx[j] === i) {
                isUsed = true;
                break;
            }
        }
        if(isUsed) continue;
        picked += str[i];
        usedIdx.push(i)
        c1(str, toPick-1, picked, usedIdx) ;
        usedIdx.pop();
        picked = picked.slice(0,-1)
    }
}

c1("1234", 2, "", []);
