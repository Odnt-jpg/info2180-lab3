document.addEventListener('DOMContentLoaded', function () {
    const gameboard = document.querySelector("#board");
    const startCells = ["", "", "", "", "", "", "", "", ""];
    let player = 'X';
    const display = document.querySelector('#status');
    const newGameButton = document.querySelector('.btn');
    let boardState = Array.from({ length: startCells.length });

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

    squares.forEach((square, index) => {
        square.addEventListener('mouseover', function () {
            this.classList.add('hover'); 
        });

        square.addEventListener('mouseout', function () {
            this.classList.remove('hover');
        });

        square.addEventListener('click', function () {
            if (!this.textContent)  {
                this.classList.add(player);
                this.textContent = player;
                boardState[index] = player;
                const winner = checkWinner(player);
                console.log(winner)
                if (winner) {
                    console.log(winner)
                    console.log(`Congratulations!${player} wins!`);
                } else {
                    console.log("No winner yet.");
                    }
                

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
    function checkWinner(currentClass) {
      
        const WINNING_COMBINATIONS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (const i of WINNING_COMBINATIONS) {
            const [a, b, c] = i;
    
            console.log(`Checking combination: ${boardState[a]}, ${boardState[b]}, ${boardState[c]}`);
    
            if (
                boardState[a] === currentClass &&
                boardState[b] === currentClass &&
                boardState[c] === currentClass
            ) {
                console.log(`Winner found at combination: ${boardState[a]}, ${boardState[b]}, ${boardState[c]}`);
                return true; 
            }
        }
    
       
    
        return false;
    }
    

    
   
    

    newGameButton.addEventListener('click', function(){
        resetGame();
    })
    
    

    function resetGame() {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O'); 
        });
        player = 'X'
        display.textContent = "Move your mouse over a square and click to play an X or an O."
    }


});
