/* 
    The Hurdle Race
    
    Sample Input 0

5 4
1 6 3 5 2
Sample Output 0

2
Explanation 0

Dan's character can jump a maximum of  k = 4 units, but the tallest hurdle has a height of h = 6
*/


function hurdleRace(k, height) {
    const maxHurdle = Math.max(...height);
    return Math.max(0, maxHurdle - k);
}

// Test the function
const k = 4;
const height = [1, 6, 3, 5, 2];
console.log(hurdleRace(k, height)); // Output: 2
