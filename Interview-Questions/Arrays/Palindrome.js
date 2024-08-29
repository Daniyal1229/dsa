// stack

//  functions push pop peek length

let stack = [];
let word = 'racecar';
let reWord = '';

for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    reWord += stack.pop();    
}

if (word === reWord) {
    console.log(`${word} is plaindrome`);
}
else{
    console.log(`${word} is mot a palindrome`);
}