function next_permutation(arr) {
    var begin = 0
    var end = arr.length - 1
    // 0 or 1 element has no prev permutation
    if(begin == end || ++i == end){
        return 0
    }
    for(var i = end; i != begin;){
        j = i--
        log('* i j', i, j)
        if (!(arr[i] > arr[j])){
            continue
        }
        log('arr[i], arr[--k]', arr[i], arr[end - 1])
        for(k = end; !(arr[i] > arr[--k]) && k >= 0; ){
            log('k, i', k, i)
            continue
        }
        log('swap i k', i, k)
        swap(arr, i, k)
        reverse(arr, j, end)
        return 1
    }
    reverse(begin, end)
    return 0
}

function swap(arr, a, b) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function reverse(arr, start, end) {
    while(start < end){
        swap(arr, start, end)
        start++
        end--
    }
}

var arr = [7, 6, 5, 4, 3, 2, 1]
log(next_permutation(arr))
log(arr)