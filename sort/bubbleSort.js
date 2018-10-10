function bubbleSort(arr) {
    var len = arr.length
    for(var i = 0; i < len - 1; i++){
        for(var j = 0; j < len - i - 1; j++){
            if(arr[j] < arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


console.log(bubbleSort([3, 1, 4, 2, 5]))
