const myButton = document.querySelector("button");
const myBox = document.querySelector(".box");
const colors = ["pink", "purple", "blue", "orange"];


myButton.addEventListener("click", changecolor);

function changecolor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    myBox.style.backgroundColor = colors[randomIndex];
    console.log(randomIndex);

}