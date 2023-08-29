function searchInsert(nums: number[], target: number): number {
    // Sorted array and target value, return the index if the target is found
    // Return the index if it was added in order
    
    // o(logn) => Binary search
    
    let left: number = 0;
    let right: number = nums.length - 1;
    
    while(left <= right) {
        let midPoint: number = Math.floor((right + left) / 2);
        
        if(nums[midPoint] === target) return midPoint;
        
        if(nums[midPoint] > target) {
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    }
    
    return left;
};