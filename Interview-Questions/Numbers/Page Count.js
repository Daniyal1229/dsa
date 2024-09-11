/* 
Function Description

Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

int n: the number of pages in the book
int p: the page number to turn to

input
6
2

output
1

Explanation 0

If the student starts turning from page , they only need to turn  page:
*/

function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    
    return Math.min(fromFront, fromBack);
}

// Read input
const n = parseInt(readline(), 10);
const p = parseInt(readline(), 10);

// Calculate and print the result
const result = pageCount(n, p);
console.log(result);
