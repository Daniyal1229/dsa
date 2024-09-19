/* 
    Electronics Shop
    Sample Input 0

10 2 3
3 1
5 2 8
Sample Output 

9
Explanation 
int: the maximum that can be spent, or -1 if it is not possible to buy both items
Buy the  keyboard and the  USB drive for a total cost of 8 + 1 
*/

function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
    
    for (let keyboard of keyboards) {
        for (let drive of drives) {
            let total = keyboard + drive;
            if (total <= b && total > maxSpent) {
                maxSpent = total;
            }
        }
    }
    
    return maxSpent;
}

// Test the function
const b = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

console.log(getMoneySpent(keyboards, drives, b)); // Output: 9
