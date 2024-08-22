let arr = [1,2,3,4,5];

let search = 3;
let flag = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}

if (flag) {
    console.log("yes");
}
else{
    console.log("no");
}