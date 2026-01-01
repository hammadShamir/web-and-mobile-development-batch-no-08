// console.log("Console 1")
// console.log("Console 2")
// setTimeout(()=>{
//     console.log('console 3')
// },3000)
// console.log(4)

// function greeting(name, callback) {
//     console.log("Hello" + name)
//     callback();
//     console.log("outer")
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greeting("bilal", sayBye)


// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);

//     }, 1000);

// }, 1000);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve("Success")
        } else {
            reject("Fail")
        }
    }, 1000)
})

myPromise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})