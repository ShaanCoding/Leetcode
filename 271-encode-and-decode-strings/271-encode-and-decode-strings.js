/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    // encode a list of strings
    return strs.join(String.fromCharCode(257));
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    // decode
    return s.split(String.fromCharCode(257));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */