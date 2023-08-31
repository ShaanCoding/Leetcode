function arraySign(nums: number[]): number {
    let number = 1;
    
    for(let num of nums) {
        if(num > 0) {
            number *= 1;
        } else if (num < 0) {
            number *= -1;
        } else {
            return 0;
        }
    }
    
    return number;
};