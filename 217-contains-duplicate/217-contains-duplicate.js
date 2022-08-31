/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Set solution
    return new Set(nums).size != nums.length;
};