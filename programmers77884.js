function solution(left, right) {
    var answer = 0;
    let array = [];
    while(left <= right){
        
        for(let i=1; i <=left; i++){
            if(left%i ==0){
                array.push(i);
            }        
        }
        
        if(array.length%2==0){
            answer += Math.max(...array);
        } else{
            answer -= Math.max(...array);
        }
         array = [];
         left++;
    }
    
    return answer;
}