function solution(balls, share) {
    
    let sum1 = BigInt(1);
    let num1 = BigInt(balls); 
    while(true){
        if(num1 == 0){
            break;
        }
        sum1 *= num1;
        num1--;
    }
    
    let sum2 = BigInt(1);
    let num2 = BigInt(balls - share);
   
    while(true){
        if(num2 == 0){
            break;
        }
        sum2 *= num2;
        num2--;
    }

    let sum3 = BigInt(1);
    let num3 = BigInt(share);
   
    while(true){
        if(num3 == 0){
            break;
        }
        sum3 *= num3;
        num3--;
    }

    console.log(sum1, sum2, sum3);
    let answer = BigInt(sum1) / (BigInt(sum2) * BigInt(sum3));
    return answer;
}
