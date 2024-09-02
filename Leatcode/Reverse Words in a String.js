/* 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

*/

var reverseWords = function(s) {
    // return s.trim().split(/\s+/).filter(word => word !== '').reverse().join(' ');
    console.log(s.trim().split(/\s+/).filter(word => word !== '').reverse().join(' '));
    444 
};


// Test cases
reverseWords("a good   example");
// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));




