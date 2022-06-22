let rl = require('readline-sync')

function prompt(msg) {
    let result = rl.question(`${msg} \n`)
    return result
}

function displayBoard(board) {
    console.log("")
console.log('      |      |')
console.log(`   ${board['1']}  |   ${board['2']}  |    ${board['3']}  `)
console.log('      |      |')
console.log('------+------+-------')
console.log('      |      |')
console.log(`   ${board['4']}  |   ${board['5']}  |    ${board['6']}  `)
console.log('      |      |')
console.log('------+------+-------')
console.log('      |      |')
console.log(`   ${board['7']}  |   ${board['8']}  |    ${board['9']}  `)
console.log('      |      |')
console.log('')
console.log('\n')
}

function initializeBoard() {
    let board = {}
    for(let square = 1; square <=9; square +=1) {
        board[String(square)] = ' '
    }
    return board
}

function playerChoosesSquare(board) {
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ')          
    let square = prompt(`Choose a Square: ${emptySquares.join(', ')}`)        
    board[square] = 'X'
    return board    
}

function computerChoosesSquare(board){
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ')    
    let rand = Math.floor(Math.random(emptySquares.length) + 1)
    board[emptySquares[rand]] = 'O'
    return board    
}

let gameResult = ''

function winner(board) {
    let playerSquares = Object.keys(board).filter(key => board[key] === 'X')
    let computerSquares = Object.keys(board).filter(key => board[key] === 'O')
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ')
    let winCases = []
    let playerWin = false
    let computerWin = false 
    
    winCases.push(['1', '2', '3']) 
    winCases.push(['4', '5', '6'])
    winCases.push(['7', '8', '9'])
    winCases.push(['1', '4', '7'])
    winCases.push(['2', '5', '8'])
    winCases.push(['3', '6', '9'])
    winCases.push(['1', '5', '9'])
    winCases.push(['3', '5', '7'])
    
    for(let i = 0; i < winCases.length; i++)
    {                  
        if(playerSquares.includes(winCases[i][0]) && playerSquares.includes(winCases[i][1]) && playerSquares.includes(winCases[i][2]))
        {
            playerWin = true            
        }
        
        if(computerSquares.includes(winCases[i][0]) && computerSquares.includes(winCases[i][1]) && computerSquares.includes(winCases[i][2])) {
            computerWin = true            
        }

        if(playerWin === true && computerWin === true) {
            gameResult = 'Tie'
            return true            
        } else if(playerWin === true) {
            gameResult = 'You win!'            
            return true                        
        } else if(computerWin === true) {
            gameResult = 'You lose'            
            return true                        
        }
        
        
    }

    if((playerWin === false && computerWin === false) && emptySquares.length === 0) {
        gameResult = 'Tie'
        return true
    }
    return false    
}

let cont = ''

do {
let board = initializeBoard();
    do {
    displayBoard(board);
    board = playerChoosesSquare(board)
    board = computerChoosesSquare(board)    
    } while(winner(board) === false)
    displayBoard(board)
    console.log(gameResult)    
    cont = prompt('Play again? (y/n): ')    
}while(cont === 'y')