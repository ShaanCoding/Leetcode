/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
//     Running sum is past values + current
    let newArray = [nums[0]];
    
    for(let i = 1; i < nums.length; i++) {
        newArray[i] = newArray[i - 1] + nums[i];
    }
    
    return newArray;
};