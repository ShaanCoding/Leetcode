/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Integer array nums, return an array answer such that answer[i] is equal to product of all numbers instead of nums[i];
    
    // I.e [1,2,3,4] =? [24, 12, 8,6]
    
    /* 
        Time limit exceeded for brute force
        let newArray = [];

        for(let i = 0; i < nums.length; i++) {
            newArray[i] = 1;
            for(let j = 0; j < nums.length; j++) {
                if(i !== j) newArray[i] = newArray[i] * nums[j];
            }
        }

        return newArray;
    */
    
    // Multiple all items in one iteration O(n) and then divide by index O(n); giving total complexity O(2n)
    
    let returnArray = [];
    
    let sum = 1;
    let doesContainZero = false;
    let moreThanOneZero = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            sum = sum * nums[i];            
        } else {
            console.log("Zero");
            if(doesContainZero) moreThanOneZero = true;
            doesContainZero = true;
        }
        
        if(moreThanOneZero) sum = 0;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(moreThanOneZero) {
            returnArray[i] = 0;
        } else if(doesContainZero) {
            returnArray[i] = nums[i] == 0 ? sum : 0;                
        } else {
            returnArray[i] = sum / nums[i];
        }
    }
    
    return returnArray;
};