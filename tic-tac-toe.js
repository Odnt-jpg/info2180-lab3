document.addEventListener('DOMContentLoaded', function () {
    const gameboard = document.querySelector("#board");
    const startCells = ["", "", "", "", "", "", "", "", ""];
    let player = 'X';

    function createBoard() {
        startCells.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('square');
            gameboard.appendChild(cellElement);
        });
    }

    createBoard();

    

});
