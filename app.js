// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting <-- Prototype method
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`
};

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Create a customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');