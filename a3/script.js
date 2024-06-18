/* The Cat */

const catBox = document.querySelector("#catbox1");
/* I chose hover over click because it allows users to interact quickly and effortlessly by simply moving their mouse. This makes the experience more intuitive and dynamic, providing instant feedback without requiring additional actions. Unlike click, which requires an extra action, hover navigation enhances usability and keeps the interaction smooth and engaging */
console.log(catBox);

const catImage = document.querySelector("#cat1");
console.log(catImage);

catBox.addEventListener("mouseover", showCat);
catBox.addEventListener("mouseout", hideCat);

function showCat() {
  catImage.classList.add("show");
}

function hideCat() {
  catImage.classList.remove("show");
}

/* The Dog */
const dogBox = document.querySelector("#dogbox1");
console.log(dogBox);

const dogImage = document.querySelector("#dog1");
console.log(dogImage);

dogBox.addEventListener("mouseover", showDog);
dogBox.addEventListener("mouseout", hideDog);

function showDog() {
  dogImage.classList.add("show1");
}

function hideDog() {
  dogImage.classList.remove("show1");
}
