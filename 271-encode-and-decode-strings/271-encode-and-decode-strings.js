/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    // encode a list of strings
    return strs.join("\n");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    // decode
    return s.split("\n");
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */