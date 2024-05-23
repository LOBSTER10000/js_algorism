function solution(s) {
    s = s.toLowerCase();
    s = s.split('');
    s.map((e,i)=>{
        s[0] = s[0].toUpperCase();
        
        if(s[i-1] == ' '){
            s[i] = s[i].toUpperCase();        
        } 
        
    })
    
    
    return s.join('')
}