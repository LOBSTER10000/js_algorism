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

    
    insert(value){
        if(!this.root){
            this.root = new Node(value);
            return;
        } 
        return this.insertElm(this.root, value);
    }

    insertElm(node, value){
        
        if(value < node.value){
            if(!node.left){
                node.left = new Node(value);
            } else{
                return this.insertElm(node.left, value);
            }
        } else if(value > node.value){
            if(!node.right){
                node.right = new Node(value);
            } else {
                return this.insertElm(node.right, value);
            }
        } else if(value == node.value){
            throw new Error('같은 값이 존재합니다');
        }
    }

    search(value){
        if(this.root == null){
            throw new Error('error');
        }

        console.log('길찾기를 시작합니다.');
        console.log(`${this.root.value}`);
        let root = this.root;
        if(root.value != value){
            return this.searchElm(root, value);
        } else{
            return value;
        }
    }

    searchElm(root, value){
        if(root.value < value){
            if(!root.right){
                return '값이 존재하지 않습니다';
            } else {
                console.log(`${root.right.value}`);
                return this.searchElm(root.right, value);
            }
        } else if (root.value < value){
            if(!root.left){
                return '값이 존재하지 않습니다';
            } else {
                console.log(`${root.right.value}`);
                return this.searchElm(root.left, value);
            }
        } else {
            return '결과 도달';
        }
    }

    delete(value){
        if(this.root == null){
            
        }
    }
}


let tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(11);
tree.insert(12);

console.log(tree.search(12));