//  a = [5,6,7]
//  b = [3,6,10]

/* 
    5 > 3 a++
    6 = 6 
    7 > 10 b++
*/

let a = [17,28,30]

let b = [99,16,8]

function compare(a,b) {
    scoreA = 0;
    scoreB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        }
        else if (b[i] > a[i]){
            scoreB++;
        }
    }
    
    return [scoreA, scoreB];
}

console.log(compare(a,b));


