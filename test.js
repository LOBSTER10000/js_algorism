let array = [7,4,6,7,1,2,335,6,7,8];





let min = Math.min(...array);
console.log(min);

let arr1 = array.slice(0, array.indexOf(min));
let arr2 = array.slice(array.indexOf(min)+1, array.length);
let arr3 = arr1.concat(arr2);
// console.log(arr1)
// console.log(arr2);
console.log(arr3);
