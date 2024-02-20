class Stack1 {
    private arr : number[];

    constructor(){
        this.arr = [];
    }

    push(data){
        this.arr.push(data);
    }
}

let s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(30);

console.log(s1);