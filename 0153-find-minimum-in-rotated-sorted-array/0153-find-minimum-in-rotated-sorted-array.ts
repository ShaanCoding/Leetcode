function findMin(nums: number[]): number {
    // N is sorted in ascending order, is rotated between 1 and n times

    // Rotating an array return minimum number O(logn) -> binary search

    let minimum = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < minimum) minimum = nums[i];
    }

    return minimum;
};