/* 
    Perform the following sequence of operations to get the final string:
aaabccddd → abccddd → abddd → abd
*/

function superReducedString(s) {
    let stack = [];
    
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0 ? "Empty String" : stack.join('');
}

// Test the function
console.log(superReducedString("aaabccddd")); // Output: "abd"
console.log(superReducedString("aa")); // Output: "Empty String"
console.log(superReducedString("baab")); // Output: "Empty String"
