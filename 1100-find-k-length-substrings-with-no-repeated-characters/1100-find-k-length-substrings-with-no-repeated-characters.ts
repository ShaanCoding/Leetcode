function numKLenSubstrNoRepeats(s: string, k: number): number {
    // Given a string and integer k, return the number of substrings of length k with no repeating characters
    // Sliding window
    // Calculate the frequency in each iteration and redo map and when found jump
    // to the dupe, otherwise pointer++
    // Actually can do an array comparison with map O(n)
    
    let leftPointer: number = 0;
    
    let returnArray: string[] = [];
    
    for(let i = k; i <= s.length; i++) {
        let temp = s.substr(leftPointer, k);

        if(temp.length === new Set(temp).size) {
            returnArray.push(temp);
        }
        
        leftPointer++;
    }
    
    return returnArray.length;
};