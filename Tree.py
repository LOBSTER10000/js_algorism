class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None
class Tree:
    def __init__(self):
        self.header = None
    def insert(self, x):
        if self.header is None:
            self.header = Node(x)
        else:
            self._insertElm(self.header, x)
    def _insertElm(self, current_node, x):
        if x == current_node.value:
            raise ValueError('중복된 값이 존재합니다')
        elif x < current_node.value:
            if current_node.left is None:
                current_node.left = Node(x)
            else:
                self._insertElm(current_node.left, x)
        else:
            if current_node.right is None:
                current_node.right = Node(x)
            else:
                self._insertElm(current_node.right, x)
    def search(self, x):
        if self.header is None:
            raise ValueError('현재 아무런 값이 존재하지 않습니다')
        else:
            return self.searchElm(self.header, x)
    def searchElm(self, node, x):
        if node is None:
            raise ValueError('현재 값이 없습니다')
        if node.value > x:
            print(node.value)
            return self.searchElm(node.left, x)
        elif node.value < x:
            print(node.value)
            return self.searchElm(node.right, x)
        elif node.value == x:
            return node.value
    def remove(self, x):
        if self.header is None:
            raise ValueError('현재 아무런 값이 존재하지 않습니다')
        else:
            return self.removeElm(self.header, x)
    def removeElm(self, node, x):
        if node is None:
            raise ValueError('현재 값이 존재하지 않습니다')
        if node.value > x:
            node.left = self.removeElm(node.left, x)
        elif node.value < x:
            node.right = self.removeElm(node.right, x)
        elif node.value == x:
            if node.left is None and node.right is None:
                return  None
            elif node.left is None and node.right != None:
                return node.right
            elif node.left != None and node.right is None:
                return node.left
            else:
                replace_node = self.findMax(node.left)
                node.value = replace_node.value
                node.left = self.removeElm(node.left, replace_node.value)
        return node
    def findMax(self, node):
        while node.right:
            node = node.right
        return node






