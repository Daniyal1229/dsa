/* 
    sample input
    8
    UDDDUDUU
    
    output
    1
    
    An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
*/

function countingValleys(steps, path) {
    let seaLevel = 0;
    let valleys = 0;
    
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            seaLevel++;
            if (seaLevel === 0) {
                valleys++;
            }
        } else if (path[i] === 'D') {
            seaLevel--;
        }
    }
    
    return valleys;
}

// Test the function
const steps = 8;
const path = 'UDDDUDUU';
console.log(countingValleys(steps, path)); // Output: 1
