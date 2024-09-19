//  consective 1's in an array
// [1,0,0,1,1,0,0,1,1,1]


const arr = [0, 1, 1, 0, 0, 1, 1, 1];

const maxConsecutiveOnes = arr.join('')
            .split('0')
            .reduce((max, ones) => Math.max(max, ones.length), 0);

console.log("Max consecutive ones:", maxConsecutiveOnes);


