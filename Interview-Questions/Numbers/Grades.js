/*
    4
73
67
38
33

output
75
67
40
33

1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75-73 <3, the student's grade is rounded to 75.

2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70-67 = 3, the grade will not be modified and the student's final grade is 67.

3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40-38 < 3, the student's grade will be rounded to 40.

4. Student 4 received a grade below 33, so the grade will not be modified and the student's final grade is 33.
*/

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        } else {
            return grade;
        }
    });
}

// Read input
const n = parseInt(readline(), 10);
const grades = [];
for (let i = 0; i < n; i++) {
    grades.push(parseInt(readline(), 10));
}

// Calculate and print the results
const result = gradingStudents(grades);
result.forEach(grade => console.log(grade));
