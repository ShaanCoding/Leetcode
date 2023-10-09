function containsDuplicate(nums: number[]): boolean {
//     Return true if value appears at least twice, return false if distinct
    
    let arrayLength: number = nums.length;
    let setLength: number = new Set<number>(nums).size;
    
    return arrayLength !== setLength;
};