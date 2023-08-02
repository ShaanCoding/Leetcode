// Return T / F depending on if it's valid
// ()[]{} or ({[]}) or ([]{})

// Add opening ones to stack, if the closing one appears, remove from stack / pop and repeat
function isValid(s: string): boolean {
  let sSplit = s.split("");
  if (sSplit.length % 2 == 1) return false;

  let stack = [];

  for (let i = 0; i < sSplit.length; i++) {
    if(["[", "{", "("].includes(s[i])) {
        stack.push(s[i]);
    }
    else {
        if(stack[stack.length - 1] === "[" && s[i] === "]") stack.pop();
        else if(stack[stack.length - 1] === "{" && s[i] === "}") stack.pop();
        else if(stack[stack.length - 1] === "(" && s[i] === ")") stack.pop();
        else return false;
    }
  }

  return stack.length === 0;
}
