/* 
3
11 2 4
4 5 6
10 8 -12


15

Explanation
The primary diagonal is:

11
    5
        -12
        
        
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

        4
    5
10
*/

function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

// Read input
const n = parseInt(readline(), 10);
const matrix = [];

for (let i = 0; i < n; i++) {
    matrix.push(readline().split(' ').map(Number));
}

// Calculate and print the result
const result = diagonalDifference(matrix);
console.log(result);


