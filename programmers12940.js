const gdc = (a,b)=>{
    let c =0;
    if(a > b){
        c = a;
        a = b;
        b = c;
    }
    
    if(b%a==0){
       return a 
    }
    
    return gdc(a, b%a)
}

function solution(n, m) {
    var answer = [];
    let gdc2 = gdc(n,m);
    let x = parseInt(n/gdc2);
    let y = parseInt(m/gdc2);
    
    answer.push(gdc2);
    answer.push(gdc2*x*y);
    return answer;
}