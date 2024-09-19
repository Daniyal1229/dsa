/* 
    CamelCase
Sample Input
saveChangesInTheEditor
Sample Output
5

Explanation

String  contains five words:
save
Changes
In
The
Editor
*/

function camelcase(s) {
    let wordCount = 1; // Start with 1 for the first word

    for (let char of s) {
        if (char === char.toUpperCase()) {
            wordCount++;
        }
    }

    return wordCount;
}

// Test the function
const input = "saveChangesInTheEditor";
console.log(camelcase(input)); // Output: 5
