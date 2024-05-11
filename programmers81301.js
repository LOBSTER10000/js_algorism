function solution(s) {
    var number = ['0','1','2','3','4','5','6','7','8','9'];
    var eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    eng.map((e,i)=>{
        if(s.includes(e)==true){
            for(let j=0; j < eng.length; j++){
                s = s.replace(e, number[i]);
            }
        }
    })
    
    return parseInt(s);
}

console.log(solution("2three45sixsix"));