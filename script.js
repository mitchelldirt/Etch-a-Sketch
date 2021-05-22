let divRow;
let divColumn;
let userInput;
const inputBox = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', () => {
    userInput = inputBox.innerText;
    createGrid(userInput);
})
function createGrid(userInput) {
    if (userInput != Number) {
        alert('Please enter a number!');
    } else if (userInput > 100) {
        alert('Please no more than 100 :(');
    }
    let i = 1;
    const mainDiv = document.getElementById('canvas');
    mainDiv.style.gridTemplateColumns = 'repeat(i, 1fr)';
    mainDiv.style.gridTemplateRows = 'repeat(i, 1fr)';
    for (i; i < userInput; i++) {
        mainDiv.style.gridColumnStart = i;
        mainDiv.style.gridColumnEnd = i;
        createColumn();
    }
}

function createColumn() {
    let i = 1;
    for (i; i < userInput; i++) {
        const mainDiv = document.getElementById('canvas');
        gridItem = document.createElement('div');
        gridItem.classList.add(`divItem${i}`);
        gridItem.classList.add('grid-item');
        gridItem.style.gridRowStart = i;
        gridItem.style.gridRowEnd = i;
        mainDiv.appendChild(gridItem);
    } 
}
// create 16 columns with 16 rows in each

// create separate for loop that adds 15 columns of divs to each `divrow${i}` and get rid of the createcolumn part of the above for loop
