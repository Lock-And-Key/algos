function Find(target, array)
{
    var rows = array[0].length
    var columns = array.length
    var row = 0
    var column = columns - 1
    while (row < rows && column >= 0) {
        var number = array[row][column]
        if(number == target){
            return true
        } else if (number < target) {
            row++
        } else {
            column--
        }
    }
    return false
}
