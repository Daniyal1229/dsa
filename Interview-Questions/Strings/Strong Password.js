/* 
    Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+

Sample Input 0

3
Ab1
Sample Output 0

3

Explanation 0

She can make the password strong by adding  characters, for example, $hk, turning the password into Ab1$hk which is strong.

 characters aren't enough since the length must be at least .
 
 Sample Input 1

11
#HackerRank
Sample Output 1

1
 Explanation 1

The password isn't strong, but she can make it strong by adding a single digit.
*/

function minimumNumber(n, password) {
    let missingTypes = 4;
    const patterns = [
        /[0-9]/,     // digits
        /[a-z]/,     // lowercase
        /[A-Z]/,     // uppercase
        /[!@#$%^&*()-+]/  // special characters
    ];

    patterns.forEach(pattern => {
        if (pattern.test(password)) {
            missingTypes--;
        }
    });

    return Math.max(6 - n, missingTypes);
}

// Test the function
console.log(minimumNumber(3, "Ab1")); // Output: 3
console.log(minimumNumber(11, "#HackerRank")); // Output: 1
console.log(minimumNumber(7, "AUzs-nV")); // Output: 1

