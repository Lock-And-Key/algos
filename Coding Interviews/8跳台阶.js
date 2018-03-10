//solution1
function jumpFloor(number)
{
    var n = number
    if(n == 1){
        return 1
    }
    if(n == 2){
        return 2
    }
    return jumpFloor(n-1) + jumpFloor(n-2)
}
//solution2
function jumpFloor(number)
{
    var n = number
    if(n <= 2){
        return n
    }
    var j1 = 2
    var j2 = 1
    var jump = 0
    for(let i = 3;i <= number;i++){
        jump = j1 + j2
        j2 = j1
        j1 = jump
    }
    return jump
}
