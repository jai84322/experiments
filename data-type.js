// primitive 

// let age = 30 
// let age1 = age
// age = 35

// console.log(age);
// console.log(age1);

// primitives are accessed by value 

// here you can see clear when you copy a primitive value in a new variable (age1) and assign value of age to it
// then when you reassign the value to age later in line 3 
// now log both variables age and age1
// you can clearly see the age1 is still holding the same value which we assigned and 
// age has been reassigned the value and it is logging that too - 35

// primitives are accessed by value 
// When we assign a variable that stores a primitive value(ex-age) to another(ex-age1), the value stored in the variable is created and copied into the new variable.
// matlb value copy ho rahi hai and then new variable me store ho rahi hai 
// that's why when you change one to dusri affect nahi ho rahi 


// non primitive 

// JavaScript provides three types of Reference values that include Array, Object, and Function.
// When we access a reference value, we manipulate it through reference, not through its actual value that is stored
// Thus, variables that are reference values are accessed by reference

// let info = {
    // name: "jai",
    // age: 40
// }

// let info1 = info
// info1.name = "hello"

// console.log(info); // { name: 'hello', age: 40 }
// console.log(info1); // { name: 'hello', age: 40 }

// you see here what is happening it is changing it for both the original(info) one and the copied one (info1)
// Thus, variables that are reference values are accessed by reference


// primitive data type 
// 1- String
// 2- Number
// 3- Boolean
// 4- null // typeof object
// 5- undefined

// non primitive data type  (reference types)
// 1- Array // typeof object
// 2- Object 
// 3- function 

// function t ()  {

// }

// console.log(Boolean(t)); // true

// function f () {

// }
// console.log(Boolean(f)); // true
// console.log(typeof f); // function 


// function f () {

// }
// console.log(Boolean(f())); // false // you are calling function here inside boolean

// isNaN check for whether the input is a number or not 
// will return true if input is not a number (verified)
// will return false if input is a number (verified)
// console.log(isNaN('a')); // true
// console.log(isNaN('1')); // false


// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// null === undefined   // false
// null  == undefined   // true

// In JavaScript NaN is short for "Not-a-Number". The isNaN() method returns true if a value is NaN. The isNaN() method converts the value to a number before testing it.



// undefine = it is put by js language
// null = it is put by dev ki aage kuch daal dunga abhi ni pta kya dalu toh null daal diya 
// just like seat rokne ke liye bus me hankey rakh dete h 

// let arr = 'hello123'
// console.log(arr);
// console.log(typeof arr);

// let newArr = Number(arr)
// console.log(newArr);
// console.log(typeof newArr);

// console.log(Boolean(isNaN('s78')))

// const str1 = 'hello42world';
// const str2 = 'hello world';

// function containsNumber(str) {
//   let arr =  /\d/.test(str);
//   return arr
// }

// console.log(containsNumber(str1)); // 👉️ true
// console.log(containsNumber(str2)); // 👉️ false


// const isValid = function (value) {


//     if (typeof value == Number || value == Boolean ) return false;
//     if (/\d/.test(value) == true)  return false;
//     if (typeof value == "string" && value.trim().length == 0) return false;
//     else if (typeof value == "string") return true;
//   };
