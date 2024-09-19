/* 
    library fine
    input
    9 6 2015
    6 6 2015
    
    output = 45
    
    explaination
    If the book is returned on or before the expected return date, no fine will be charged 
        fine = 0
    If the book is returned after the expected return day but still within the same calendar month and year as the expected return date
        fine = 15 * no of days late
    If the book is returned after the expected return month but still within the same calendar year as the expected return date,
        fine = 500 * no of months late
    If the book is returned after the calendar year in which it was expected, there is a fixed fine of
        fine = 10000
*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // If returned on or before the expected date
    if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 <= d2)) {
        return 0;
    }
    
    // If returned in a later year
    if (y1 > y2) {
        return 10000;
    }
    
    // If returned in a later month of the same year
    if (m1 > m2) {
        return 500 * (m1 - m2);
    }
    
    // If returned later in the same month and year
    return 15 * (d1 - d2);
}

// Test the function
const [d1, m1, y1] = [9, 6, 2015]; // Return date
const [d2, m2, y2] = [6, 6, 2015]; // Due date
console.log(libraryFine(d1, m1, y1, d2, m2, y2)); // Output: 45
