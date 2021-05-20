let divRow;
let divColumn;
const mainDiv = document.getElementById('canvas')

// Create a grid of 16 rows and divs

function createGrid() {
    let i = 0;
    createRowDiv:
    for (i; i < 17; i++) {
        divRow = document.createElement('div');
        divRow.classList.add(`divRow${i}`);
        mainDiv.appendChild(divRow);
        for (i; i < 17; i++) {
            divColumn = document.createElement('div');
            divColumn.classList.add(`divColumn${i}`);
            divRow.appendChild(divColumn);
            continue createRowDiv;
        }
    }
}