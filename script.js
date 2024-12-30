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
            let containerSize = bigDiv.height;
            let littleDivWidth = containerSize/parseInt(sizeSelected);
            littleDiv = document.createElement("div");
            littleDiv.classList.add('littleDiv')
            littleDiv.style.width = littleDivWidth;
            littleDiv.style.height = littleDivWidth;
            divRow.appendChild(littleDiv);
        }
    }
}

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

gridSizePrompt.addEventListener('click', getGridSize);


//ADDING HOVER ELEMENTS 
const randColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

console.log(randColor());