function solution(arr1, arr2) {
    arr1.map((arr,i)=>{
        arr.map((x,y)=>{
            arr2[i][y] += x;
        })
    })
    
    return arr2;
}