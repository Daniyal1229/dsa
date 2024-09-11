/* 
frequency
6
input
1 4 4 4 5 3
output
4
*/


function migratoryBirds(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let lowestMostFrequentType = Infinity;

    for (const birdType of arr) {
        frequencyMap[birdType] = (frequencyMap[birdType] || 0) + 1;
        if (frequencyMap[birdType] > maxFrequency) {
            maxFrequency = frequencyMap[birdType];
            lowestMostFrequentType = birdType;
        } else if (frequencyMap[birdType] === maxFrequency && birdType < lowestMostFrequentType) {
            lowestMostFrequentType = birdType;
        }
    }

    return lowestMostFrequentType;
}
