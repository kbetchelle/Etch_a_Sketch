const bigDiv = document.querySelector("#gridContainer");
const gridSizePrompt = document.querySelector("#sizeInput");

gridSizePrompt.addEventListener('click', () => {
    let sizeSelected = prompt("Enter a number between 1-100: ")
    if (sizeSelected > 100 || sizeSelected <1) {
        alert("ERROR.Please enter a number between 1 and 100")
    console.log(sizeSelected)
    }
});


function makeGrid (sizeSelected) {
    if (bigDiv.hasChildNodes()) {
        bigDiv.removeChild(bigDiv.childNodes[0]);
    }
    for (i=0; i < sizeSelected; i ++) {
        const divRow = document.createElement("div");
        divRow.classList.add("divRow");
        bigDiv.appendChild(divRow);

        for (i = 0; i < sizeSelected; i++){
            let littleDivWidth = 550/parseInt(sizeSelected)
            littleDiv = document.createElement("div");
            littleDiv.style.width = littleDivWidth;
            littleDiv.style.height = littleDivWidth;
            divRow.appendChild(littleDiv);
        }
    }

    //uses sizeSelected to create divs
    //has a mouseenters event listener to change the colors of the divs
}

makeGrid(4);

const randColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

console.log(randColor());