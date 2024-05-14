class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    insert(x){
        if(this.root == null){
            return this.root = new Node(x);
        }

        return this.insertElm(this.root, x);
    }

    insertElm(node, x){
        if(node.value == null){
            throw new Error('루트의 값이 비었습니다'); 
        }

        if(x > node.value){
            if(node.right == null){
                return node.right = new Node(x);
            } else{
                return this.insertElm(node.right, x);
            }
        } else if (x < node.value){
            if(node.left == null){
                return node.left = new Node(x);
            } else {
                return this.insertElm(node.left, x);
            }
        } else{
            throw new Error('현재 똑같은 값이 존재합니다');
        }
    }

    search(x){
        if(this.root == null){
            throw new Error('루트값이 존재하지 않습니다');
        }

        return this.searchElm(this.root, x);
    }

    searchElm(node, x){
        if(node.value == null){
            throw new Error('노드가 비어있습니다');
        }

        if(node.value > x){
            console.log(node.value);
            if(node.left == null){
                throw new Error('노드가 비어있습니다');
            } else {
                return this.searchElm(node.left, x);
            }
        }

        else if(node.value < x){
            console.log(node.value);
            if(node.right == null){
                throw new Error('노드가 비어있습니다');
            } else {
                return this.searchElm(node.right, x);
            }
        }

        else{
            return node.value;
        }
    }

    remove(x) {
        if (this.root === null) {
            throw new Error('현재 존재하는 값이 없습니다');
        }

        this.root = this.removeElm(this.root, x);
    }

    removeElm(node, x) {
        if (node === null) {
            throw new Error('현재 값이 존재하지 않습니다');
        }

        if (x > node.value) {
            node.right = this.removeElm(node.right, x);
        } else if (x < node.value) {
            node.left = this.removeElm(node.left, x);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null && node.right !== null) {
                return node.right;
            } else if (node.left !== null && node.right === null) {
                return node.left;
            } else {
                let maxNode = this.findMax(node.left);
                node.value = maxNode.value;
                node.left = this.removeElm(node.left, maxNode.value);
            }
        }

        return node;
    }

    findMax(node) {
        while (node.right) {
            node = node.right;
        }
        return node;
    }
}

let tree = new Tree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(7);

console.log(tree);
console.log(tree.search(7));
tree.remove(9);
console.log(tree.root.right);
