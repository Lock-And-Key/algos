// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
function ListNode(x){
    this.val = x;
    this.next = null;
}

// 方法一:循环
// function Merge(pHead1, pHead2)
// {
//     var rHead = new ListNode(0)//will be skipped later
//     var fHead = rHead
//     if(pHead1 == null){
//         return pHead2
//     }
//     if(pHead2 == null){
//         return pHead1
//     }
//     while (pHead1 != null && pHead2 != null) {
//         if(pHead1.val < pHead2.val){
//             fHead.next = pHead1
//             fHead = fHead.next
//             pHead1 = pHead1.next
//         } else {
//             fHead.next = pHead2
//             fHead = fHead.next
//             pHead2 = pHead2.next
//         }
//     }
//     while (pHead1 != null) {
//         fHead.next = pHead1
//         fHead = fHead.next
//         pHead1 = pHead1.next
//     }
//     while (pHead2 != null) {
//         fHead.next = pHead2
//         fHead = fHead.next
//         pHead2 = pHead2.next
//     }
//     return rHead.next
// }


// 方法一: 递归
function Merge(pHead1, pHead2){
    if(pHead1 == null){
        return pHead2
    }
    if(pHead2 == null){
        return pHead1
    }
    var rHead = null
    if(pHead1.val < pHead2.val){
        rHead = pHead1
        rHead.next = Merge(pHead1.next,pHead2)
    } else {
        rHead = pHead2
        rHead.next = Merge(pHead1,pHead2.next)
    }
    return rHead
}



//test
var L1 = new ListNode(1)
var L2 = new ListNode(3)
var L3 = new ListNode(5)
var L4 = new ListNode(7)
L1.next = L2
L2.next = L3
L3.next = L4

var L5 = new ListNode(2)
var L6 = new ListNode(4)
var L7 = new ListNode(6)
L5.next = L6
L6.next = L7

var result = Merge(L1,L5)
console.log(result);
LinkedListTraverse(result,log)
