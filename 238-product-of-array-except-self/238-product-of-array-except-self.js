/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Integer array nums, return an array answer such that answer[i] is equal to product of all numbers instead of nums[i];
    
    // I.e [1,2,3,4] =? [24, 12, 8,6]
    
    // Multiple all items in one iteration O(n) and then divide by index O(n); giving total complexity O(2n)
    
    let returnArray = [];
    
    let sum = 1;
    let doesContainZero = false;
    let moreThanOneZero = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            sum = sum * nums[i];            
        } else {
            if(doesContainZero) moreThanOneZero = true;
            doesContainZero = true;
        }
    }
    
    if(moreThanOneZero) return Array(nums.length).fill(0);
    
    for(let i = 0; i < nums.length; i++) {
        if(doesContainZero) {
            returnArray[i] = nums[i] == 0 ? sum : 0;                
        } else {
            returnArray[i] = sum / nums[i];
        }
    }
    
    return returnArray;
};