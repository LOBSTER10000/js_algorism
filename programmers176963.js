let sum= [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];
let mays = ["may", "kein", "kain", "radi"]
let money =[5, 10, 1, 3];
let sums = 0;
let result = [];
let result2 = [];
let mayz = 'mayzrwtrdadz';

console.log(mayz.includes('may'));
console.log(mayz.replace('may', '0'));
sum.map(array=>{
    mays.map((e,i)=>{
        if(array.includes(e) == true){
            sums += money[i]
        } else {
            sums += 0;
        } 
    })
    result.push(sums);
    sums = 0;
})

console.log(result);

