/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "[" || s[i] == "{" || s[i] == "(") {
            stack.push(s[i]);
        } else {
            let element = stack[stack.length - 1];
            if(element == "[" && s[i] == "]") {
                stack.pop();                
            } else if (element == "{" && s[i] == "}") {
                stack.pop();
            } else if (element == "(" && s[i] == ")") {
                stack.pop();                
            } else {
                return false;
            }
        }
    }
    
    return stack.length == 0;
};