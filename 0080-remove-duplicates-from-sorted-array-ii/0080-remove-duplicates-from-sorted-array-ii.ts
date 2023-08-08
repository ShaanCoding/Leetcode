interface IData {
    value: number;
    count: number;
}

function removeDuplicates(nums: number[]): number {
    // From smallest to largest
    // Remove some duplicates so that unique elements appear at most twice
    // First part of the array, first k elements should hold the array
    // Do it in O(1) memory
    
    // At most twice
    // Fast-slow pointer, and another variable with currentCount and value name (tuple)
    
    if(!nums) return 0;
    
    let slowPtr: number = 0;
    let data: IData = {value: null, count: 0};
    
    for(let i = 0; i < nums.length; i++) {
        if(data.value == nums[i]) {
            if(data.count + 1 <= 2) {
                nums[slowPtr] = nums[i];
                slowPtr++;
            }
            
            data.count = data.count + 1;
        } else {
            nums[slowPtr] = nums[i];
            slowPtr++;
            data = {value: nums[i], count: 1}
        }
    }
    
    return slowPtr;
};