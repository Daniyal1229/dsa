/*
input 
5
1000000001 1000000002 1000000003 1000000004 1000000005
output 

5000000015
*/

function aVeryBigSum(ar) {
    return ar.reduce((sum, current) => sum + current, 0);
}

// Read input
const n = parseInt(readline(), 10);
const ar = readline().split(' ').map(Number);

// Calculate and print the sum
const result = aVeryBigSum(ar);
console.log(result);
