function isPalindrome(s: string): boolean {
    // same as backwards as forwards then is palindrome
    // we could go through it, create a string with it properly, splice it into two, reverse the second and then compare values directly
    
    // Lets do it optimally -> Left and right pointer, go through whilst true, once pointer meet we can stop and retur T / F

    let stringSplit = s.toLowerCase().split('');

    let left = 0;
    let right = stringSplit.length - 1;

    while(left < right) {
        while(!isAlphaNumeric(stringSplit[left]) && right > left) left++;
        while(!isAlphaNumeric(stringSplit[right]) && right > left) right--;

        if(stringSplit[left] !== stringSplit[right]) return false;

        left++;
        right--;
    }

    return true;
};

// 97 - 122

const isAlphaNumeric = (c: string) => {
  let isNonAlphaNumeric = c < 'a' || c > 'z';
    let isNonNumeric = c < '0' || c > '9';
    
    return !(isNonAlphaNumeric && isNonNumeric);
}