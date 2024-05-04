function solution(arr, divisor) {
    let array = [];
    arr.reduce((a,b)=>{if(b%divisor==0) return array.push(b)},0)
    return array.length == 0 ? [-1] : array.sort((a,b)=>a-b);
}