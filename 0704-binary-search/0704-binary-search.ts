function search(nums: number[], target: number): number {
    // Return index of item otherwise -1
    
    let low: number = 0;
    let high: number = nums.length - 1;
    
    while(high >= low) {
        let mid: number = low + Math.floor((high - low) / 2);
        
        if(nums[mid] == target) return mid;
        if(mid + 1 < nums.length && nums[mid + 1] == target) return mid + 1;
        
        if(nums[mid] > target) {
           high = mid - 1; 
        } else {
            low = mid + 1;
        }
    }
    
    return -1;
};