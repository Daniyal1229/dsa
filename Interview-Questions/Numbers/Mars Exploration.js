/* 
Sample Input 
SOSSPSSQSSOR
Sample Output 

3

explaination 
Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR
Difference:          X  X   X
*/

function marsExploration(s) {
    let count = 0;
    const expectedSignal = 'SOS';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== expectedSignal[i % 3]) {
            count++;
        }
    }
    
    return count;
}

// Test the function
const receivedSignal = 'SOSSPSSQSSOR';
console.log(marsExploration(receivedSignal)); // Output: 3
