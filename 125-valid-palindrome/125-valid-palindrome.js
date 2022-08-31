/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Palindrome has to be lowercase and remove all non-alphanumeric
    // Two pointers i & j going from both sides -> check if same, if not then delete
    
    if(!s.length) return true;
    
    let sLowerCase = s.toLowerCase();
    let i = 0, j = s.length - 1;
    
    while(i < j) {
        while(isNonAlphaNumeric(sLowerCase[i]) && (i < j)) {
            i++;
        }
        
        while(isNonAlphaNumeric(sLowerCase[j]) && (i < j)) {
            j--;
        }
        
        if(sLowerCase[i] !== sLowerCase[j]) return false;
        
        i++; j--;
    }
    
    
    return true;
};

let isNonAlphaNumeric = (c) => {
    let isNonAlphaNumeric = c < 'a' || c > 'z';
    let isNonNumeric = c < '0' || c > '9';
    
    return isNonAlphaNumeric && isNonNumeric;
}