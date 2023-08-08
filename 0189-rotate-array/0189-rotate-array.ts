/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // +3 || if <= nums.length then we - nums.length to it
    
    let rotatedArray: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        let index = i + k;
        index = index % nums.length; 
        rotatedArray[index] = nums[i];
    }

    for(let i = 0; i < nums.length; i++) {
        nums[i] = rotatedArray[i];
    }

};