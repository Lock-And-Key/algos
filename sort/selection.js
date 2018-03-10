var Selection = function(arr){
    var N = arr.length
    for(var i = 0; i < N; i++){
        var min = i
        for(var j = i + 1; j < N; j++){
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        exchange(arr, i, min)
    }
    return arr
}

var exchange = function(arr, a, b){
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


log(Selection([9,2,5,1,3,5,5,1,3,7,8]))
