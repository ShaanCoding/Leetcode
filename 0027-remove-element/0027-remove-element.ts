function removeElement(nums: number[], val: number): number {
//     Return length of array without nums of val and the updated array to be
    // all values shifted without it
    
    // Count the number of duplicates & return
    let j: number = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        } 
    }
    
    return j;
};