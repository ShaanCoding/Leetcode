function isSubsequence(s: string, t: string): boolean {
    // Sliding window sortof, we need to see first element of s exists then next then next, increase t and return false if not found before exist or end of array

    let sIndex: number = 0;

    for(let i = 0; i < t.length; i++) {
        
        if(s[sIndex] == t[i] && s.length > sIndex) {
            sIndex++;
        }
    }

    return sIndex == s.length;
};