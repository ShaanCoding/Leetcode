function numJewelsInStones(jewels: string, stones: string): number {
    let jSet: Set<string> = new Set<string>(jewels.split(''));

    let numberOfStones = 0;
    
    for(let s of stones) {
        if(jSet.has(s)) numberOfStones++;
    }
    
    return numberOfStones;
};