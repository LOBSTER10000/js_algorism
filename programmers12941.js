function solution(A,B){
    var answer = 0;
    let C = [];
    A = A.sort((a,b)=>b-a);
    B = B.sort((a,b)=>a-b);
    for(let i= 0; i < A.length; i++){
        A[i] = A[i] * B[i]
    }
    
    A.map((e,i)=>{
        answer += A[i]
    })
    return answer;
}