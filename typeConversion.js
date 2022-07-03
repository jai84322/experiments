
// let obj = {
//     fname: "jai",
//     lname: "sharma",
//     age: 30
// }


// let arr = JSON.stringify(obj);
// console.log(arr);
// console.log(typeof arr);
// let jsObject = JSON.parse(arr)
// console.log(typeof jsObject);

// let arr = [ "alex", "ana", "florin" ]
// console.log(arr);
// console.log(typeof arr);

// let newArr = JSON.stringify(arr)
// console.log(newArr);
// console.log(typeof newArr);

// let finalArr = JSON.parse(newArr)
// console.log(finalArr);
// console.log(typeof finalArr);

// let str = "hello how are you doing today"
// console.log(typeof str);

// let newStr = Number(str)
// console.log(typeof newStr);

// let arr = "hello" // assigned string value
// console.log(arr);
// arr = 9 // reassigned number value
// console.log(arr);

// let y = "6"
// let arr = 8
// let g =7
// let n = "9"

// console.log(y+arr+g+n);

// let a = "abc"
// let b = 8
// let c = String(true)
// let d = "false"
// let e = Boolean(undefined)
// let f = null

// console.log(c);
// console.log(d);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);

// let low = function hello () {
//     console.log("hello");
// }

// low ()
// let b = Boolean(low)

// console.log(b);
// console.log(typeof b);

// let num = 123
// let str = "456"

// console.log(num === str);
// console.log(typeof str);

// console.log(num);

// let num = Number("  ")
// console.log(num)

// let num = Number("44")
// console.log(num + "56");

// console.log(typeof "56");

// baaki sab to BOOLEAN

// function f () {
    // return "hello"
// }

// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(f()));

// console.log(Boolean("") + " = string quotes");
// console.log(Boolean("  ") + " = only space in string");
// console.log(Boolean(",") + " = comma ");
// console.log(Boolean("-") + " = - in string");
// console.log(Boolean("true") + " = true in string");
// console.log(Boolean("false") + " = false in string");
// console.log(Boolean("a") + " = character in string");
// console.log(Boolean("-1") + " = negetive number in string");
// console.log(Boolean("123") + " = number in string");
// console.log(Boolean("null") + " = null in string");
// console.log(Boolean("undefined") + " = undefined in string");
// console.log(Boolean(0) + " = 0");
// console.log(Boolean(-0) + " = -0");
// console.log(Boolean(1) + " = number");
// console.log(Boolean(null) + " = null");
// console.log(Boolean(undefined) + " = undefined");
// console.log(Boolean(NaN) + " = Nan");
// console.log(Boolean(true) + " = boolean true");
// console.log(Boolean(false) + " = boolean false");


// false = string quotes
// true = only space in string
// true = comma
// true = - in string
// true = true in string
// true = false in string
// true = character in string
// true = negetive number in string
// true = number in string
// true = null in string
// true = undefined in string
// false = 0
// false = -0
// true = number
// false = null
// false = undefined
// false = Nan
// true = boolean true
// false = boolean false


// let arr 

// console.log(arr);
// undefined 

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

// baaki sb to NUMBER

// let str = "abc" // NaN // string
// let  b = '-1' // converted // number
// let  c = 'true' // NaN // boolean
// let d = "undefined" // NaN // undefined
// let e = "null" // NaN // null 
// let f = " " // space // log = nothing (cauz its not a value) ||  typeof = string 
// let num = Number(str)
// console.log(num);
// console.log(typeof num);
// let num1 = Number(b)
// console.log(num1);
// console.log(typeof num1);
// let num2 = Number(c)
// console.log(num2);
// console.log(typeof num2);
// let num3 = Number(d)
// console.log(num3);
// console.log(typeof num3);
// let num4 = Number(e)
// console.log(num4);
// console.log(typeof num4);
// let num5 = Number(f) 
// console.log(f); // its not a value so nothing just blank line
// console.log(typeof f); // string

// conversion of sabka to a string 

// let a = String(9)
// console.log(a);
// console.log(typeof a);

// let b = String(true)
// console.log(b);
// console.log(typeof b);

// let c = String(undefined)
// console.log(c);
// console.log(typeof c);

// let d = String(null)
// console.log(d);
// console.log(typeof d);

// 9
// string
// true
// string
// undefined
// string
// null
// string


// now checking arithmatic operator (+, -, *, /)
// addition cases string+string, string+number, number+string, string+boolean, string+null, string+undefined
// let a = "a"
// let b = "b"
// console.log(a+b);

// let c = "c"
// let d = 9
// console.log(c+d);

// let num = 9
// let num2 = 9
// let str = 'z'
// let v = num + num2 + str
// console.log(v); // number + string
// console.log(typeof v); 


// let a = '10'
// let b = 2
// console.log(a+b); // here engine is changing 2 to string and concatinating both string  //102

// now checking comparision operator 

// let arr = [1,2,3]
// let n= [4,5,6]
// console.log(arr.concat(n));


// let c = Number(true)
// let d  =Number(false)
// let e = Number(null)
// let f = Number(undefined)

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


// let g = Number(0)
// console.log(g);

// console.log(4 + '4'); 
// console.log('5' + 5); //will convert the number to string and concatinate both 

// console.log(true == "true"); // false

// will not compare a string/number to a Boolean


