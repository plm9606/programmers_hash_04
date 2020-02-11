function solution(heights) {
    var answer = [];
    
    const len = heights.length;
    
    while(heights.length >1){
        let FIND = false
        let node = heights.pop();
        for(let i = heights.length-1;i>=0;i--){
            if(heights[i] > node) {answer.unshift(i+1); 
                                   FIND = true;
                                   break;}
        }
        if(!FIND)
        answer.unshift(0);
    }
    answer.unshift(0)
        return answer;
}