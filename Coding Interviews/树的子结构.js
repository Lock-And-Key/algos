function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    if(pRoot2 == null){
        return false
    }
    if(pRoot1 == null){
        return false
    }
    var result = isSubtree(pRoot1,pRoot2) || HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2)
    return result
}
var isSubtree = function(root1,root2){
    if(root2 == null)
        return true
    if(root1 == null)
        return false
    if(root1.val == root2.val){
        return isSubtree(root1.left,root2.left) && isSubtree(root1.right,root2.right)
    } else {
        return false
    }
}
