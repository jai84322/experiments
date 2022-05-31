// let person = {
//     name : "jai sharma",
//     age : 20,
//     location : "jaipur"
// }

// // crud on object
// person["youtube"] = "NA" // to create 
// let newName =  person.name // to read\
// person.age = 100 // to update 
// delete person.name  // to delete 

// console.log(person);  


let arr = [1,2,3,4,5]

// // crud on array
arr.push(1) // to create 
console.log(arr);
arr.pop()
console.log(arr);

newArr = arr[0] // to read
arr[0] = 10 // to update
// let arr2 = arr.slice(1,4) 
// ye unko rakhta hai (and array banata hai) jo argument me diya hai 
// 1st index se lekar 3rd index tak ka array bana dega baaki sab remove kar dega and 4th index isnot included
// remove an index OR to delete the selected index from an array 
// returns array selected element as a new array NOTE : doesnot include last index of the given argument
// you will have to store the result in a new variable 

arr.splice(1,0,"lemon") 
// ye 1st index se 0 elements ko remove karega and 1st index par add kardega values jo argument me di hai and agar 0 ki jagah 1 likh diya to ek/1 element ko remove kardega then add karega 
// isme store karwane ke liye new variable nahi chahiye 

console.log(newArr);
// console.log(arr2);
console.log(arr);








// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];


// const citrus = fruits.slice(1, 3); // returns array selected element as a new array NOTE : doesnot include last index of the given argument

// console.log(citrus);


// let arr = [1,2,3,4,5]

// arr.splice(2,1)

// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add 2 elements: 
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);