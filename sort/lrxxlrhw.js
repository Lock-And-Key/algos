function quickSort(arr, left, right) {
    if (left < right) {
        var len = arr.length
        var pivot = right
        var partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}
function partition() {
    var partitionIndex = left
    var pivotValue = arr[pivot]
    for (var i = left; i < right; i++) {
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex)
            partitionIndex++
        }
    }
    swap(arr, i, partitionIndex)
    return partitionIndex
}

function functionName(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
