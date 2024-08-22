
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length-1-i; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(" max ele: "+arr[arr.length-1]);
console.log(" min ele: "+arr[0]);


console.log("**************************************");

//  program to find maximum and minimum element in an array

let arr = [1,2,13,9,18,27];
function findMax() {
    return Math.max(...arr);
}

function findMin() {
    return Math.min(...arr);
}
console.log(findMax());
console.log(findMin());