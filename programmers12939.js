function solution(s) {
    let answer= '';
    let q = [];
    s = s.split(' ');
    s = s.sort((a,b)=>a-b);
    
    s.map((e,i)=>{
        if(s[i] == ' '){
            
        } else {
            q.push(s[i])
        }
    })
    return answer = `${q[0]} ${q[q.length-1]}`
}