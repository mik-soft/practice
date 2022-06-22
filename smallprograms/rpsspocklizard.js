let rl = require('readline-sync')

let playerWin = false
let computerWin = false

function prompt(msg) {
  return rl.question(`=> ${msg}: `)
}

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    console.log(`You picked: ${choice.toUpperCase()}, Computer picked: ${computerChoice.toUpperCase()} \n You won the round! \n`)    
    playerWin = true
  } else if (choice === computerChoice) {
    console.log(`You picked: ${choice.toUpperCase()}, Computer picked: ${computerChoice.toUpperCase()} \n Tie \n`)
  } else {
    console.log(`You picked: ${choice.toUpperCase()}, Computer picked: ${computerChoice.toUpperCase()} \n 'Computer won the round \n`)
    computerWin = true
  }
}

function randomChoice() {
  let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  let randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

function endGameResults(p, c) {
  console.log(`Your score was: ${p}, Computer score was ${c} \n`)
  if(p > c) {
    console.log('You beat the computer!')
  } else if(c > p) {
    console.log('You lost')
  } else {
    console.log('Tie')
  }
}

function playerChoice() {
  let input = prompt('Rock, Paper, Scissors, Spock, or Lizard?')
  let abb = {r: 'rock', p: 'paper', l: 'lizard'}
  for(i in abb) {
    if(i === input) {
      return abb[i]
    }
  }

  if(input === 's') {
    let scsp = prompt('Scissors or Spock? (1 for Scissors or 2 for Spock): + \n')
    if(scsp === '1') {
      return 'scissors'
    } else if(scsp === '2') {
      return 'spock'
    }
  }
}

let playerScore = 0
let computerScore = 0

do {
  let choice = playerChoice()
  let computerChoice = randomChoice()
  displayWinner(choice, computerChoice)
  if(playerWin === true) {
    playerScore++
  } else if(computerWin === true) {
    computerScore++
  }
  playerWin = false
  computerWin = false
  //cont = prompt('Play again? (y/n): ')
} while(playerScore < 5 && computerScore < 5)

endGameResults(playerScore, computerScore)