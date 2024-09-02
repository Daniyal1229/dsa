/*

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

*/


var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    flowerbed = [0, ...flowerbed, 0];
    
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            count++;
        }
    }
    
    return count >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1],1));