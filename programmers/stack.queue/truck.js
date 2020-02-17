function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const onRoad = [];
    const time = [];
    let weightSum = 0;
    let ISFIRST = true;
    
    while(onRoad.length >0 || truck_weights.length > 0){
      
        console.log(answer+ "초 " + "다리를 건너는 트럭", onRoad, "대기 ", truck_weights + "/ time"+ time +" sum " +weightSum)
        let l = onRoad.length-1;
        
        while(l >= 0){
            time[l] -=1;
            if(l==0 && time[l] == 0){
               weightSum -= onRoad[l]
                time.shift();
                onRoad.shift();
            }
            
            l--;
        }
        if(onRoad.length <= bridge_length && weightSum+truck_weights[0] <= weight){
            const truck = truck_weights.shift();
            weightSum += truck;
            onRoad.push(truck);
            time.push(bridge_length)
        }
        answer++;
    }
    return answer;
}