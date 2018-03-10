function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length == 0 || vin.length == 0){
        return null
    }
    var root = pre[0]
    var binaryTree = new TreeNode(root)
    var rootIndex = vin.indexOf(root)
    var preLeft = [],preRight = [],vinLeft = [],vinRight = []
    var preLeft = pre.slice(1,rootIndex + 1)
    var preRight = pre.slice(rootIndex + 1)
    var vinLeft = vin.slice(0,rootIndex)
    var vinRight = vin.slice(rootIndex + 1)
    binaryTree.left = reConstructBinaryTree(preLeft,vinLeft)
    binaryTree.right = reConstructBinaryTree(preRight,vinRight)
    return binaryTree
}


var result = reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])
log("result",result)
