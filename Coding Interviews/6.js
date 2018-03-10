// 12345
// 34512
// 45123
function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length == 0) {
        return 0
    }
    return findRecur(0, rotateArray.length - 1,rotateArray)
}

function findRecur(index1,index2,rotateArray){
    if(index1 == index2){
        return rotateArray[index1]
    }
    var mid = parseInt((index1+index2)/2)
    if(rotateArray[mid] > rotateArray[index2]){
        return findRecur(mid + 1, index2, rotateArray)
    }else {
        return findRecur(index1, mid, rotateArray)
    }
}

//test
var arr = [6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335]
log(minNumberInRotateArray(arr))
