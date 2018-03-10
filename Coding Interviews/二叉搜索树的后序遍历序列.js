// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
function VerifySquenceOfBST(sequence)
{
    if(sequence.length == 0)
        return false
    return verifyRecur(sequence,0,sequence.length - 1)
}

var verifyRecur = function(sequence,start,end){
    if (start >= end) {
        return true
    }
    var i = start
    while (i < end && sequence[i] < sequence[end]) {
        i++
    }
    for(var j = i; j < end; j++){
        if(sequence[j] < sequence[end]) {
                return false
        }
    }
    return verifyRecur(sequence,start,i-1) && verifyRecur(sequence,i,end-1)
}

//test
var r = VerifySquenceOfBST([5,7,6,9,11,10,8])
log(r)
