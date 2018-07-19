function quickSort(arr, left, right){
   var len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}



function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
        console.log('***', i, pivotValue, partitionIndex)
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

const list = [2, 5, 7, 8, 1, 6, 3]
console.log(quickSort(list, 0, 6)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

