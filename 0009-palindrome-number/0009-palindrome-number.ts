function isPalindrome(x: number): boolean {
    // Return true if palindrome else return false
    let xArray = x.toString().split('');

    let left = 0;
    let right = xArray.length - 1;

    while(left < right) {
        if(xArray[left] !== xArray[right]) return false;

        left++;
        right--
    }

    return true;
};