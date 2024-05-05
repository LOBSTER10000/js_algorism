function solution(n) {
    let array = [];
    for(let i =1; i<= n; i++){
        i%2 == 1 ? array.push('수') : array.push('박');
    }
    return array.join("");
}