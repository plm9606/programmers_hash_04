function solution(people, limit) {
    var answer = 0;
    const answerList = [];
    people.sort((a,b)=> a-b);
    
    people.forEach(weight=>{
        if(weight >limit) {answerList.push(weight);return;}
        else if (weight === limit ) {
            // 리스트에 같은게 있는지 검사 후
            // 넣는다
            return;
        }
        
    })
    return answer;
}