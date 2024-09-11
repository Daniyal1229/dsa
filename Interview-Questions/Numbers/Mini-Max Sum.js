/* 
    input
    1 2 3 4 5
    
    output
    10 14
    
    The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:
*/

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);
    console.log(minSum + ' ' + maxSum);
}

// Read input
const arr = readline().split(' ').map(Number);

// Calculate and print the result
miniMaxSum(arr);
