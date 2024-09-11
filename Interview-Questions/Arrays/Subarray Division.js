/*  
    Subarray Division
input
5
1 2 1 3 2
3 2
output
2
*/

function birthday(s, d, m) {
    let count = 0;
    
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            count++;
        }
    }
    
    return count;
}

// Read input
const n = parseInt(readline(), 10);
const s = readline().split(' ').map(Number);
const [d, m] = readline().split(' ').map(Number);

// Calculate and print the result
const result = birthday(s, d, m);
console.log(result);
