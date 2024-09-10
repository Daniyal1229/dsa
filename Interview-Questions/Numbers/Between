/* 
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/

function getTotalX(a, b) {
    const start = Math.max(...a);
    const end = Math.min(...b);
    let count = 0;

    for (let num = start; num <= end; num++) {
        if (a.every(factor => num % factor === 0) && b.every(multiple => multiple % num === 0)) {
            count++;
        }
    }

    return count;
}

// Example usage
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3
