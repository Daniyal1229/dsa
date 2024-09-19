//  [1,2,3,2,2,1,4,5,4,6,7]
// [1,2,3,4,5,6,7]

function removeDuplicatea(arr) {
    let newArr = [...new Set(arr)]
    console.log(newArr);
}

removeDuplicatea([1,2,3,2,2,1,4,5,4,6,7]);

