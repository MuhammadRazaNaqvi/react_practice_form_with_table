let students = [
  {
    id: 1, 
    firstName: "Ali",
    lastName: "Ashraf",
    age: "24",
    class: "2",
    city: "Lahore",
  },
  {
    id: 2,
    firstName: "Ahmad",
    lastName: "Sattar",
    age: "24",
    class: "3",
    city: "Lahore",
  },
  {
    id: 3,
    firstName: "Arbaz",
    lastName: "Sheraz",
    age: "23",
    class: "3",
    city: "Islamabad",
  },
];
let student1 = {
  id: 4,
  firstName: "Ghamees",
  lastName: "Mohsin",
  age: "24",
  class: "2",
  city: "Lahore",
};
let student2 = {
  id:5,
  firstName: "Muhammad",
  lastName: "Raza",
  age: "24",
  class: "3",
  city: "Islamabad",
};
// console.log(students);

students.unshift(student1);
// console.log(students);

students.push(student2);
console.log(students);

// var userInput=prompt("Please input id number");
var input = prompt("What is your name?");
console.log("Hello, " + input + "!");


export default students;

