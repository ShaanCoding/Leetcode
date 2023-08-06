function uniqueOccurrences(arr: number[]): boolean {
    // Return true if the number of occurance is unique i.e. frequencies are all unique
    
    // Add to hashmap, and then check if values are the same length in set
    let aMap: Map<number, number> = new Map<number, number>();
    
    for(let item of arr) {
        aMap.set(item, (aMap.get(item) || 0) + 1);
    }
    
    let frequencySet: Set<number> = new Set<number>(aMap.values());
    
    return frequencySet.size == aMap.size;
};