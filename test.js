    let brown = 18;
    let yellow = 6;
    
    var answer = [];
    let sum = brown + yellow;
    
    for(let i = 1; i<=sum; i++){
        if(sum%i ==0){
            answer.push(i);
        }
    }
    
    let elm = parseInt(answer[Math.floor(answer.length/2)]);
    let elm2 = parseInt(sum/elm)
    let elm3 = (elm-2)*(elm2-2)
    if(elm3 != yellow){
        elm = parseInt(answer[Math.floor(answer.length/2+1)])
        console.log('ab', elm)
        elm2 = sum/elm
        console.log('ab2', elm2);
    }
    answer = [];
   
    answer.push(elm)
    answer.push(elm2)
    
    console.log(answer);