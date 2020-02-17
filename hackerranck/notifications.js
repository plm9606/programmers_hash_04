'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    // let acc = [];
    let accSum = 0;
    let count = 0;

    const acc = expenditure.slice(0,d);
    // 처음 한번만 소팅을 한다. 
    acc.sort((a,b)=> a-b)
    for(let i=d; i<expenditure.length; i++){
        let median;
        if(d%2==0){
            const temp = d/2
            median = (acc[temp]+acc[temp-1])/2
        }else{
            median = acc[(d-1)/2]
        }
        // console.log(median, expenditure[i], i)
        if(median*2 <= expenditure[i]){
            count += 1;
        }
        // binary search를 이용해 새 노드를 추가한다. 
        acc.splice(acc.indexOf(acc[i-d]),1)
        binary(expenditure[i], acc, 0, acc.length-1);
        // console.log(acc)
    }

    return count;
}

function binary(goal, list, start, end){
    let centerIdx;
    if((end-start) <= 1){
        for(let i=start; i<=end; i++){
            if(goal === list[i]) {
                    // console.log("find ", i);
                    // put goar after i
                    list.splice(i+1, 0, goal)
                    return;
                    break;
            }
            if(i+1<list.length){
                if(list[i]<goal && list[i+1]>goal){
                    // console.log("find goal and have to be positioned between ", i, i+1);
                    // put goal after i
                    list.splice(i+1, 0, goal)
                    return;
                    break;
                }
            }
        }
        // console.log("goal is bigger than list items. just push")
        list.push(goal)
        return;
    }

    let length = end-start+1;
    if(length%2===0){
        centerIdx = length/2;
    }else centerIdx = (length+1)/2;

    //탐색한 원소가 목표보다 크면 왼쪽/2을 탐색
    if(list[centerIdx] === goal){
        console.log("find ", centerIdx);
        // put goar after i
        list.splice(centerIdx+1, 0, goal)
        return
    }
    if(list[centerIdx] > goal){
        binary(goal, list, start, centerIdx-1)
    }else{
        binary(goal, list, centerIdx+1, end);
    }

    // console.log(list)
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
