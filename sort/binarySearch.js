function binarySearch(nums, target) {
    var low = 0, high = nums.length - 1
    while (low <= high) {
        var mid = Math.floor((low + high)/2)
        if(nums[mid] < target) { low = mid + 1 }
        if(nums[mid] > target) { high = mid - 1 }
        if(nums[mid] == target) { return mid }
    }
    return -1
}
