function numIdenticalPairs(nums: number[]): number {
    // Key: value, nums: List of indexes
    let numsMap: Map<number, number> = new Map<number, number>();
    let numberOfGoodSets: number = 0;

    for(let i = 0; i < nums.length; i++) {
        numberOfGoodSets += numsMap.get(nums[i]) || 0;
        numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
    }
    
    return numberOfGoodSets;
};