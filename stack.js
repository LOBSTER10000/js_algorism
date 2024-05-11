class Stack{
    constructor(maxSize){
        this.arr = [];
        this.size = 0;
        this.maxSize = maxSize;
    }

    push(a){
        if(this.size >= this.maxSize){
            throw new Error('overflow stack');
        }

        this.arr[this.size] = a;
        this.size++;
        return a;
    }

    pop(){
        if(this.size <= 0){
            throw new Error('underflow stack');
        }

         let removed = this.arr[this.size - 1];
         this.arr = this.arr.slice(0, this.size-1);
         this.size--;
         return removed;
    }

    isEmpty(){
       return this.size == 0 ? true : false;
    }

    top(){
        return this.arr.length == 0 ? -1 : this.arr[this.size - 1];
    }

    peek(){
        return this.arr;
    }

    getSize(){
        return this.arr.length; 
    }
}

let s1 = new Stack(10);

s1.push(5);
s1.push(6);
s1.push(7);
s1.push(8);

s1.pop();
s1.pop();
s1.pop();
s1.pop();

s1.push(10);
console.log(s1.peek());
console.log(s1.isEmpty());
console.log(s1.top());
console.log(s1.getSize());
