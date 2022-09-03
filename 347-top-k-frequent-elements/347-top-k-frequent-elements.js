/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // So we have an array, return k most frequent items i.e top 2
    
    let hashMap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        } else {
            hashMap.set(nums[i], 1);
        }
    }
    
    //     Now must get top k items
    let topKItems = new Set();
    
    let hashMapValues = Array.from(hashMap.values()).sort((a, b) => b - a);
    // Top k keys
    
    for(let [key, value] of hashMap) {
        for(let j = 0; j < k; j++) {
            if(value == hashMapValues[j]) topKItems.add(key);
        }
    }
    
    return Array.from(topKItems);
};