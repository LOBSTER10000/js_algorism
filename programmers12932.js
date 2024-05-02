function solution(n) {
    n = String(n);
    n =n.split('');
    let array = [];
    
    n = n.reverse();
    n.forEach((e)=>{
        array.push(parseInt(e));
    })
    
    return array;
}