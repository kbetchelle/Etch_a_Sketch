const bigDiv = document.querySelector("#gridContainer")
const gridSizePrompt = document.querySelector("#sizeInput")

gridSizePrompt.addEventListener('click', () => {
    let sizeSelected = prompt("Enter a number between 1-100: ")
    if (sizeSelected > 100 || sizeSelected <1) {
        alert("ERROR.Please enter a number between 1 and 100")
    }
        

})

