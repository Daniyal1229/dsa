/* 
    input
    07:05:45PM
    output
    19:05:45
    
    Given a time in -hour AM/PM format, convert it to military (24-hour) time.
*/

function timeConversion(s) {
    let [time, period] = s.split(/(?=[AP]M)/);
    let [hours, minutes, seconds] = time.split(':');

    if (period === 'PM') {
        hours = hours === '12' ? '12' : String(parseInt(hours) + 12);
    } else {
        hours = hours === '12' ? '00' : hours;
    }

    return `${hours}:${minutes}:${seconds}`;
}

// Test the function
console.log(timeConversion('07:05:45PM')); // Output: 19:05:45
console.log(timeConversion('12:01:00PM')); // Output: 12:01:00
console.log(timeConversion('12:01:00AM')); // Output: 00:01:00
