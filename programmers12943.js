function solution(num) {
    let answer = 0;
    while(num > 1){
        if(num%2 ==0){
           num = parseInt(num/2);
           answer++;
        } else if(num%2 !=0){
           num = parseInt(num*3)+1;
           answer++;
        }
    }
   
    return answer > 500 ? -1 : answer;
}