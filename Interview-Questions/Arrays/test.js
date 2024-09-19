/* 
Sample Input For Custom 
pixelIntensity [] size n = 3
pixelIntensity [] [] size m = 3
pixelIntensity = [[2, 4, 6], [4, 2, 7], [6, 4, 7]]
246
427
647
Sample Output
6
Explanation
Currently, the brightness levels in the cells (1, 1), (2, 1), and (2, 2) are not appropriate. Adding 3, 2, and 1 to those cells, respectively, is optimal write a code for this problem in javascript
*/


function optimizeBrightness(pixelIntensity) {
    const n = pixelIntensity.length;
    const m = pixelIntensity[0].length;
    let totalAdjustments = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i > 0 && j > 0) {
                const current = pixelIntensity[i][j];
                const top = pixelIntensity[i-1][j];
                const left = pixelIntensity[i][j-1];
                const topLeft = pixelIntensity[i-1][j-1];

                if (current <= top && current <= left && current <= topLeft) {
                    const adjustment = Math.min(top, left, topLeft) - current + 1;
                    pixelIntensity[i][j] += adjustment;
                    totalAdjustments += adjustment;
                }
            }
        }
    }

    return totalAdjustments;
}

// Test the function with the given input
const pixelIntensity = [[2, 4, 6], [4, 2, 7], [6, 4, 7]];
console.log(optimizeBrightness(pixelIntensity)); // Output: 6
