var Insertion = function(arr){
    var N = arr.length
    for(var i = 1; i < N; i++){
        for(var j = i; j > 0 && arr[j] < arr[j-1]; j--){
            exchange(arr, j - 1, j)
        }
    }
    return arr
}

var exchange = function(arr, a, b){
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


log(Insertion([9,2,5,1,3,5,5,1,3,7,8]))

class Model {
    static logNameModel() {

        console.log(this.name);
    }
}

class User extends Model {
    constructor() {
        super()
    }
    static logNameUser() {
        const cls = this.constructor
        cls.logNameModel()
    }
}
var u = new User()
