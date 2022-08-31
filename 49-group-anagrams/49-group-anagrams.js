/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Given an array of strings, group the anagrams together
    
    //     Make a queue, add to queue if equal, sort strings compare
    let returnOutput = {};
    
    for(let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split("").sort();
        if(returnOutput[sortedString] == undefined) {
            console.log("Test 1");
            returnOutput[sortedString] = [strs[i]];
        } else {
            console.log("Test 2")
            returnOutput[sortedString].push(strs[i]);
        }
    }
    
    
    return Object.values(returnOutput);
};