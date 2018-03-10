// 输入n个整数，找出其中最小的K个数。
// 例如输入4,5,1,6,2,7,3,8这8个数字，
// 则最小的4个数字是1,2,3,4,。
var log = console.log.bind(console)


function GetLeastNumbers_Solution(input, k)
{
    var left = 0
    var right = input.length - 1
    var index = partition(input, left, right)
    var result = []
    while(index != k - 1){
        if(index > k - 1){
            right = index - 1
            index = partition(input, left, right)
        }
        else{
            left = index + 1
            index = partition(input, left, right)
        }
    }
    for(var i = 0; i <= index; i++){
        result.push(input[i])
    }
    return result
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


function swap(arr, a, b) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
for(let i = 1; i < 10; i++){
    log(GetLeastNumbers_Solution([9,1,3,5,6,7,4,8,2], i))
}

