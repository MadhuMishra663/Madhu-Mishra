// Create a constructor function Person with a property name. Add a method greet to its prototype that prints "Hello, <name>". Test this with different instances.

function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  const person1 = new Person("Alice");
const person2 = new Person("Bob");
const person3 = new Person("Charlie");
person1.greet();  
person2.greet();  
person3.greet();  