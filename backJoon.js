
function yoon(a){
    if( (a&4 == 0 && a%100 != 0) || (a%4 ==0 && a%400 == 0) ){
        return 1;
    }
   
    return 0;
}

console.log(
    yoon(1998)
);