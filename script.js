let divRow;
let divColumn;


// Create a grid of 16 rows and divs

function createGrid() {
    let i = 1;
    const mainDiv = document.getElementById('canvas');
    mainDiv.style.gridTemplateColumns = 'repeat(i, 1fr)';
    mainDiv.style.gridTemplateRows = 'repeat(i, 1fr)';
    createRowDiv:
    for (i; i < 17; i++) {
        divRow = document.createElement('div');
        divRow.classList.add(`divRow${i}`);
        divRow.classList.add('grid-item-row');
        //divRow.style.gridRowStart = i;
        //divRow.style.gridRowEnd = i;
        mainDiv.appendChild(divRow);
        for (i; i < 17; i++) {
            divColumn = document.createElement('div');
            divColumn.classList.add(`divColumn${i}`);
            divColumn.classList.add('grid-item-column');
            //divColumn.style.gridColumnStart = i;
            //divColumn.style.gridColumnEnd = i;
            mainDiv.appendChild(divColumn);
            continue createRowDiv;
        }
    }
}

// create 16 columns with 16 rows in each

// create separate for loop that adds 15 columns of divs to each `divrow${i}` and get rid of the createcolumn part of the above for loop
