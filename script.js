
let hasItBeenRan = 0
const form = document.getElementById('input');
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid);
window.onload = defaultGrid();


// Makes sure the page starts with a 16 x16
function defaultGrid() {
    const sliderBar = document.getElementById('userInput');
    sliderBar.value = 16;
    createGrid(16);
}

form.addEventListener('submit', (e) => {
    // Prevents the submit button from refreshing the page.
    e.preventDefault();

    // checks if there already is a grid and then deletes it to make room for the new one if there is.
    if (hasItBeenRan === 1) {
        hasItBeenRan = 0;
        resetGrid()
    }

    // Grabs the submitted number and uses that in the createGrid function.
    const inputBox = parseInt(document.getElementById('userInput').value);
    createGrid(inputBox);
    return;
});

// Creates the grid that the grid-items will fit into.
function createGrid(submittedNumber) {
    // verifies that a number between 1 and 100 was entered. Breaks out of function if not the case and alerts user.
    if (submittedNumber > 100 || submittedNumber < 1) {
        alert('Please enter a valid number!');
        return;
    } else if (submittedNumber === null || submittedNumber === NaN || submittedNumber === '' || submittedNumber === 0) {
        alert('NOOOOOOOO!');
        return;
    } else {
        // creates the actual grid layout with the .gridTemplateColumns/Rows property.
        let i = 0;
        const mainDiv = document.getElementById('canvas');
        mainDiv.style.gridTemplateColumns = 'repeat(i, 1fr)';
        mainDiv.style.gridTemplateRows = 'repeat(i, 1fr)';
        for (i; i < submittedNumber; i++) {
            mainDiv.style.gridColumnStart = i;
            mainDiv.style.gridColumnEnd = i;
            createColumn();
        }
        // This is for verification in the event handler for the form variable. It lets the program know that the above has been ran before.
        hasItBeenRan = 1;
    }
};

// creates each column. Puts a grid-item in each row of the column `i` and then iterates through to each column up to i.
function createColumn() {
    const inputBox = parseInt(document.getElementById('userInput').value);
    let i = 0;
    let submittedNumber = inputBox;
    for (i; i < submittedNumber; i++) {
        const mainDiv = document.getElementById('canvas');
        gridItem = document.createElement('div');
        gridItem.classList.add(`divItem${i}`);
        gridItem.classList.add('grid-item');
        gridItem.style.gridRowStart = i;
        gridItem.style.gridRowEnd = i;
        gridItem.addEventListener('mouseover', changeBackgroundColor);
        mainDiv.appendChild(gridItem);
    }
}

// resets the grid by removing all HTML from the mainDiv element with ID='canvas'.
function resetGrid() {
    const mainDiv = document.getElementById('canvas');
    mainDiv.innerHTML = '';
}

function changeBackgroundColor(e) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}