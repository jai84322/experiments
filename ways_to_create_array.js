let arr = [1,2,null, undefined, 5]
console.log(arr);



let arr2 = new Array(1,4,5, "hello", null, undefined)
console.log(arr2);

let arr3 = Array.of("hello", 1,6, undefined, null)
console.log(arr3);

let arr4 = new Array(1,2,"hio")
let newArr = Array.from(arr4)
newArr[0]= 9
arr4[1]= "meeow"
console.log(arr4);
console.log(newArr);


