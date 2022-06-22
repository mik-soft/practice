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
console.log('------+------+-------')
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
    while (true) {        
        let square = prompt(`Choose a Square: ${emptySquares.join(', ')}`)        
        board[square] = 'X'
        return board
    }
}


function computerChoosesSquare(board){
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ')
    while (true) {
        let rand = Math.floor(Math.random(emptySquares.length) + 1)
        board[emptySquares[rand]] = 'O'
        return board
    }
}

let simulatedComputerLoss = []

function winner(board) {
    let playerSquares = Object.keys(board).filter(key => board[key] === 'X')
    let computerSquares = Object.keys(board).filter(key => board[key] === 'O')
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
            console.log('Tie')
            return true            
        } else if(playerWin === true) {
            console.log('You win!')
            //simulatedComputerLoss.push(winCases[i])
            return true            
        } else if(computerWin === true) {
            console.log('You lose')            
            return true            
        } else {
            
        }
    }
    return false    
}

function simWinner(board) {
    let playerSquares = Object.keys(board).filter(key => board[key] === 'X')
    let computerSquares = Object.keys(board).filter(key => board[key] === 'O')
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
            console.log('Tie')
            return true            
        } else if(playerWin === true) {
            console.log('You win!')
            simulatedComputerLoss.push(winCases[i])
            return true            
        } else if(computerWin === true) {
            console.log('You lose')            
            return true            
        } else {
            
        }
    }
    return false    
}

function possiblePlayerChoices(board) {
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ')
    while (true) {
        let rand = Math.floor(Math.random(emptySquares.length) + 1)
        board[emptySquares[rand]] = 'X'
        return board
    }
}

function calcBestChoices(board) {
    let worstChoices = []
    let simulatedBoard = board
    do {    
    simulatedBoard = possiblePlayerChoices(simulatedBoard)
    simulatedBoard = computerChoosesSquare(simulatedBoard)
    } while(simWinner(simulatedBoard) === false)
    return simulatedComputerLoss
}

let cont = ''

do {
let board = initializeBoard();
    do {
    displayBoard(board);
    board = playerChoosesSquare(board)
    board = computerChoosesSquare(board)
    let fakeBoard = Object.create(board)
    console.log(calcBestChoices(fakeBoard))
    } while(winner(board) === false)
    displayBoard(board)
    console.log(winner(board))    
    cont = prompt('Play again? (y/n): ')
    
}while(cont === 'y')