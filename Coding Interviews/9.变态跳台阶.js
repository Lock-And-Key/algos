function jumpFloorII(number)
{
    if(number == 1){
        return 1
    }
    var result = 1
    for(var i = 1;i < number;i++){
        result *= 2
    }
    return result
}
log(jumpFloorII(5))
