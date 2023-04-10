let grades = ['FAIL', 'A+', 'B' ]
let goodGrades = []

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}

console.log(goodGrades)