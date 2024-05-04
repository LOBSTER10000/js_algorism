let array = [1,2,3,4,5];

// forEach

let sum = 0;

array.forEach((e)=> sum+=e); // 
console.log(sum);

// reduce

let sums = array.reduce((a,b)=>{
   return a+b;
},0)

console.log(sums);