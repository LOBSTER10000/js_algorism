function solution(arr) {
    let min = Math.min(...arr);
    let arr1 = arr.slice(0, arr.indexOf(min));
    let arr2 = arr.slice(arr.indexOf(min)+1, arr.length);
    let arr3 = arr1.concat(arr2);
    return arr3.length == 0 ? [-1] : arr3
}