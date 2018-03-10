// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    var arr = []
    var result = []
    if(root == null){
        return null
    }
    arr.push(root)
    while(arr.length != 0){
        var r = arr.shift()
        log("arr",arr)
        result.push(r)
        if(r.left != null){
            arr.push(r.left)
        }
        if(r.right != null){
            arr.push(r.right)
        }

    }
    return result
}

var T1 = new TreeNode(1)
var T2 = new TreeNode(2)
var T3 = new TreeNode(3)
var T4 = new TreeNode(4)
var T5 = new TreeNode(5)
T1.left = T2
T1.right = T3
T2.right = T4
T3.left = T5

log(PrintFromTopToBottom(T1))
