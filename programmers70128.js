function solution(a, b) {
    var reduces = a.reduce((e,p,i)=>
        e+=a[i]*b[i]
    ,0);
    return reduces;
}