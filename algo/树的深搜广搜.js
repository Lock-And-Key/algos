/*
void breadthFirstTravel(Node* root){
    queue<Node *> nodeQueue;  //使用C++的STL标准模板库
    nodeQueue.push(root);
    Node *node;
    while(!nodeQueue.empty()){
        node = nodeQueue.front();
        nodeQueue.pop();
        printf(format, node->data);
        if(node->lchild){
            nodeQueue.push(node->lchild);  //先将左子树入队
        }
        if(node->rchild){
            nodeQueue.push(node->rchild);  //再将右子树入队
        }
    }
}

void depthFirstTravel(Node* root){
    stack<Node *> nodeStack;  //使用C++的STL标准模板库
    nodeStack.push(root);
    Node *node;
    while(!nodeStack.empty()){
        node = nodeStack.top();
        printf(format, node->data);  //遍历根结点
        nodeStack.pop();
        if(node->rchild){
            nodeStack.push(node->rchild);  //先将右子树压栈
        }
        if(node->lchild){
            nodeStack.push(node->lchild);  //再将左子树压栈
        }
    }
}

*/

var breadthFirstTravel = function (root) {
    let queue = []
    queue.push(root)
    let node
    while(node.length != 0){
        node = queue.shift()
        console.log(node.val)
        if(node.left != null){
            queue.push(node.left)
        }
        if(node.right != null){
            queue.push(node.right)
        }
    }
}


var depthFirstTravel = function (root) {
    let stack = []
    stack.push(root)
    let node
    while(node.length != 0){
        node = node.pop()
        console.log(node.val)
        if(node.right != null){
            stack.push(node.right)
        }
        if(node.left != null){
            stack.push(node.left)
        }
    }
}
