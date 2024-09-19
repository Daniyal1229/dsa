// the sky is blue
//  blue

function longestWord(s) {
    let arr = s.split(" ");
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length ) {
            longest = arr[i];
        }
    }
    console.log(longest);
    
}


longestWord('the sky is blue and beautiful')