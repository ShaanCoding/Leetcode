function mergeAlternately(word1: string, word2: string): string {
    let w1Index: number = 0;
    let w2Index: number = 0;
    
    let sum: string = "";
    let isW1: boolean = true;
    
    while(w1Index < word1.length && w2Index < word2.length) {
        if(isW1) {
            sum += word1[w1Index];
            w1Index++;
        } else {
            sum += word2[w2Index];
            w2Index++;
        }
        
        isW1 = !isW1;
    }
    
    // Do the remainder
    while(w1Index < word1.length) {
        sum += word1[w1Index];
        w1Index++;
    }
    
    while(w2Index < word2.length) {
        sum += word2[w2Index];
        w2Index++;
    }
    
    return sum;
};