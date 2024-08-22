let arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
}

console.log(sum);

//  sum of all elements in an array

console.log("******************");

let sumArray = arr.reduce((sum,ele)=>{
    return sum+ele;
},0)

console.log(sumArray);

