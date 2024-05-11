class Queue{
    constructor(maxSize){
        this.arr = [];
        this.size = 0;
        this.rear = 0;
        this.front = 0;
        this.maxSize = maxSize;
    }

    enqueue(a){
        if(this.size >= this.maxSize){
            throw new Error('overflow stack');
        }

        this.arr[this.rear] = a;
        let enqueue = a;
        this.size++;
        this.rear = (this.rear + 1) % this.maxSize;
        return enqueue;
    }

    dequeue(){
        if(this.size <= 0){
            throw new Error('underflow stack');
        }

        let dequeue = this.arr[this.front];
        delete this.arr[this.front];  
        this.size--;
        this.front = (this.front + 1) % this.maxSize;
        
        return dequeue;
    }

    isFull(){
        return this.rear == this.front;
    }

    isEmpty(){
        return this.size == 0 ? true : false;
    }

    getSize(){
        return this.size;
    }
}


let q1 = new Queue(10);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.enqueue(8);

q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.enqueue(7);
q1.enqueue(8);
q1.enqueue(9);
q1.enqueue(10);
q1.enqueue(11);
q1.enqueue(12);
q1.dequeue();
q1.dequeue();
console.log(q1);