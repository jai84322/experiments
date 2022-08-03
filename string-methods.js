const string = 'This is my string';

// space occipies an index in string
// to count lenght of string
console.log(string.length); // includes spaces also


// Retrieving a specific string character
console.log(string[4])

// retrieving last character of string
console.log(string[string.length-1])

// Testing if a string contains a substring
let check = string.includes("This") // case sensitive
console.log(check + " check");


// check if string starts with substring
let check1 = string.startsWith("Thi") //case sensitive
console.log(check1 + " check1");

// check if string ends with substring
let check2 = string.endsWith("ing") // case sensitive
console.log(check2 + " check2");

// Finding the position/index of a substring in a string
// you can also pass an option parameter which is index number where you want the search to start from
let check3 = string.indexOf("is") // will return index of first occurence of the sub string. if not found will return -1
console.log(check3 + " check3"); 

// multiple occurence of substring ko find karna hai 
// you can also pass an option parameter which is index number where you want the search to start from
let check4 = string.indexOf("is" , check3 + 1)
console.log(check4);

// Extracting a substring from a string
let check5 = string.slice(2,6) // 6 not included
console.log(check5);

let check6 = string.slice(5)
console.log(check6);

//  Changing case
let check7 = string.toLowerCase()
console.log(check7);
let check8 = string.toUpperCase()
console.log(check8 + " check8");

//  Updating/replacing parts of a string

let check9 = string.replace("is", "are")
console.log(check9);

let check10 = string.replaceAll("is", "vis")
console.log(check10);

// to remove white space from a string 
let str = "hello how are you doing today" 
let che = str.replace(/ +/g, "")
console.log(che + " che");







