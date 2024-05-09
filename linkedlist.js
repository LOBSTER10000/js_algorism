class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }


}

let node1 = new Node(1);
let node3 = new Node(8);
let node2 = new Node(6);

let linkedList = new LinkedList(node1);
linkedList.head.next = node2;
linkedList.head.next.next = node3;
console.log(linkedList);