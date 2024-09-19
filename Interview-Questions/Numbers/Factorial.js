//  factorial of a given number

function factorial(n) {
    let fact = 1;
    if (n <= 1) {
        console.log(1);
    } else {
        for (let i = n; i > 0; i--) {
            fact *= i;
        }
    }
    console.log(fact);
}

factorial(4);