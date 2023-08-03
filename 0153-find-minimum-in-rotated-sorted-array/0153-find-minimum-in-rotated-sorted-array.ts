function findMin(nums: number[]): number {
    // N is sorted in ascending order, is rotated between 1 and n times
    // Rotating an array return minimum number O(logn) -> binary search

//     Normal binary sort is
//     Need to find a number where left > right... since sorted right is lowest value
    
//     If length is 1
    if(nums.length === 1) return nums[0];
    
    
    let low: number = 0;
    let high: number = nums.length - 1;
    
    if(nums[high] > nums[low]) return nums[0];
    
    while(high >= low) {
        let midIndex = Math.floor(low + (high - low) / 2);
        
        if(nums[midIndex] > nums[midIndex + 1]) return nums[midIndex + 1];
        if(nums[midIndex - 1] > nums[midIndex]) return nums[midIndex];
        
        if(nums[midIndex] > nums[0]) {
            low = midIndex + 1;
        } else {
            high = midIndex - 1;
        }
        
    }
    
    return -1;
};