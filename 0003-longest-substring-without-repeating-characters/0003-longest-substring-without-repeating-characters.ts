function lengthOfLongestSubstring(s: string): number {
    // a b c a b c b b
    // a b c a x z b b
    // we are missing b c a x z b 
    // We skip over the middle one, due to the consectuve ones
    // We need to cutoff from the first repeating string instead of the last string

    // a a a b c d 
    let leftMostPointerIndex: number = 0;
    let maximumLength = 0;

    for(let i = 0; i < s.length; i++) {
        let subString: string = s.substring(leftMostPointerIndex, i + 1);
        let subStringSet: Set<string> = new Set(subString.split(''));

        if(subString.length != subStringSet.size) {
            // Move left most pointer to index of first duplicate + 1
            leftMostPointerIndex = leftMostPointerIndex + subString.indexOf(s[i]) + 1;
        } else {
            // Compare and if length is larger, reassign
            maximumLength = Math.max(maximumLength, subString.length);
        }
    }

    return maximumLength;
};