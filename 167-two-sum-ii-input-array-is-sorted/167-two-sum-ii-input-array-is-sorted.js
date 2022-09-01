/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // This time there is two numbers but cannot use the same number, 2-7 target = 9
    // Hashmap one or two pointers
    
    // We cab iterate through array and look for compliment, if compliment exists add to map
    
    let hashMap = new Map();
    
    for(let i = 0; i < numbers.length; i++) {
        let compliment = target - numbers[i];
        if(hashMap.has(compliment)) {
            return [hashMap.get(compliment) + 1, i + 1];
        } else {
            hashMap.set(numbers[i], i);
        }
    }
    
    
};