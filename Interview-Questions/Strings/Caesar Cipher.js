/* 
    Sample Input
11
middle-Outz
2

Sample Output

okffng-Qwvb

Explanation

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
*/


function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const n = alphabet.length;
    k = k % n; // Handle cases where k > 26

    return s.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const index = alphabet.indexOf(char.toLowerCase());
            const newIndex = (index + k) % n;
            const newChar = alphabet[newIndex];
            return isUpperCase ? newChar.toUpperCase() : newChar;
        }
        return char;
    }).join('');
}

// Test the function
const s = "middle-Outz";
const k = 2;
console.log(caesarCipher(s, k)); // Output: okffng-Qwvb
