// const callMe = new Promise((resolve, reject)=>{
//     if (true) {
//         resolve("Resolve")
//     } else {
//         reject("False")
//     }
// })

// callMe

// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err)
// })



const callMe = async function () {
    if (true) {
        return "hello world"
    }
}
const parent = async () => {
    return await callMe()
}

(async () => {
    console.log((await parent()))
})();
