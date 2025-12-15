// let parent = document.getElementById("parent");
// let grandparent = document.getElementById("grandparent");
// let child = document.getElementById("child");

// child.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("Child clicked");
// });

// parent.addEventListener("click", function (event) {
//     console.log("Parent clicked");
//     event.stopPropagation();
// });
// grandparent.addEventListener("click", function () {
//     console.log("grandparent clicked");
// });


const inp = document.getElementById('inp')

inp.addEventListener('change', function (e) {
    console.log(e.target.value)
})