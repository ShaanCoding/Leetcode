/*

*/

function romanToInt(s: string): number {
    // Take a large string, greedy algorithm to take any of these following these rules
    
    let map: Map<string, number> = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900]
    ]);
    
    // Then hashmap key value to them
    let sum = 0;
    
   for(let i = s.length - 1; i >= 0;) {
       // Get substring of 2 letters, else one
       let subString = "";
       if(i - 1 >= 0) {
           subString = s.substr(i - 1, 2);
       }
       
       if(subString && map.has(subString)) {
           sum += map.get(subString);
           i = i - 2;
       } else {
           sum += map.get(s[i]);
           i--;
       }
   }
    
    return sum;
};