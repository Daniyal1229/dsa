/*

input
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

output
0.500000
0.333333
0.166667
*/

function propotion(arr) {
    let size = arr.length;
    let p = 0;
    let n = 0;
    let z = 0;
    
    for (let i = 0; i < size; i++) {
        if (arr[i] > 0) {
            p++;
        } else if (arr[i] < 0) {
            n++;
        } else {
            z++;
        }
    }
    console.log((p/size).toFixed(6));
    console.log((n/size).toFixed(6));
    console.log((z/size).toFixed(6));
}

propotion([-4, 3, -9, 0, 4, 1]);