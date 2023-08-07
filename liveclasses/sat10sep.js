// class User {
//   constructor(
//     firstName = "JavaScript",
//     lastName = "Web Developer",
//     email = "abc@gmail.com",
//     password = "1234567"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// let user1 = new User(" ",  " " , "email@gmail.com", "12345678");
// console.log(user1.getFullName());

// let user2 = new User("Govind", "Magar", "govind@gmail.com", "123456789");
// console.log(user2.getFullName());


//----------------------------- other example for class --------------------------------------------------------------------------------------------------------

// class User {
//     constructor(
//       firstName, 
//       lastName, 
//       credits) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.credits = credits;   
//     }
//     getFullName() {
//       let Fullname = `${this.firstName} ${this.lastName} is my fullname`;
//       return Fullname;
//     }

//     editName(newname) {
//       const myName = newname.split('');
//       console.log(myName);
//       this.firstName = myName[0];
//       this.lastName = myName[1];
//     }

   
// }


// const john = new User('Jsohn', 'Anderson', 34);
// john.editName("johnnyAnderson");
// console.log(john.getFullName());


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class User {
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
    
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   // get method

//   get getFirstName(){
//     return this.firstName;
//   }

 

//   get getLastName(){
//     return this.lastName;
//   }
//  //set method
//   set setScore(score) {
//         this.score = score;
//       }
    
//   get getScore() {
//         return this.score;
//       }

// }

// let user1 = new User("Javascript", "webDevelopment");

// console.log(user1.getFirstName);
// console.log(user1.getLastName);


// console.log(user1.getScore);
// user1.setScore = 7;
// console.log(user1.getScore);


// class Polygon {
//   constructor(...sides) {
//     this.sides = sides;
//   }
//   // Method
//   *getSides() {
//     for (const side of this.sides) {
//       yield side;
//     }
//   }
// }

// const pentagon = new Polygon(1,2,3,4,5);

// console.log([...pentagon.getSides()]); // [1,2,3,4,5]



// ------ inheritance---------------

// class UserOne {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// class UserTwo extends UserOne {
//   constructor(firstName, lastName) {
//    super(firstName, lastName);
    
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }


// const trying =  new UserTwo('kanchanlata', "kujur");
// console.log(trying.getFullName());

// const trying1 =  new UserOne('kanchan', "kujur");
// console.log(trying1.getFullName());


// -------------------------prototype----------

