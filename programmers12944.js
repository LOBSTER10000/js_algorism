function solution(arr) {
    let sum = 0;
    arr.forEach(e=>{
        sum += e
    });
    
    return sum/arr.length
}