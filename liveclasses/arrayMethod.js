//  Array.includes()
//  syntex := includes(searchElement, fromIndex)
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

// const arr = ['a', 'b', 'c'];
// arr.includes('a', -100) // true


// --------fill()--------//

// const tempGirls = Array(5).fill("girl", 0);
// console.log(tempGirls);


// const arrray4 = [1, 2, 3, 4, 5];
// console.log(arrray4.fill(0, 1));

//--------filter------//


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ];

// const result = words.filter(word => word.length > 6);
// console.log(result);

// function isBigEnough(value) {
//     return value >= 10;
// }
// const filtered = [12, 5, 8, 130, 44];
// console.log(filtered.filter(isBigEnough));

// const filtered = [12, 5, 8, 130, 44];
// const isBigEnough = filtered.filter((element) =>{
//         return  element >= 10;
// }
         
// )
// console.log(isBigEnough);



// const newArray = [1, 3, 2, 5, 10];
// const myPrimeArray = newArray.filter(num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// });
// console.log(myPrimeArray);


// function fiterItems(arr, query){
//     return arr.filter((el) => 
//     el.toLowerCase().includes(query.toLowerCase()));
// }

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange' ];

// console.log(fiterItems(fruits, 'ap'));


words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new');
  console.log(arr);
  return word.length < 6;
})

console.log(appendedWords);






