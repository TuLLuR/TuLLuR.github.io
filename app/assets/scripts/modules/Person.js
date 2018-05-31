class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;   
    }

    greet() {
        console.log("Name - " + this.firstName + "\nSurname - " + this.lastName);
    }
}

export default Person;