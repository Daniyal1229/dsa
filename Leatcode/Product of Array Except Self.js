/* 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/  


var productExceptSelf = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let arr = nums.filter((ele, index) => {
            return index !== i;            
        });
        let product = arr.reduce((acc, ele) => acc * ele, 1);
        res.push(Math.abs(product) === 0 ? 0 : product);
        
    }
    console.log(res);
    
};


productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);
