class Stack1 {
    private arr : number[];

    constructor(){
        this.arr = [];
    }

    push(data : number){
        this.arr.push(data);
    }

    pop(index : number){
        if(index === this.arr.length -1){
            return this.arr.pop();
        }

        let result = this.arr.splice(index, 1);
        return result; 
    }

    empty(){
        if(this.arr.length === 0){
            return true;
        } else {
            return false;
        }
    }

    top(){
        return this.arr[this.arr.length-1];
    }

    bottom(){
        return this.arr[0];
    }
}

let s1 = new Stack1();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(30);

console.log(s1);

const empty = s1.empty();
console.log(empty);

const top1 = s1.top();
console.log(top1);
const bottom = s1.bottom();
console.log(bottom);

const pop1 = s1.pop(3);
console.log(pop1);
console.log(s1);