/*

input
4 1
3 10 2 9
12

output
5

input
4 1
3 10 2 9
7

output
Bon Appetit
*/

function bonAppetit(bill, k, b) {
    // Calculate the total sum of the bill
    const totalSum = bill.reduce((sum, item) => sum + item, 0);
    
    // Calculate Anna's share (excluding the item she didn't eat)
    const annaShare = (totalSum - bill[k]) / 2;
    
    // Check if Brian charged Anna correctly
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

// Test cases
bonAppetit([3, 10, 2, 9], 1, 12); // Output: 5
bonAppetit([3, 10, 2, 9], 1, 7);  // Output: Bon Appetit
