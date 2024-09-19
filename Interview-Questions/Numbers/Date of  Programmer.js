/* 
input
2017
Sample Output 

13.09.2017
Explanation 

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

*/

function dayOfProgrammer(year) {
    let day = 256;
    let month = 9;
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's a leap year
    if (year < 1918) {
        // Julian calendar
        if (year % 4 === 0) daysInMonth[1] = 29;
    } else if (year > 1918) {
        // Gregorian calendar
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) daysInMonth[1] = 29;
    } else {
        // Special case: 1918
        daysInMonth[1] = 15; // February had 15 days in 1918
    }

    // Calculate the day
    for (let i = 0; i < daysInMonth.length; i++) {
        if (day > daysInMonth[i]) {
            day -= daysInMonth[i];
        } else {
            month = i + 1;
            break;
        }
    }

    // Format the date
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

// Test the function
console.log(dayOfProgrammer(2017)); // Output: 13.09.2017
console.log(dayOfProgrammer(2016)); // Output: 12.09.2016 (Leap year)
console.log(dayOfProgrammer(1800)); // Output: 12.09.1800 (Julian calendar)
console.log(dayOfProgrammer(1918)); // Output: 26.09.1918 (Special case)
