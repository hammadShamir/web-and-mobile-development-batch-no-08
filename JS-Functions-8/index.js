// // create a function
// function pizzaMachine(flvr, drink) {
//     console.log(`Your ${flvr} pizza is Ready with ${drink}`);
// }

// // call a funcion
// pizzaMachine("Zinger","Pepsi")


// const num1 = +prompt("Enter Your First Number");
// const num2 = +prompt("Enter Your Second Number");

// function addTwoNumbers(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const sumvalue = addTwoNumbers(num1, num2);

// if (sumvalue > 10) {
//     console.log("You are Rich")
// } else {
//     console.log("Your are Poor");
// }


function test() {
  let x = 10; // local
  return x;
}

const x = test();
console.log(x); // ❌ Error