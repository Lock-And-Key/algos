// 两种方法
function rectCover(number)
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

log(rectCover(5))
