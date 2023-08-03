function twoSum(numbers: number[], target: number): number[] {
    // Increasxing order, find two numbers so that they add up to a specific target
    
    // Return the indices of the two numbers, added by 1 as an integer array
    // Exactly 1 solution don't use twice
    
    // for(let i = 0; i < numbers.length; i++) {
    //     for(let j = 0; j < numbers.length; j++) {
    //         if(i != j && numbers[i] + numbers[j] == target)
    //             return [i + 1, j + 1];
    //     }
    // }
    
    let left: number = 0;
    let right: number = numbers.length - 1;
    
    while(left <= right) {
        let sum: number = numbers[left] + numbers[right];
        if(sum === target) return [left + 1, right + 1];
        else if (sum <= target) left++;
        else right--;
    }
    
    
    
};