$(document).ready(() => {
    function print() {
        $.ajax({
            method: "GET",
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success: function (data) {
                let response = JSON.parse(data);
                console.log("===== Students with an average grade higher than 3 =====");
                let averageGradeHigherThan3 = response.filter(student => student.averageGrade > 3);
                averageGradeHigherThan3.forEach(student => console.log(`Name of Student: ${student.firstName} Grade: ${student.averageGrade}`));

                console.log("===== Female students with an average grade of 5 =====");
                let femaleStudentsWithAverageGradeOf5 = response.filter(student => student.averageGrade == 5 && student.gender === "Female");
                femaleStudentsWithAverageGradeOf5.forEach(student => console.log(`Name of Female Student: ${student.firstName} Grade: ${student.averageGrade}`));

                console.log("===== Male student in Skopje over 18 years =====");
                let maleStudentsFromSkAbove18 = response.filter(student => student.city === "Skopje" && student.gender === "Male" && student.age > 18);
                maleStudentsFromSkAbove18.forEach(student => console.log(`Full name of Male Student: ${student.firstName} ${student.lastName} Grade: ${student.age}`));

                console.log("===== Average grades of female students over the age 24 =====");
                let averageGradeOfFemale24 = response.filter(student => student.age > 24 && student.gender === "Female");
                function averageGrade(sum, grade) {
                    return sum += grade;
                }
                let averageGradeOfFemale24Map = averageGradeOfFemale24.map(s => s.averageGrade)
                    .reduce(averageGrade, 0);
                let average = averageGradeOfFemale24Map / averageGradeOfFemale24.length;
                console.log(`The average grade of female students above the age 24 is: ${average}`);

                console.log("===== Male students which name starts with B and average grade over 2 =====");
                let allMaleStudentsabove2 = response.filter(s => s.averageGrade > 2 && s.gender === "Male" && /^[b]/i.test(s.firstName));
                let allMaleStudentsWithBabove2Map = allMaleStudentsabove2.map(s => s.firstName);
                allMaleStudentsabove2.forEach(s=> console.log(`${s.firstName} ${s.averageGrade}`));
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
    print();
});