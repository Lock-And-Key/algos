/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    if(pRootOfTree == null){
        return null
    }
    var lastNode = null
    lastNode = Recur(pRootOfTree, lastNode)
    var head = lastNode
    while (head && head.left) {
        head = head.left
    }
    return head
}

var Recur = function(node, lastNode){
    if(!node){
        return
    }
    if(node.left) {
        lastNode = Recur(node.left, lastNode)
    }
    node.left = lastNode
    if(lastNode){
        lastNode.right = node
    }
    lastNode = node
    if(node.right){
        lastNode = ConvertNode(node.right, lastNode)
    }
    return lastNode
}
