function solution(a, b) {
    var c =0;
    var answer = [];
    var sum = 0;
    if(a>b){
        c = a;
        a = b;
        b = c;
    }
    
    while(a <= b){
        answer.push(a);
        a++; 
    }
    answer.forEach((e)=>sum+=e);
    return sum;
}