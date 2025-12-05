const heading = document.getElementById("heading");
// const para = document.getElementsByClassName("para")
// const para = document.querySelector(".para")
const para = document.querySelectorAll(".para")
const img = document.getElementsByTagName('img');
const firstImg = img[0];
heading.textContent = "This is Dynamic Heading";
heading.innerHTML = "<b>Bold text!</b>";
heading.style.backgroundColor = "rgba(219, 19, 19, 0.93)"
console.log(heading)
console.log(para);
// firstImg.getAttribute("src")
firstImg.setAttribute('src', './img/dog.jpg')
firstImg.setAttribute('alt', 'Dog Image')
firstImg.setAttribute('width', '200')




