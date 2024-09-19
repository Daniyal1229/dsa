//  palindrome
//  malayalam

function palindrome(s) {
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    if (rev === s) {
        console.log('palindrome');
    } else {
        console.log("not a palindrome");
        
    }
}

palindrome("abc");