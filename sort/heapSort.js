function adjustHeap(arr, pos, len){
    var swap = arr[pos]
    var child = post*2 + 1
    while (child < len) {
        if(child + 1 < len && arr[child] < arr[child + 1]){
            child + 1
        }

        if(arr[pos] < arr[child]){
            arr[pos] = arr[child]
            pos = child
            child = pos * 2 + 1
        } else {
            break
        }
        arr[pos] = swap
    }
}

function buildHeap(arr){
    for (var i = arr.length/2; i >= 0; i--) {
        adjustHeap(arr, i, arr.length)
    }
}

function heapSort(arr){
    buildHeap(arr)
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[0]
        arr[0] = swap
        adjustHeap(arr, 0, i)
    }
}

var a = [16,7,3,20,17,8];
heapSort(a,a.length);
console.log(a);
