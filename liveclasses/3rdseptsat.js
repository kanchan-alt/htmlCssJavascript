//changing Datatype

//string to number

// let fakenum = "25";
// let org_Number = Number(fakenum);
// console.log(org_Number);
// console.log(typeof org_Number);


// Number to String
// let newNumber = 25;
// let orgNum = String(newNumber);
// console.log(orgNum);
// console.log(typeof orgNum);

// Destructuring and Spreading
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
// Example;


// let scivalue = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, gravity, bodytemp, boil] = scivalue;

// console.log(e);

// let fullstack = [["html", "css", "js", "tailwind" ],["nodejs", "express", "mongodb"],];

// let [frontend, backend] = fullstack;
// console.log(frontend); 

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
// let arrayone = [1, 2, 3, 4, 5];
// let [a, b, , , c] = arrayone;
// console.log(c);
//4 is omitted

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).


// let arrayone = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, ...rest] = arrayone;
// console.log(a,b);
// console.log(rest);

// Spread and Rest Operator
// spread
// function sum(x, y) {
//     return x + y;

// }

// let vari = [5, 7];
// console.log(sum(...vari))

// REST Operator
// function sumTwo(...args) {
//     console.log(args);
//     let sum = 0;
//     for (const x of args) {
//       sum = sum + x;
//     }
//     return sum;
//   }
//   console.log(sumTwo(1, 2, 3, 4, 5));

  // Creating Object with New Keyword
// New is a keyword

// let person = {
//     name: "kanchan",
// };
// console.log(person);
//we want to access the key than 
//console.log(person.name);

// let person = {}; 
// let person = new Object();
// person.name = "kanchanlata";
// person.gender = "women";
// console.log(person);


// var person = function(firstname, coursecount) {
//   this.firstname = firstname;
//   this.coursecount = coursecount;
    // this.getCourseCount = function () {
    // console.log(`Course Count is: ${this.courseCount}`);
    //  };
// };

// var kanchan =  new person("kanchan", 7);
// console.log(kanchan);
// console.log(kanchan.getCourseCount());

// var lata =  new person("lata", 5);
// console.log(lata);

// set and map

// set is collection of element . set can only contain unique elements.


// let a = [1, 2, 3, 1, 4, 3, 7, 8, 9, 10, 1, 3, 12];

// let num = new Set()
// console.log(num);
// num.add(5);
// console.log(num)
// num.delete(12);
// console.log(num)
// console.log(num.has(7));

// let prgmLan = [
//   "html",
//   "css",
//   "js",
//   "html",
//   "css",
//   "python",
//   "nodejs",
//   "express",
//   "nodejs",
// ];

// let lang = new Set(prgmLan);
// console.log(lang)

// for (let i of lang) {
//   console.log(i);
// }

// Creating and Empty Set and Adding the vlaue
// let comp = new Set();
// console.log(comp);
// console.log(comp.size);

// comp.add("iNeuron");
// comp.add("LCO");
// comp.add("iNeuron");
// comp.add("findcoder");
// comp.add("CoderCommunity");
// comp.add("Pensil");
// console.log(comp);
// console.log(comp.size);
// comp.delete("LCO");
// console.log(comp);
// comp.clear();
// console.log(comp);


// Maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// console.log("Map Start Here");
// let map = new Map();
// console.log(map);

// map.set("1", "str1"); // a string key
// map.set(1, "num1"); // a numeric key
// map.set(true, "bool1"); // Boolean Key
// console.log(map);

// console.log(map.size);

// console.log(map.get("1"));

let city = [['India', 'Delhi'], ['Gujarat', 'Surat'],
['Raj', 'jaipur']];


const mapp = new Map(city);
// console.log(mapp);
// console.log(mapp.size);
// console.log(mapp.get("India"));

// Getting all values from map using loop

// for (let [key, value] of mapp) {
//   console.log(key, value);
//   console.log(`The Key is ${key} and Value is ${value}`);
// }

// for (let key of mapp.keys()) {
//   console.log(key);
// }
// for (let values of mapp.values()) {
//   console.log(values);
// }


// mapp.forEach((keys) => console.log(keys));
// mapp.forEach((keys, values) => console.log(keys, values));





