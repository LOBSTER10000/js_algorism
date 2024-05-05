let array = [1,1,1,1,1,1,1];

let sum = array.filter((a,b)=>{
    array.indexOf(a) === b;
})

console.log(sum);

NaN
let number = '1234';
let numbers = number.split('');
console.log(isNaN(Number(numbers)));
console.log(number.split('').map((e)=> isNaN(Number(e)) == true));