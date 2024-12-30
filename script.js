const bigDiv = document.querySelector("#gridContainer");
const gridSizePrompt = document.querySelector("#sizeInput");

//CREATING GRID 
function makeGrid (sizeSelected) {
    if (bigDiv.hasChildNodes()) {
        bigDiv.removeChild(bigDiv.childNodes[0]);
    }
    for (let i = 0; i < sizeSelected; i ++) {
        divRow = document.createElement("div");
        divRow.classList.add("divRow");
        bigDiv.appendChild(divRow);

        for (let i = 0; i < sizeSelected; i++){
            littleDiv = document.createElement("div");
            littleDiv.classList.add('littleDiv')
            divRow.appendChild(littleDiv);
            littleDiv.addEventListener("mouseover", colorSquare);
        }
    };    
};

function getGridSize () {
    let sizeSelected = prompt("Enter a number between 1-100: ");
    if (sizeSelected > 100 || sizeSelected <1) {
        alert("ERROR.Please enter a number between 1 and 100");
    } else {
        if (bigDiv.hasChildNodes()){
            while (bigDiv.firstChild) {
                bigDiv.removeChild(bigDiv.firstChild)};
            makeGrid(sizeSelected); 
        } else {
            makeGrid(sizeSelected);
        }
    }
};

makeGrid(16);
gridSizePrompt.addEventListener('click', getGridSize);

//ADDING HOVER ELEMENT & COLOR FUNCTIONALITY 

function colorSquare() {
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
  }

function changeColor(choice) {
    color = choice
}

let color = 'gray'

function resetContainer() {
    let container = document.querySelector("#gridContainer");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "#f8f8ff"));
  }