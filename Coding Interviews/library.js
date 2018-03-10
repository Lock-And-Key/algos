var log = function() {
    console.log.apply(console, arguments)
}
//Generate a random integer array between [0,coeff]
var GenerateRandomArr = function(count=20,coeff=100){
    var arr = []
    for(let i = 0;i < count;i++){
        var a = Math.floor(coeff*Math.random())
        arr.push(a)
    }
    log(arr)
    return arr
}
//traverse the array with random integer number
var ArrayTraverse = function(arr,func){
    for(let i = 0; i < arr.length;i++){
        func(arr[i])
    }
}

var LinkedListTraverse = function(L,func){
    while(L != null){
        func(L.val)
        L = L.next
    }
}
