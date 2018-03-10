function Permutation(str)
{
    if(str.length == 0){
        return null
    }
    var result = []
    Recur(str, 0, result)
    return result
}

var Recur = function(str, begin, result){

}
