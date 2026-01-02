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

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = false;
//         if (success) {
//             resolve("Success")
//         } else {
//             reject("Fail")
//         }
//     }, 1000)
// })

// myPromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Run with Fail and sucess")
// })


// function sum(num1, num2) {
//     const sums = num1 + num2
//     return sums
// }

// const answer = sum(1, 1);

// console.log(answer)

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 1 done"), 1000);
//     });
// }

// function step2(message) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(message + " → Step 2 done"), 1000);
//     });
// }

// step1()
//     .then(step2)
//     .then((result) => console.log(result))
//     .catch((err) => console.error(err));


fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
