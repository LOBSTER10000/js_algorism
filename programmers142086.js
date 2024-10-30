function solution(s) {
    let array =[];
    let array2 = [];
    s = s.split('');
    for(let i=0; i< s.length; i++){
        if(array.includes(s[i]) == false){
            array.push(s[i]);
            array2.push(-1);
        } else if(array.includes(s[i]) == true){
              let num = array.lastIndexOf(s[i]);
              array.push(s[i]);
              array2.push(i-num);
        }
    }
    return array2;
}


// 첫번째 풀이


const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

// 스프레드와 map을 사용하여 수정
