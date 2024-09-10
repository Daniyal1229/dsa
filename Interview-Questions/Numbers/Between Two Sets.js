/* 
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/


function getTotalX(a, b) {
    const lcm = getLCM(a);
    const gcd = getGCD(b);
    let count = 0;
    
    for (let i = lcm; i <= gcd; i += lcm) {
        if (gcd % i === 0) {
            count++;
        }
    }
    
    return count;
}

function getLCM(arr) {
    return arr.reduce((lcm, num) => {
        return (lcm * num) / getGCD([lcm, num]);
    });
}

function getGCD(arr) {
    return arr.reduce((gcd, num) => {
        while (num !== 0) {
            let temp = num;
            num = gcd % num;
            gcd = temp;
        }
        return gcd;
    });
}

// Example usage
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3
