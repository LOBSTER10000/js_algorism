const gdm = (a,b)=>{
    let c;    
    if(a > b){
        c = a;
        a = b;
        b = c;
    }
    
    if(b%a==0){
        return a;
    }
    
    return gdm(a, b%a)
}

const lcm = (a,b)=>{
   let gdms = gdm(a,b);
   a = a/gdms
   b = b/gdms
   return gdms * a * b;
}

function solution(arr) {
    let number;
    while(arr.length > 1){
        number = lcm(arr[0], arr[1]);
        arr.splice(0, 2, number);
    }
    return number;
}
