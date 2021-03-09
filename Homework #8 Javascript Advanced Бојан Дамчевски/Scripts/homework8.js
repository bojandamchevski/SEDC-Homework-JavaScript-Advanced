class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    get firstName() {
        console.log("Getting the first name of the person...");
        return this._firstName;
    }
    set firstName(personFirstName) {
        // console.log('Setting the person first name up');
        !!personFirstName && personFirstName.length > 1 ? this._firstName = personFirstName :
            (() => {
                throw new Error("Invalid person name")
            })();
    }
    get lastName() {
        console.log("Getting the last name of the person...");
        return this._lastName;
    }
    set lastName(personLastName) {
        // console.log('Setting the person last name up');
        !!personLastName && personLastName.length > 1 ? this._lastName = personLastName :
            (() => {
                throw new Error("Invalid person name")
            })();
    }
    get age() {
        console.log("Getting the age of the person...");
        return this._age;
    }
    set age(personAge) {
        // console.log('Setting the age up');
        !!personAge && personAge >= 1 ? this._age = personAge :
            (() => {
                throw new Error("Invalid person age")
            })();
    }
    get address() {
        console.log("Getting the address of the person...");
        return this._address;
    }
    set address(personAddress) {
        // console.log('Setting the address up');
        !!personAddress && personAddress.length > 1 ? this._address = personAddress :
            (() => {
                throw new Error("Invalid person address")
            })();
    }
    fullName() {
        return `First name: ${this._firstName} Last name: ${this._lastName} Age: ${this._age} Address: ${this._address}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, address, academy, subjects) {
        super(firstName, lastName, age, address)
        this.academy = academy;
        this.subjects = subjects;
    }
    static checkStudentAndSubjects(student, subject) {
        if (student instanceof Student) {
            for (let i = 0; i < student.subjects.length; i++) {
                if (subject === student.subjects[i]) {
                    console.log(`The student ${student.firstName} ${student.lastName} ${student.age} ${student.address} studies ${subject}`)
                    break;
                }
                else {
                    throw new Error(`ERROR, the student doesn't study ${subject}`);
                }
            }
        }
        else {
            throw new Error("ERROR");
        }
    }
}

let arrayOfStudents = [new Student("Bojan", "Damcevski", 22, "some street", "SEDC", ["JavaScript", "HTML", "CSS"]), new Student("Stefan", "Trajkov", 22, "other street", "SEDC", ["JavaScript", "CSS"])];

Student.checkStudentAndSubjects(arrayOfStudents[0], "JavaScript");
Student.checkStudentAndSubjects(arrayOfStudents[1], "HTML");
console.log(arrayOfStudents[0].fullName());
console.log(arrayOfStudents[1].fullName());