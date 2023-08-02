function canConstruct(ransomNote: string, magazine: string): boolean {
    // Given two strings ransomNote and magizine, return true if ransomeNote can be constructed using it otherwise false. Note: ransomNote can only use one character occurance once

    // Two hashMaps see if one larger than the other else false O(2n + m);

    // Better way is removing if we find one, reducing it and then if it equals to zero and we need to subtract return false

    // let ransomNoteHashMap: Map<string, number> = new Map<string, number>();
    let magizineHashMap: Map<string, number> = new Map<string, number>();



    for(let character of magazine) {
        magizineHashMap.set(character, (magizineHashMap.get(character) || 0) + 1);
    }

    for(let character of ransomNote) {
        if(magizineHashMap.has(character)) {
            if(magizineHashMap.get(character) == 0) return false;
            else magizineHashMap.set(character, magizineHashMap.get(character) - 1);
        } else return false;
    }

   

    return true;
};