
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
function solution(t, p) {
    var array = [];
    var answer = 0;
    var lengths = p.split('').length;
    var topos = t.split('');

    for(let i= 0; i < t.length; i++){
        array = [];
        array = topos.slice(i, i+lengths);
        array = array.join('')

        if(parseInt(array) <= parseInt(p)){
            if(array.length == lengths){
            answer++;
           }
        }
    }
    return answer;
}