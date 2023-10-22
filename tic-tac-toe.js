const gameboard = document.querySelector("#board")
const startCells = [
    "", "","","", "","","", "",""]


function createBoard(){
    startCells.forEach((cell,index) =>{
        const cellElement = document.createElement('div')
        cellElement.classList.add(square)
        gameboard.append*cellElement
    })
}