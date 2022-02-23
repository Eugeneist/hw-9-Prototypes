"use strict"


class  Employee {

    constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static vacationDays = 18;

    yearSalary() {
        const myYearSalary = this.salary * 12;
        return `Моя годовая зарплата ${myYearSalary}$!`;
    }
}


const user1 = new Employee("Michael", "Townley", 35, "director", 5000);
const user2 = new Employee("Travor", "Phillips", 40, "builder", 1000);
const user3 = new Employee("Franklin", "Clinton", 25, "student", 500);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.fullName);
console.log(user2.fullName);
console.log(user3.fullName);
console.log(user1.yearSalary());
console.log(user2.yearSalary());
console.log(user3.yearSalary());