function FindGreatestSumOfSubArray(array)
{
    var pre = array[0]
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
        pre = pre > 0 ? pre : 0
        max = Math.max(max, pre + array[i])
        pre = pre + array[i]
    }
    return max
}
