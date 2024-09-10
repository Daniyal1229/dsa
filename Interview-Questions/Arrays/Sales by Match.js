n = 9
arr = [10,20,20,10,10,30,50,10,20]

//  create pairs for example 
/*
    10 - 10
    20 - 20
    10 - 10
    30
    50
    20
*/

//  we have left with 3 individuals so output is 3

function sockMerchant(n, arr) {
    // colorCount to store the count of each sock color.
    let colorCount = new Map();
    let pairs = 0;

    for (let color of arr) {
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        // Map(4) { 10 => 4, 20 => 3, 30 => 1, 50 => 1 }
    }
    // Calculate pairs
    for (let count of colorCount.values()) {
        // [Map Iterator] { 4, 3, 1, 1 }
        pairs += Math.floor(count / 2);
    }
 
    return pairs;
}

// Test the function
n = 9;
arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, arr)); // Output: 3
