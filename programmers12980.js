function solution(n){
    var ans = 0;
    
    while(n >= 0){
        if(n%2 == 0){
            n = n/2
        } else if (n%2 == 1){
            n = n-1
            ans++;
        }   
        
        if(n == 0){
            break;
        }
    }

    return ans;
}