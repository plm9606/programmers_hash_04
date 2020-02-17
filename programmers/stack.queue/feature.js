// 기능 개발

function solution(progresses, speeds) {
    var answer = [];
    
    while(progresses.length >0 ){
        if(progresses[0] >= 100){
            let jobs = 0;
            while(true){
                if(progresses[0] >= 100){
                    jobs ++;
                    progresses.shift();
                    speeds.shift();
                }else break;
            }
            answer.push(jobs);
        }
       for(let i=0; i< progresses.length; i++){
           progresses[i] += speeds[i];
       } 
    }
    return answer;
}