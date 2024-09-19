/* 
    Sample Input 0

3
3 -7 0
Sample Output 0

3

Remember that the order of values in the subtraction does not influence the result. The smallest of these absolute differences is 3
*/

function minimumAbsoluteDifference(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    let minDiff = Infinity;
    
    // Compare adjacent elements
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i-1]);
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
}

// Test the function
const arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr)); // Output: 3
