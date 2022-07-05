
// let arr = '{"x":"5", "y":"r", "z":"u", "a":"6"}'

// let newArr = JSON.parse(arr)
// console.log(newArr);

// let obj = {
//     fname: "jai",
//     lname : "sharma",
//     age: 30
// }

// let newObj = JSON.stringify(obj)
// console.log(newObj);


    // this is shallow copy 

// let obj = {
//     fname : "jhon",
//     lname : "doe",
//     age: 30
// }

// let newObj = obj
// newObj.fname = "hello"

// console.log(obj);
// console.log(newObj);

// explaination : it will change the original and the new one also no matter if its simple object or nested one 

// shallow copy with spread operator 

// let obj = {
//     fname : "jhon",
//     lname : "doe",
//     age: 30,
//     location : {
//         city: "jaipur",
//         state: "rajasthan"
//     }
// }

// let newObj = {...obj}
// newObj.fname = "hello"
// newObj.location.city= "delhi"

// console.log(obj);
// console.log(newObj);


/* output 

{
    fname: 'jhon',
    lname: 'doe',
    age: 30,
    location: { city: 'delhi', state: 'rajasthan' }
  }
  {
    fname: 'hello',
    lname: 'doe',
    age: 30,
    location: { city: 'delhi', state: 'rajasthan' }
  }

  */

  // explaination : here you see if there is nested object then it will not do deep copy of that 
  // if the the object is simple (without nested object) it spread operator will deep copy that 

  // checking for json parse only
  

//   let obj = {
//     fname : "john",
//     lname : "doe",
//     age: 30
//   }

//   let newObj = JSON.parse(JSON.stringify(obj))

//   obj.fname = "liam"
//   newObj.fname = "florin"
//   console.log(obj);
//   console.log(newObj);

// okay sirf json parse se deep copy nahi hota 
// you have to use json parse then json stringify 

  /* deep copy methods = 
  1- structured clone (don't know)
  2- spread operator (will deep copy (except nested object/array))
  3- JSON.parse(JSON.stringify(obj/arr))
  */


  // what does json.stringify do ?? 
//   ans = it takes object/array and will convert it into string then later it's upto you if you want to convert it into object/array using json parse 

//   let obj = {
//     fname : "john",
//     lname : "doe",
//     age: 30
//   }

//   let newObj = JSON.stringify(obj)

//   obj.fname = "liam"
//   newObj.fname = "florin"
//   console.log(obj);
//   console.log(newObj);

// below is the example of converting an array to a string and then further converting that json string to array 
// after doing deep copy

// let arr = [1,2,3,4]

// let newArr = JSON.parse(JSON.stringify(arr))

// newArr[2] = 8

// console.log(arr);
// console.log(newArr);

