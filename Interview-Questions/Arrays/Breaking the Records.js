// n = 9
// arr = [10,5,20,20,4,5,2,25,1]
//  when i > i+1 highest score   [20, 25]  output = 2
//  when i < i+1 lowest score score  [5,4,2,1] output = 4
//  final output = 2,4

function score(n, arr) {
    let highestScore = arr[0];
    let lowestScore = arr[0];
    let highestScoreCount = 0;
    let lowestScoreCount = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestScore) {
            highestScore = arr[i];
            highestScoreCount++;
        } else if (arr[i] < lowestScore) {
            lowestScore = arr[i];
            lowestScoreCount++;
        }
    }

    return [highestScoreCount , lowestScoreCount].toString().replace(',',' ');
}

// Test the function
let n = 9;
let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(score(n, arr));


