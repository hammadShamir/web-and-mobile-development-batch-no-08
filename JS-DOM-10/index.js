
const heading = document.getElementById("heading");
const para = document.getElementsByClassName("para")
// const para = document.querySelector(".para")
// const para = document.querySelectorAll(".para")
// const img = document.getElementsByTagName('img');
// const firstImg = img[0];
// heading.textContent = "This is Dynamic Heading";
// heading.innerHTML = "<b>Bold text!</b>";
// heading.style.backgroundColor = "rgba(219, 19, 19, 0.93)"
// console.log(heading)
// console.log(para);
// firstImg.getAttribute("src")
// firstImg.setAttribute('src', './img/dog.jpg')
// firstImg.setAttribute('alt', 'Dog Image')
// firstImg.setAttribute('width', '200')

// const header = {
//     textContent: "Hello world",
//     innerHTML: "",
//     style: {
//         background: "red",
//         color: "yeelo",
//         Font: "12px"
//     },
// }

// const paragraph = [
//     {
//         textContent: "Hello world",
//         innerHTML: "",
//         style: {
//             background: "red",
//             color: "yeelo",
//             Font: "12px"
//         },
//     },
//     {
//         textContent: "Hello world",
//         innerHTML: "",
//         style: {
//             background: "red",
//             color: "yeelo",
//             Font: "12px",
//         },
//     }
// ّ]

// for (let index = 0; index < paragraph.length; index++) {
//     const element = array[index];
//     element.style.color="red"
// }

// let newPara = document.createElement("p");
// newPara.textContent = "I'm Generating Dynamically"
// document.body.appendChild(newPara)
// document.body.prepend(newPara)

// heading.remove();


// const list = document.createElement('ul');

// document.body.appendChild(list)


// for (let index = 0; index < 10; index++) {
//     const item = document.createElement('li');
//     item.textContent = "List" + index
//     list.append(item)
// }


const sections = document.querySelectorAll('section');

const sec3 = sections[2]

const sec3Ul = sec3.firstElementChild;

const item222 = document.createElement('li');
console.log(item222)

sec3Ul.appendChild(item222)