function isAnagram(s: string, t: string): boolean {
    // s = 'anagram', t = 'nagaram'
    // return true if anagram, return false if not

    // Map method -> We have key values go through both arrays and compare if maps are same length, 3N

    if(s.length !== t.length) return false;

    let sMap = new Map();

    let tMap = new Map();

    let sSplit = s.split('');
    let tSplit = t.split('');

    for(let i = 0; i < sSplit.length; i++) {
        if(sMap.has(sSplit[i])) {
            sMap.set(sSplit[i], sMap.get(sSplit[i]) + 1);
        } else {
            sMap.set(sSplit[i], 1);
        }
    }

    for(let i = 0 ; i < tSplit.length; i++) {
        if(tMap.has(tSplit[i])) {
            tMap.set(tSplit[i], tMap.get(tSplit[i]) + 1);
        } else {
            tMap.set(tSplit[i], 1);
        }
    }

    if(sMap.size !== tMap.size) return false;

    for (let [key, value] of sMap.entries()) {
        if(value !== tMap.get(key)) return false;
    }

    return true;
};