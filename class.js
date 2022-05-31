// let a = 1
// let b = 2

// setTimeout(function() {
//     console.log("async");
// },1000)

// console.log("synchroneous");
// console.log(a);
// console.log(b);

// let arr = [1,2,3,4,5]

// arr.forEach(a) 
// console.log(arr);
// numbers.forEach(number)

// let sum = 0;
// numbers.forEach( a => {
//     sum +=  a
// })

// ============================for each in arrays===================================================
// 


// here a is the value at that index for ex numbers[0] = 1 so a is 1(value)
// b is the index number itself 
// c prints the whole array


// numbers.forEach()


// numbers.forEach(number)

// function number (a,b,c) {
//     console.log("numbers[" +b + '] = ' + a );
// }

// method - 2 using loop 
// for (i=0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let sum = 0;
// numbers.forEach( a => {
//     sum +=  a
// })
// console.log(sum);


// let arr = ["a","b"]
// console.log(typeof arr);

let numbers = [1,2,3,4,5]

sum =0;
numbers.forEach((value,index,arr) => console.log(index, value, arr))


