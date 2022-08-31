/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Set solution
    let set = new Set(nums);
    
    return set.size != nums.length;
};