// let talk = function (fx) {
//     fx();
// }

// let sayHi = function () {
//     console.log("hi");
// }

// talk(sayHi)

// let calc = function (fx, a, b) {
//     return fx(a,b);
// }

// let sum = function (a,b) {
//      console.log(a+b);;
// }

// let num = calc(sum,4,5)


// callback function is like passing a function inside a function 

// let calc = function (fx, a, b) {
//     fx(a,b);
// }
// 
// let diff = function (a,b) {
//     console.log( a - b );
// }

// calc(diff, 6, 5)

let calc = function (fx, a, b) {
    fx (a,b)
}

let product = function (a,b) {
    console.log(a*b);
}

calc(product, 4, 6)