function containsDuplicate(nums: number[]): boolean {
    let arrayLength: number = nums.length;
    let setLength: number = new Set<number>(nums).size;
    
    return arrayLength !== setLength;
};