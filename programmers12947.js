function solution(x, n) {
    var answer = [];
    var z = 0;
    while(n > 0){
        z += x;
        n--;
        answer.push(z);
    }
   
    return answer;
}