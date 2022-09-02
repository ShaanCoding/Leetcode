/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
    // Left + Right
    
    // If next to each other we can say they're correct
    // Or if they're like inside of each other but correct depth
        
    // Looking at deepest value
    
    // ()[] or ({)} or ({}) or ({})() => ( ), { }, [ ]
        // {} deleted, (), ()
        
    let length = s.length;
    
    for(let i = 0; i < length; i++) {
        s = s.replace("{}", "");
        s = s.replace("[]", "");
        s = s.replace("()", "");
    }
    
    return s.length == 0;
    
    // "[]" == 2
    // "[({(())}[()])]"
        
    // So we enter the deepest depth of the string
        // If valid i.e left bracket matches right, delete
        // Repeat for the entire thing, if empty then valid string else false
    
    return true;
    
};