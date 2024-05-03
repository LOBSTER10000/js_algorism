function solution(s) {
    let num = Math.round(s.split('').length/2);
    let words = s.split('');
    return s.length%2 == 0 ? words[num-1].concat(words[num]): words[num-1];
}