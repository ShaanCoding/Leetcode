function containsDuplicate(nums: number[]): boolean {
    let numsSet = new Set(nums);

    return numsSet.size !== nums.length;
};