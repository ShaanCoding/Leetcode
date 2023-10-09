function topKFrequent(nums: number[], k: number): number[] {
//     Top k frequent elements
    // Do value, frequency
    let freqMap: Map<number, number> = new Map();
    
    for(const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Sort the array based on highest counts so get the values into an array and then sort
    let occuranceList: number[] = [];
    
    for(let [key, value] of freqMap) {
        occuranceList.push(value);
    }
    
    occuranceList = occuranceList.sort((a, b) => b - a).slice(0, k);
    
    let returnArray: number[] = [];
    for(let occurance of occuranceList) {
        for(let [key, value] of freqMap) {
            if(value == occurance) {
                returnArray.push(key);
                freqMap.set(key, -1);
            }
        }    
    }
    
    
    return returnArray;
};