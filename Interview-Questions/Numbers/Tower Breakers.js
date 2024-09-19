/* 
    STDIN   Function
-----   --------
2       t = 2
2 2     n = 2, m = 2
1 4     n = 1, m = 4

Sample Output

2
1
We'll refer to player  as  and player  as 

In the first test case,  chooses one of the two towers and reduces it to . Then  reduces the remaining tower to a height of . As both towers now have height ,  cannot make a move so  is the winner.

In the second test case, there is only one tower of height .  can reduce it to a height of either  or .  chooses  as both players always choose optimally. Because  has no possible move,  wins.
*/

function towerBreakers(n, m) {
    if (m === 1) {
        return 2;
    }
    return n % 2 === 0 ? 2 : 1;
}

// Test the function
console.log(towerBreakers(2, 2)); // Output: 2
console.log(towerBreakers(1, 4)); // Output: 1

// Additional test cases
console.log(towerBreakers(1, 7)); // Output: 1
console.log(towerBreakers(3, 7)); // Output: 1
console.log(towerBreakers(4, 7)); // Output: 2
