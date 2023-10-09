function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    
    let sFreqMap: Map<string, number> = new Map();
    let tFreqMap: Map<string, number> = new Map();
    
    for(let character of s) {
        sFreqMap.set(character, sFreqMap.has(character) ? sFreqMap.get(character) + 1 : 1);
    }
    
    for(let character of t) {
        tFreqMap.set(character, tFreqMap.has(character) ? tFreqMap.get(character) + 1 : 1);
    }
    
    for(let [key, value] of sFreqMap) {
        if(tFreqMap.get(key) !== value) return false;
    }
    
    return true;
};