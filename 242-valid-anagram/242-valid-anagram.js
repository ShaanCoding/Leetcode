/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Solution frequency counter
    let sSplit = s.split("");
    let tSplit = t.split("");
    
    if(sSplit.length !== tSplit.length) return false;
    
    let sMap = new Map();
    let tMap = new Map();
    
    for(let i = 0; i < s.length; i++) {
        if(sMap.has(sSplit[i])) {
            sMap.set(sSplit[i], sMap.get(sSplit[i]) + 1);
        } else {
            sMap.set(sSplit[i], 1);
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(tMap.has(tSplit[i])) {
            tMap.set(tSplit[i], tMap.get(tSplit[i]) + 1);
        } else {
            tMap.set(tSplit[i], 1);
        }
    }
    
    for(let i = 0; i < sSplit.length; i++) {
        if(sMap.get(sSplit[i]) != tMap.get(sSplit[i])) return false;
    }
    
    return true;
};