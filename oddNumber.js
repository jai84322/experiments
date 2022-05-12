// let array = [1,2,3,4,5,6,7,8,9,10]

// let oddNumber = [];

// for (i=0; i<array.length; i++) {
//     if (array[i]%2 !== 0) {
//          oddNumber.push(array[i])
//     }
// }

// console.log(oddNumber);

// ================== another method using .filter() ===============================

// let array = [1,2,3,4,5,6,7,8,9,10]

// let odds = array.filter(number => number%2 !== 0)

// console.log(odds);

// ================== another method using forEach() ===============================

// let array = [1,2,3,4,5,6,7,8,9,10]

// let odds = [];
// array.forEach ( number => {if (number%2 !==0 ) {odds.push(number)}})
// console.log(odds);

// =================== forEach in other way =================
// it is simply a loop 
// for (i=0; i<array.length; i++) {
//     console.log(array[i]);
// }

// ===================== using .map  but usse kyo nhi ho para I dunno ask it===================
let array = [1,2,3,4,5,6,7,8,9,10]

let odds = array.map(number => number %2 !== 0)

console.log(odds);


let numbers = [1,2,3,4,5]

let newNumbers = numbers.map(value => value*2)

console.log(newNumbers);