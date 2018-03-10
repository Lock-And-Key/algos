function MoreThanHalfNum_Solution(numbers){
    var left = 0
    var arr = numbers
    var right = arr.length - 1
    var pivot = right
    var index = -1
    var mid = Math.floor(arr.length/2)
    while (index != mid) {
        /*
         可以试试去掉下面的 ifelse ,只写 index = partition(arr, left, right) 是什么结果
         answer: 死循环
         */
        if(index > mid){
            right = index - 1
            index = partition(arr, left, right)
        }
        else{
            left = index + 1
            index = partition(arr, left, right)
        }
    }
    return checked(arr, arr[mid]) ? arr[mid] : 0
}

function partition(arr, left, right){
    var pivot = Math.floor(Math.random()*(right - left) + left)
    var pivotValue = arr[pivot]
    swap(arr, pivot, right)
    var partitionIndex = left
    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, partitionIndex, i)
            partitionIndex++
        }
    }
    swap(arr, partitionIndex, right)
    return partitionIndex
}

function checked(arr, index) {
    var count = 0
    for(var s of arr){
        if(s == index){
            count++
        }
    }
    return count*2 > arr.length
}

function swap(arr, a, b){
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}