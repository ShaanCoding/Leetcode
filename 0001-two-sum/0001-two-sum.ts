function twoSum(nums: number[], target: number): number[] {
    // Given array of integers and a target integer, return the indices such that the two numbers add up to value

    let indicesMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        // [2,7] 9 - 7 = 2
        let compilment = target - nums[i];

        if(indicesMap.has(compilment)) {
            return [i, indicesMap.get(compilment)]
        } else {
            indicesMap.set(nums[i], i);
        }
    }
};