// to deep copy array =  
// let result = JSON.parse(JSON.stringify(arr))  // it will deep copy the array
 

// let arr = [3, 6, 0, 6, 3]
let arr = [1, 2, 3, 4, 5]
// let arr = [144, 4, 4, 144]
// let arr = [23, 45, 67, 89]



function solution(arr) {
    let newArr = JSON.parse(JSON.stringify(arr))
    let result = newArr.reverse()
        // console.log(arr[0]);
        // console.log(result[0]);
        for (i = 0; i < arr.length; i++) {
                if (arr[i] === result[i]) {
                        return "Yes"
                    }
                    return "No"
                }
}

let ans = solution(arr)
console.log(ans)
            

// let arr = [1, 2, 3, 4, 5]
// let newArr = []
// let newArr2 = []
// for(i=0;i<arr.length;i++) {
    //     let newArr = newArr.pop(arr)
//     newArr2.push(newArr)
// }

// console.log(arr);
// console.log(newArr);
// console.log(newArr2);

// let arr = [1, 2, 3, 4, 5]
// let newArr = {...arr}
// let result = JSON.parse(JSON.stringify(arr)) // this one is working 
// let result =  newArr.reverse()

// console.log(arr);
// console.log(newArr);
// // console.log(result);