function printLeftAlignedTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Add spaces
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        // Add asterisks
        for (let k = 1; k <= i; k++) {
            row += '*';
        }
        console.log(row);
    }
}

// Call the function with n = 5
printLeftAlignedTriangle(5);