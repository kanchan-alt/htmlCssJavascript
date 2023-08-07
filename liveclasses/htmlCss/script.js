// program for execution context
// var count = 10;
// var counttwo = 07;
// function fullname() {
//   var fname = "Anurag";
//   var lname = "Tiwari";
//   console.log(fname, lname);
// }
// fullname();




// var a = 10;
// var b = 20;

// function ab () {
//     var aa = 10;
//     var bb = 20;
//     console.log(aa + bb);
//     function abc () {
//         console.log('Hello world');
//     }
// }
// ab();
// var cc =30;

// console.log(a);
// var a = 20;
// let b = 30;


// class


var person = new Person();
person.name = "Jane";
person.age = 25;

console.log(person); // Uncaught ReferenceError: Cannot access 'Person' before initialization"

class Person {
    constructor(name, age) {
      this.name = name; this.age = age;
    }
}