function reverseVowels(s: string): string {
    let vSet: Set<string> = new Set<string>(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    
    let trackedVowels: string[] = [];
    for(let char of s) {
        if(vSet.has(char)) trackedVowels.push(char);
    }
    
    trackedVowels = trackedVowels.reverse();
    
    let returnResponse: string = "";
    let vowelIndex: number = 0;
    for(let i = 0; i < s.length; i++) {
        if(vSet.has(s[i])) {
            returnResponse += trackedVowels[vowelIndex];
            vowelIndex++;
        } else {
            returnResponse += s[i];
        }
    }
    
    return returnResponse;
};