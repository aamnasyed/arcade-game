let gameBoard = document.getElementById("gameBoard")
// do we don't want to change this varaible later on? maybe... 

// GAME STATE 

let boardState = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
]

let currentPlayer = "x"


// use loops for Xs and Os

// Function on how to win the game
//What we want our cells to do when they're clicked 
function clickCellFunction (event) {
    console.log(event)
    // mark x or o somewhere
    console.log(event.target)
    event.target.textContent=currentPlayer 
    // event.trget = 
    //update javaScript state through our gameBoard

    // reflect change on game board 
    //switch turns 
    if (currentPlayer == "x") {
      currentPlayer = "o"  
    } else {
        currentPlayer = "x"
    }

}
//BUILDING GAME BOARD -CALLBACK FUNCTION

function buildBoard () {
    console.log("test")
//make cell for each undefined in the board state 
    for (let index=0; index < boardState.length; index++){
        let currentRow= boardState[index]
        let htmlRow= document.createElement("div")
        htmlRow.className="row" //reassingingg class name (line 31 as well)
        for (let nestedIndex=0; nestedIndex < currentRow.length; nestedIndex++){
            let currentElement = currentRow[nestedIndex]
            let currentCell = document.createElement("div")
            currentCell.className="cell"
            currentCell.addEventListener("click", clickCellFunction)
            htmlRow.appendChild(currentCell)
            console.log(currentCell)
        }
        gameBoard.appendChild(htmlRow)
    }

}
window.addEventListener("DOMContentLoaded", buildBoard)

// //HOW TO SWAP PLAYER
// if (currentPlayer == "x") {
//     event.target.textContent = currentPlayer
//     currentPlayer = "x"
// } else {
//     event.target.textContent = currentPlayer 
//     currentPlayer ="o"
// }




// let boardState = [
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined],
// ]




// Win Conditions - How do we confirm the game is over 

// if (boardState[0][0] == "x" && boardState [0][1] === "x" && boardState [0][2] ==="x") {
// if (boardState [0][0] =="x" && boardState [1][0] === "x" && boardState [2][0] === "x") {
//     if (boardState [0][0] ==="x" && boardState [1][1] === "x" && boardState) {
// //         return "X Wins!"
    
//     }
// }
// console.log(boardState)

if (!boardState.includes(undefined)) {
    let message = document.createElement("p")
    message.textContent = "Game Over"
    document.getElementsByTagName("body")[0].appendChild(message)
}


