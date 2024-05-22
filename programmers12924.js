function solution(n) {
    let sum =0;
    let answer = 0;
    
    for(let i= 1; i<= n; i++){
        sum = 0;
        sum = sum + i;
        if(sum == n){
            answer++;
            break;
        }
        for(let j = i+1; j<= n; j++){
            if(j > n){
                j = n;
            }
            sum = sum + j
            if(sum == n){
                answer++;
                break;
            } else if(sum > n){
                break;
            }
        }
    }
    return answer;
}