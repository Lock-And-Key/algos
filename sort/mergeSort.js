// NlogN
function mergeSort (arr) {
    if (arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))//字里行间闪烁着智慧的光芒
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


/*
以下程序有bug, 求指正
var mergeArray = function(arr, first, mid, last){
    var i = first
    var j = mid + 1
    var temp = []
    var k = first
    while (i <= mid && j <= last) {
        if(arr[i] < arr[j]){
            temp[k++] = arr[i++]
        } else {
            temp[k++] = arr[j++]
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= last) {
        temp[k++] = arr[j++]
    }
    for(var i = 0; i < k; i++){
        arr[first + i] = temp[i]
    }
}

var merge = function(arr, first, last){
    log('**arr**',arr,'first',first,'last',last)
    if(first < last){
        // log('enter')
        var mid = (first + last) / 2
        mid = parseInt(mid)
        log('mid', mid)
        merge(arr, first, mid)
        merge(arr, mid + 1, last)
        mergeArray(arr, first, mid, last)
    }
}

var mergeSort = function(arr){
    var r = arr
    log('**1**',arr)
    merge(arr, 0, arr.length - 1)
    return r
}
log(mergeSort([9,2,5,1,4,10,6,11,3,7,8]))
*/

// Split the array into halves and merge them recursively
