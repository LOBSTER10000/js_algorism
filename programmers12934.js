function solution(n) {
    return Math.sqrt(n) == Math.trunc(Math.sqrt(n)) ? (Math.sqrt(n)+1) * (Math.sqrt(n)+1): -1 ;
}