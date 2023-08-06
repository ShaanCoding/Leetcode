function numJewelsInStones(jewels: string, stones: string): number {
//     Jewels and stones representing stones, a stone is a type of stone you have
    // a is considered a different type
    // want to know how many stones you have are also jewels
    // Hashmap of both and then compare // union?
    
    let jMap: Map<string, number> = new Map<string, number>();
    let sMap: Map<string, number> = new Map<string, number>();
    
    for(let s of jewels) {
        jMap.set(s, (jMap.get(s) || 0) + 1);
    }
    
    for(let s of stones) {
        sMap.set(s, (sMap.get(s) || 0) + 1);
    }
    
    let numberOfStones = 0;
    
    for(let [key, value] of sMap) {
        if(jMap.has(key)) numberOfStones += value;
    }
    
    return numberOfStones;
};