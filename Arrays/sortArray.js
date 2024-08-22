let arr = [5,3,8,1,2];

let aSort = arr.sort((a,b)=>
    a-b)
console.log(aSort);
let dSort = arr.sort((a,b)=> 
    b-a
)
console.log(dSort);

//  it changes the original array