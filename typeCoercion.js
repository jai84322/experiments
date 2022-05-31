// // let fname = "jhon"
// // let lname = "cena"
// // let age = 30

// // let greetings = `my name is ${fname} ${lname} and I am ${age} years old.`
// // console.log(greetings)


// let a = 2
// let b = "b"

// {
//     let c= 4 
//     {
//         let d = 5
//         console.log(c); // will be able to access it here 
//     }
// }

// console.log(a);
// console.log(b);
// // console.log(c); // won't be able to access it here 
// console.log(d); 


// // var is a global variable and var is global scoped 
// // let and const are local variable and they are block scoped 



// let a = 2 
// let b = 3
// a = 6

// const a = 3
// a  = 4

// console.log(a);

// let a = "jhon"
// a = Number("jhon")
// console.log(typeof a );
// console.log(a);

// ============== god know what it is but its awesome ===========

// let person = {
//     name : "jhon",
//     age : 30
// };

// for (let item in person ) {
//     console.log(item);
// }

// ===================================================================

// let arr = [1,2,3,4,5,66,74]
// let arr2 = [45,36,27,70]
 
// console.log(arr);
// console.log(...arr);
// let c = arr.concat(arr2) // method 1
// console.log(c);
// let d = [...arr, ...arr2]
// console.log(d);

// let [a,b,...c] = [1,2,3,4]

// console.log(a,b,c);


// let person = {
//     name : "jhone",
//     age : 30,
//     gender : "male"
// }

// person.name = "simu"
// delete person.gender
// console.log(person);

function makeNegetive (num) {
   if (num <=0) {
       return num
   } else {
       return num *= -1
   }

}

console.log(makeNegetive(0))



