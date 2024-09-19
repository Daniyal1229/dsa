//  [0,3,4,31]
//  [4,6,30]
//  [0,3,4,6,30,31]

function MergeSortedArray(arr1, arr2) {
    let sortedArray = [...arr1,...arr2].sort((a,b)=> a - b);
    console.log(sortedArray);
}

MergeSortedArray([0,3,4,31],[4,6,30])