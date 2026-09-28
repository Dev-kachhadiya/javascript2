// Q5 

let student = {
  name: "Dev",
  age: 20,
  isEnrolled: true
};

console.log("Whole object:", student);
console.log("Name only:", student.name);
console.log("Age only:", student.age);

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);
console.log("Mixed array:", mixed);

function greet(personName) {
  return "Hello, " + personName + "!";
}

let message1 = greet("Dev");
let message2 = greet("Rahul");

console.log(message1);
console.log(message2);