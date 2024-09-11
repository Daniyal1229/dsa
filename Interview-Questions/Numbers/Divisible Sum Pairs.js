/* 
    Divisible Sum Pairs
    input
    6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

output 5 

Here are the  valid pairs when k = 3
*/

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    
    return count;
}

// Read input
const [n, k] = readline().split(' ').map(Number);
const ar = readline().split(' ').map(Number);

// Calculate and print the result
const result = divisibleSumPairs(n, k, ar);
console.log(result);
