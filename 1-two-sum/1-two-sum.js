/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Given array of integers and a target, return indices of two numbers that add up to target
    
    // Brute force every combination
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] + nums[j] == target) return [i, j];
        }
    }
};