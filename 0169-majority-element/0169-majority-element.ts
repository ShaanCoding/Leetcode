function majorityElement(nums: number[]): number {
    // Assume it always exists, show the majority element that shows more than n / 2 times
    
    // Solving in O(n) space with a hashmap
    let map: Map<number, number> = new Map<number, number>();
    
    let biggestString: number | null = null;
    
    for(let char of nums) {
        map.set(char, (map.get(char) || 0) + 1);
        if(map.has(biggestString)) {
            if(map.get(char) > map.get(biggestString)) biggestString = char;
        } else {
            biggestString = char;
        }
    }
    
    return biggestString;
};