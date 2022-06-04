let arr = [1,2,3,4,5,6]

console.log(...arr); // spread operator 

function sum (...args) { // rest operator
    console.log(args);
    let sum = 0;
    for(i=0;i<args.length;i++) {
        sum += args[i];
    }
    return sum
}

console.log(sum(1,2,3,4,5,6,7));

// spread will spread the number from an array 
// rest will convert the numbers into an array 