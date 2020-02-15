function solution(n, number){
    let answer = -1;
    let cache = [];
    let FOUND = false;
    for(let i=0; i<8; i++) cache.push(new Set())
    const numberBuilder = makeNumberByLength(n);

    for(let i=1; i<=8; i++){
        if(FOUND) break;
        makeNum(i);
    }
    function makeNum(count){
        const idx = count-1;

        outer: for(let i=0; i<count; i++){
            if(i==0) {
                if(numberBuilder(count) === number) {
                    console.log("find ", numberBuilder(count), "count: ", count)
                    answer = count;
                    FOUND= true;
                    break outer;
                }
                cache[idx].add(numberBuilder(count));
                continue;
            }
            // console.log([i, count-i])

            const first = [...cache[i-1]];
            const second = [...cache[count-i-1]]

            for(let j = 0; j<first.length; j++){
                for(let k=0; k<second.length; k++){
                    const preOperand = first[j];
                    const postOperand = second[k];
                    // console.log(preOperand, postOperand);
                    const mathResults = math(preOperand, postOperand);

                    for(let l=0; l<mathResults.length; l++){
                        let value = mathResults[l]
                        if(value === number) {
                            console.log("find ", value, "count: ", count)
                            answer = count;
                            FOUND= true;
                            break outer;
                        }
                        cache[idx].add(value);
                    }
                }
            }
        }
    }

    function math(pre, post){
        const result =  [pre+post, pre-post, pre*post];
        if(post !== 0) result.push(Math.floor(pre/post))
        return result;
    }
    return answer;
}

function makeNumberByLength(n){
    return function(length){
        let str = "";
        for(let i=0; i< length; i++){
            str += n;
        }
        return Number(str);
    }
}

solution(5, 12);
solution(2,11)
solution(3,3)
/**
 * set을 처음 사용해봤다. 그런데 순서가 없어서 다시 배열로 바꿔서 모든 원소를 차례로 탐색해야 했다. 
 * forEach같은 것들은 중간에 break가 안되서....
 * 
 * 중첩 반복문을 탈출하는 방법을 새롭게 알았다. 반복문에 태그처럼 이름을 달아주고 break tag; 를 하면 inner 반복문에서 outer를 바로 빠져나올 수 있다.
 * 그런데 함수 자체를 반복문을 돌려 실행시키고 있어서 함수 밖 반복문을 제어하지 못해서 FOUND라는 변수를 이용해서 반복문을 빠져나올 수 있도록 했다. 
 * 더 좋은 방법이 있을 것 같은데... 
 * 
 * dp는 가장 먼저 문제를 점화식으로 표현할 수 있어야 한다. 
 * 
 * 1개: N
 * 2개: NN, 1개집합(사칙)1개집합
 * 3개: NNN, 1개집합(사칙)2개집합, 2개집합(사칙)1개집합
 * 4개: NNNN, 1개집합(사칙)3개집합, 2개집합(사칙)2개집합, 3개집합(사칙)1개집합
 * k개: N...N(k개), 1개집합(사칙)k-1개집합, 2개집합(사칙)k-2개집합, ... , k-1개집합(사칙)1개집합
 * 
 * k로 하면 연산해야하는 경우의 수가 많아지지만, 문제에서 최대 8개까지만 사용할 슈 있다고 제한을 걸어서 8까지의 경우만 계산하면 된다. 
 * k개 집합을 미리 저장해두고 나중에 꺼내다 연산한다. 
 * 
 * 나눗셈을 할 때 0 예외처리 꼭 할것!
 */