function wordPattern(pattern: string, s: string): boolean {
    // hashmap -> key value pair from s and pattern, identify which word maps to what,, replace and compare

    // abba -> dog cat cat fish -> determine it does not match
    // Hashmap would allow us to check the number of a matching b
    // Could have hashmap array, key pattern, s string and add the strings into set, deterime if the length is equal or not, if it is good, if not false

    // Order does matter
    // Can break the pattern
    // Hashmap with values / strings, if all one then check the hash count?

    let patternHashMap: Map<string, string> = new Map();

    let sSplit: string[] = s.split(' ');

    if(sSplit.length != pattern.length) return false;

    // Checks rules are followed
    for(let i = 0; i < pattern.length; i++) {
        if(patternHashMap.has(pattern[i])) {
            if(patternHashMap.get(pattern[i]) != sSplit[i]) return false;
        } else {
            patternHashMap.set(pattern[i], sSplit[i]);
        }
    }

    // Check frequency to make sure it's correct
    let patternFrequency: Map<string, number> = new Map<string, number>();
    let sSplitFrequency: Map<string, number> = new Map<string, number>();

    for(let char of pattern) {
        patternFrequency.set(char, (patternFrequency.get(char) || 0) + 1);
    }

    for(let string of sSplit) {
        sSplitFrequency.set(string, (sSplitFrequency.get(string) || 0) + 1);
    }

    for(let [key, value] of patternHashMap) {
        if(patternFrequency.get(key) != sSplitFrequency.get(value)) return false;
    }

    return true;

};