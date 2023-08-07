//LOOPS

// for (initialization, conditon, increment/decrement){
//code
//}
// let i;
// for (let i = 1; i < 5; i++) {
//   console.log(`${i}`);
// }

// for (let i = 1; i < 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);  
// }
// TOD0: inner loop
// for (let i = 1; i < 5; i++) {
//     console.log(`the  ${i} square number`)
//     for(let j = 1; j < 5; j++){
//         console.log(`${i} * ${j} = ${i * j}`); 
       


//     }  
//   }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// let newcon = [];
// for (let i = 0; i < con.length; i++) {
//   newcon.push(con[i].toUpperCase());
// }
// console.log(newcon);

// TODO: Square of array number

// let number =[1,2,3,4,5];
// let squareNumber = [];
// for (i = 0; i < number.length; i++){
//     squareNumber.push(number[i]* number[i]);
// }
// console.log(squareNumber);

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i = i + 1;
// }
// TODO: while (i % 2 == 0)
//   even number
//  let i = 4;
//  while (i % 2 == 0){
//   console.log('this is even number');
//   i = i+1;
//  }

// let i = 0;
// do {
//   console.log(i);
//   i = i + 1;
// } while (i <= 5);
// it run atleast one time

// Syntax:
// for (let var of array)

// let num = [1, 2, 3, 4, 5];
// for (let number of num) {
//   console.log(number);
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// for (let cont of con) {
//   console.log(cont[0]);
// }

// TODO: Repeat above method of uppercase using for of loop

// let con = ["India", "Sweden", "Norway", "Iceland"];
//  let upperCaseCon = [];
// for (let cont of con) {
//   console.log(cont.toUpperCase());
// upperCaseCon.push(cont.toUpperCase());

// }
// console.log(upperCaseCon);



// let con = ["India", "Sweden", "Norway", "Iceland"];
// for (let cont of con) {
//   console.log(cont.toUpperCase());
// }

//break and continue

// for (let i = 1; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// Functions
//Defination
// Function without parameter
// function Squ() {
//   let x = 7;
//   let sq = x * x;
//   console.log(sq);
// }
// Squ(); //Calling

// Function with parameter
// function add(x, y) {
//   let xy = x + y;
//   console.log(xy);
// }

// add(5, 2);

// // 1000 lines of code
// add(25, 19);

// function printfullname(firstname, lastname) {
//   let full_name = firstname + " " + lastname;
//   return full_name;
// }

// // let fn = printfullname("Anurag", "Tiwari");
// // console.log(fn);
// console.log(printfullname("Anurag", "Tiwari"));

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(10));

// function sumofArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// let numb = [1, 2, 3, 4, 5, 6, 7, 8];

// ==========for not work  my logic is not correct=======
// let numb = [1, 2, 3, 4, 5, 6, 7, 8];

// function sum(...args) {
//     var total = 0;
//     args.forEach(arg => {
//       total += arg;
//     });
//     console.log(total);
//   }
  
//   sum(1, 3);







// let holdvalue = sumofArray(numb);
// console.log(holdvalue);

// const SumofAll = (...args) => {
//   let sum = 0;
//   for (let element of args) {
//     sum = sum + element;
//   }
//   return sum;
// };

// console.log(SumofAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// let varibalename = () => {
//   FCGVHBJNKM;
// };

//Truthy Value (TRUE VALUE) and Falsy Value (FALSE VALUE)

// DATE AND TIME

// let now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now);
// console.log(now.toString());

//TODO: GLobal Scope
// TODO: LOCAL Scope
//      - block Scope
//      - Function Scope