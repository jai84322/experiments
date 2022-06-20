// through loop 


// function printNumber (n) {
//     for(i=n;i>0;i--) {
//         console.log(i);
//     }
// }

// console.log(printNumber(10));


// que -1 print numbers from 5 to 1 using recursion 

// function printNumber (n) {
//     if (n<=0) { // base case
//         return
//     }
//     console.log(n);
//     printNumber(n-1)
// }

// printNumber(5)

// que -2 print numbers from 1 to 5 using recursion 

// function printNumb (n) {
//     if (n>5) { // base case
//         return 
//     }
//     console.log(n);
//     printNumb(n+1)
// }

// printNumb(1)

// que -3 print sum of first n natural numbers 

// function printSum (i,n,sum) {
//     if (i==n) {
//         sum += i
//         console.log(sum);
//         return 
//     }
//     sum += i
//     console.log(sum);
//     printSum(i+1, n, sum)
// }

// printSum (1,5,0)

// que -4 print factorial of num n

        // using loop //

// function factorial (n) {
//     let num = 1
//     for (i=n;i>0;i--) {
//         num *= i
//         // console.log(num);
//     }
//     console.log(num)
// }

// factorial(5)


        // using recursion //

function factorial (n,m,fac) {
    if (n==m || n ==0) {
        fac *= n
        console.log(fac)
        return 
    }
    fac *= n
    factorial(n-1,m,fac)
}

factorial(0,1,1)

// main = 5
// base case = agr 0 ho jaye toh 
// math = 