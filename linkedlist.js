const list = {
    head : {
        value : 90,
        next : {
            value : 10,
            next : {
                value : 89,
                next : {
                    value : 100,
                    next : null
                }
            }
        }
    }
}

// 이것이 기초적인 연결 리스트의 모습

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    append(data){
        let 새로운노드 = new Node(data);

        this.tail.next = 새로운노드;
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }

    toString(){
        let 순회용 =  this.head;
        순회용 = 순회용.next;

        let s = '';
        for(let i=0; i< this.데이터수; i++){
            s += `${순회용.data}, `
            순회용 = 순회용.next;
        }
        return [s.slice(0, -2)];
    }
}


link1 = new LinkedList();

link1.append(30);
link1.append(40);
link1.append(50);
link1.append(20);


console.log(link1.length());
console.log(link1.head);
console.log(link1.toString());