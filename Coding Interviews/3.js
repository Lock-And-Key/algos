function printListFromTailToHead(head)
{
    var arr = []
    while (arr != null) {
        arr.unshift(head.val)
    }
    return arr
}
