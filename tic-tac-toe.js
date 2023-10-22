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

    
   const squares = document.querySelectorAll('.square');
   var check = 0

    squares.forEach(square => {
        square.addEventListener('mouseover', function () {
            this.classList.add('hover');
        });

        square.addEventListener('mouseout', function () {
            this.classList.remove('hover');
        });

        square.addEventListener('click', function () {
            if (!this.textContent)  {
                this.classList.add(player) 
                this.textContent = player
                

                if (player == 'X'){
                    player = 'O';

                }
                else
                {
                    player = 'X'
                }
            }
        });
    });


});
