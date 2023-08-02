/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(number) {
    let map = new Map();
    let length = number.length;
    
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < number[i].length; j++) {
            if(map.has(number[i][j])) {
                map.set(number[i][j], map.get(number[i][j]) + 1);
            } else {
                map.set(number[i][j], 1);
            }
        }
    }
    
    let responseArray = [];
    
    for(let [key, value] of map) {
        if(value === length) responseArray.push(key);
    }
    
    return responseArray.sort((a, b) => a - b);
};