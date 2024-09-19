/* 
    Sample Input 0

2
5 2 1
5 2 2
Sample Output 

2
3
Explanation 

In the first query, there are  prisoners and  sweets. Distribution starts at seat number . Prisoners in seats numbered  and  get sweets. Warn prisoner .

In the second query, distribution starts at seat  so prisoners in seats  and  get sweets. Warn prisoner .
*/

function saveThePrisoner(n, m, s) {
    let result = (s + m - 1) % n;
    return result === 0 ? n : result;
}

// Test the function
console.log(saveThePrisoner(5, 2, 1)); // Output: 2
console.log(saveThePrisoner(5, 2, 2)); // Output: 3
