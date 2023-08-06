function numIdenticalPairs(nums: number[]): number {
    // We can do it in O(2n) one pass getting key value and then one pass to see if its fine
    
    // Key: value, nums: List of indexes
    let numsMap: Map<number, number> = new Map<number, number>();
    let numberOfGoodSets: number = 0;

    for(let i = 0; i < nums.length; i++) {
        numberOfGoodSets += numsMap.get(nums[i]) || 0;
        numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
    }
    
    return numberOfGoodSets;
};