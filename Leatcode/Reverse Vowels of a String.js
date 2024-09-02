/*

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"

*/

const reverseVowels = function(s) {
    const vowels = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, () => vowels.pop());
};


/*

The gi in the regular expression /[aeiou]/gi are flags that modify how the pattern matching behaves:

g: This is the global flag. It tells the regular expression to find all matches in the string, rather than stopping after the first match.

i: This is the case-insensitive flag. It makes the pattern matching ignore the difference between uppercase and lowercase letters.

*/


console.log(reverseVowels('hello'));


