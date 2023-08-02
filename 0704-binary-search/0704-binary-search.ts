function search(nums: number[], target: number): number {
    let low: number = 0;
    let high: number = nums.length - 1;

    while(low <= high) {
        let mid: number = Math.floor((low + high) / 2);
        
        if(nums[mid] == target) return mid;

        // Left side
        if(nums[mid] > target) {
            high = mid - 1;
        }

        // Right side
        if(nums[mid] < target) {
            low = mid + 1;
        }
    }

    return -1;
};