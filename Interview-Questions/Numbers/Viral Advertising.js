/* 
    Sample Input

3
Sample Output

9

2  people liked the advertisement on the first day, 3 people liked the advertisement on the second day and 4 people liked the advertisement on the third day, so the answer is .2+3+4 = 0
*/

function viralAdvertising(n) {
    let liked = 2;
    let cumulative = 2;
    
    for (let day = 2; day <= n; day++) {
        liked = Math.floor(liked * 3 / 2);
        cumulative += liked;
    }
    
    return cumulative;
}

// Test the function
const n = 3;
console.log(viralAdvertising(n)); // Output: 9
