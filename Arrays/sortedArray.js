// let arr = [1,2,9,13,18,27];
let arr = [9,1,13,2,18,27];
let flag = true;
for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
        flag = false;
        break;
    }
    else{
        flag = true;
    }
}

if (flag) {
    console.log("sorted");
} else {
    console.log("not sorted");
}





