function solution(numbers) {
    let array = [1,2,3,4,5,6,7,8,9];
    let sum = array.reduce((a,b)=>{
        return a+b
    },0);
    let sum2 = numbers.reduce((a,b)=>{
        return a+b
    },0)
    return sum -sum2;
}