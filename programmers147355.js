
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