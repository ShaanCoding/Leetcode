function numJewelsInStones(jewels: string, stones: string): number {
//     Jewels and stones representing stones, a stone is a type of stone you have
    // a is considered a different type
    // want to know how many stones you have are also jewels
    // Hashmap of both and then compare // union?
    
    
    let jSet: Set<string> = new Set<string>(jewels.split(''));

    let numberOfStones = 0;
    
    for(let s of stones) {
        if(jSet.has(s)) numberOfStones++;
    }
    
    return numberOfStones;
};