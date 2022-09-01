/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // This time there is two numbers but cannot use the same number, 2-7 target = 9
    // Two pointers
    
    let left = 0, right = numbers.length - 1;
    
    while(left < right) {
        // If target is greater
        if(numbers[left] + numbers[right] < target) left++;
        if(numbers[left] + numbers[right] > target) right--;
        
        if(numbers[left] + numbers[right] == target) return [left + 1, right + 1];
    }
};