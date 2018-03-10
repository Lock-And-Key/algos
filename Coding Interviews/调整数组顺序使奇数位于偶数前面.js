function reOrderArray(array)
{
    var odd = []
    var even = []
    array.forEach(function(e) {
        if(e % 2 == 0){
            even.push(e)
        }else {
            odd.push(e)
        }
    })
    return odd.concat(even)
}
