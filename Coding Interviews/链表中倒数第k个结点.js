//法一,从头到尾遍历一遍得到长度,第二次遍历可得
//法二,从头到尾遍历一遍存在数组里,取出来即可
//法三如下
function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    if(head == null||k == 0)
        return 0
    var ptr1 = head ,ptr2 = head
    for(var i = 0;i < k - 1;i++){
        ptr1 = ptr1.next
    }
    //以下三行很重要,节点个数是否小于k
    if(ptr1 == null){
        return 0
    }
    while (ptr1.next != null) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }
    return ptr2
}

var L1 = new ListNode(1)
var L2 = new ListNode(2)
var L3 = new ListNode(3)
var L4 = new ListNode(4)
L1.next = L2
L2.next = L3
L3.next = L4
var a = FindKthToTail(L1,2)
log("test:",a)
