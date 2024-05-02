function solution(n) {
    n = String(n);
    n = n.split('');
    let array = [];
    let words = '';
    
    n.forEach((e)=>{
        array.push(parseInt(e));
    });
    
    array = array.sort().reverse();
    array = array.forEach((e)=>{
        words += String(e);
    });
    
    return Number(words);
}