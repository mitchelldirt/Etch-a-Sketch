const form = document.getElementById('input');
form.addEventListener('submit', () => {
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
        alert('NOOOOOOOO');
        return;
    } else {
        // creates the actual grid layout with the .gridTemplateColumns/Rows property.
        let i = 1;
        const mainDiv = document.getElementById('canvas');
        mainDiv.style.gridTemplateColumns = 'repeat(i, 1fr)';
        mainDiv.style.gridTemplateRows = 'repeat(i, 1fr)';
        for (i; i < submittedNumber; i++) {
            mainDiv.style.gridColumnStart = i;
            mainDiv.style.gridColumnEnd = i;
            createColumn();
        }
    }
};

// creates each column. Puts a grid-item in each row of the column `i` and then iterates through to each column up to i.
function createColumn() {
    const inputBox = parseInt(document.getElementById('userInput').value);
    let i = 1;
    let submittedNumber = inputBox;
    for (i; i < submittedNumber; i++) {
        const mainDiv = document.getElementById('canvas');
        gridItem = document.createElement('div');
        gridItem.classList.add(`divItem${i}`);
        gridItem.classList.add('grid-item');
        gridItem.style.gridRowStart = i;
        gridItem.style.gridRowEnd = i;
        mainDiv.appendChild(gridItem);
    }
}
