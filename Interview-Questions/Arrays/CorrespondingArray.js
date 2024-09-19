// [1,2,3]
// [1,4,9]

// true

function CorrespondingSquare(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let arr = arr1.map((value,index,array)=>{
            return value ** 2;
        })
        if (arr.sort().toString() === arr2.sort().toString()) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log(false);
    }
}

CorrespondingSquare([1,2,3],[1,5,9])