//incorrect
function MoreThanHalfNum_Solution(numbers)
{
    var middle = Math.floor(numbers.length)
    var start = 0
    var end = numbers.length - 1
    var pivot = numbers.length - 1
    var index = Partition(numbers, pivot, start, end)
    while (index != middle) {
        if (index > middle) {
            end = index - 1
            index = Partition(numbers, pivot, start, end)
        }
        else {
            start = index + 1
            index = Partition(numbers, pivot, start, end)
        }
    }
    var result = numbers[middle]
}

function Partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))
