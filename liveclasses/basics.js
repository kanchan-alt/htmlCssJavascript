// let a = 10;
// console.log(typeof (a));

// let items = [1, 'kanchan', 35, true, 'kamya', 'kujur'];
// let newItems = [];
//  for(let item of items){
//     if(typeof item === "string"){
//     newItems.push(item)

//     };
    
//  };

//  console.log(newItems); 


// console.log(a);
// const a = 10;

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1.copyWithin(1,5,7));

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log( arr2.includes(5.6));   


// ARRAY methods

// Our aaray with items
// const cart = ['apple', 'banana','pear'];

// A function which return the last item in a given array
// function returnLast(arr){
//     return arr.at(-1);
// }

// const items1 = returnLast(cart);
// console.log(items1);

// Add item in cart array and find out using at()

// cart.push('mango');
// console.log(cart);  


// const items2 = returnLast(cart);
// console.log(items2);

// example 2 length properties

// const colors = ['red', 'green','blue'];
// console.log(colors[colors.length]);

// conacat()

// const letter = ['a', 'b', 'c'];
// const number = [1, 2, 3];

// const letterNumber = letter.concat(number);
// console.log(letterNumber);

// const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(array1.copyWithin(0, 3, 5));


// const array1 = ['a', 'b', 'c', 'd', 'e'];
// const arrayEntries = array1.entries();

// for(const element of arrayEntries){
//     console.log(element);
// }

// for([index, element] of arrayEntries){
//     console.log(index, element)
// }


// const test = (currentValue) => currentValue < 40;

// const array2 = [1, 30, 39, 29, 10, 13];

// console.log(array2.every(test));


// const isSubset = (array1, array2) => {
//     array2.every((element) => 
//     array1.includes(element));
// }

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));


// const array3 = [ 1, 2, 3, 4, 5];
// console.log(array3.includes(2));

const array1 = [1, 2, 3];

console.log(array1.includes(2));