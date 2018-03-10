// 题目描述
// 输入一个链表，反转链表后，输出链表的所有元素。
function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    if(pHead == null){
        return 0
    }
    var ptr1 = pHead
    var ptr2 = null
    var temp = null
    while (ptr1 != null) {
        temp = ptr1.next
        ptr1.next = ptr2
        ptr2 = ptr1
        ptr1 = temp
    }
    while (ptr2 != null) {
        log(ptr2)
        ptr2 = ptr2.next
    }
}

var L1 = new ListNode(1)
var L2 = new ListNode(2)
var L3 = new ListNode(3)
var L4 = new ListNode(4)
L1.next = L2
L2.next = L3
L3.next = L4
ReverseList(L1)
