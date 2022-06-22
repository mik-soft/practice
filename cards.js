  let gameOver = false
  let execAcc = 0
  function newDeck()
  {
      const nums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
      const suits = ['heart', 'spade', 'club', 'diamond']
      
      let cards = []
      for(let i = 0; i < nums.length; i++)
      {
          for(let j = 0; j < suits.length; j++)
          {
              cards.push(nums[i] + suits[j])
          }
      }
      execAcc++
      return cards
  }
let count = 0;
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
      execAcc++
  }

  return array;
}

function total(cards) {
  let values = cards.map(card => card)
  let sum = 0
  let aces = 0

  for(let i = 0; i < values.length; i++)
  {
    if(values[i] === 'A') {
      sum += 11
      aces++
    }
    else if(['J', 'Q', 'K', '1'].includes(values[i])) {
      sum += 10
    }
    else {
      sum += Number(values[i])
    }
    execAcc++
  }

  for(let i = 0; i < aces; i++)
  {
    if(sum > 21) {
      sum -= 10
    }
    execAcc++
  }
  return sum
}

function hideCards(cards) {
  let temp = cards
  let hidden = temp
  for(let i = 0; i < hidden.length; i++)
  {
    if(i > 0) {
      hidden[i] = '?'
    }
    execAcc++
  }
  return hidden
}


function hitOrStay(cards, playerCards, dealerCards) {
        const rl = require('readline-sync');
        let playerChoice = rl.question('Hit or stay?: ')
        execAcc++
        //playerChoice = answer;
          if(playerChoice === 'hit')
          {
            playerCards.hand.push(cards.pop())
            playerCards.value.push(playerCards.hand[playerCards.hand.length - 1].charAt(0))
            playerCards.score = total(playerCards.value)
            
            console.log('Your hand is: ' + playerCards.hand)
            console.log('Your score is: ' + playerCards.score + '\n')
    
            if(playerCards.score > 21)
            {
              console.log('Dealer hand is: ' + dealerCards.hand)
              console.log('Dealer score is: ' + dealerCards.score + '\n')              
              console.log('You bust') 
              console.log(execAcc)
              gameOver = true              
              //return 'Game over'
              process.exit             
            }
            if(dealerCards.score < 17)
            {
              dealerCards.hand.push(cards.pop())
              dealerCards.value.push(dealerCards.hand[dealerCards.hand.length - 1].charAt(0))
              dealerCards.score = total(dealerCards.value)
              

              //console.log('Dealer hand is: ' + hideCards(dealerCards.hand) + '\n')
              //console.log('Dealer score is: ' + dealerCards.score)

              
            
            }
            if(dealerCards.score === 21){
              console.log('Dealer hand is: ' + dealerCards.hand + '\n')
              console.log('Dealer wins')
              console.log(execAcc)
              gameOver = true  
              //return 'Game over'
            process.exit
            }
            else if(dealerCards.score > 21) {
              console.log('Dealer hand is: ' + dealerCards.hand + '\n')
              console.log('Dealer busts, you win')
              console.log(execAcc)
              gameOver = true  
              //return 'Game over'
            process.exit
            } else {            
              //console.log('Dealer hand is: ' + hideCards(dealerCards.hand) + '\n')
            }
          }
          else if(playerChoice === 'stay') {
            console.log('Your hand is: ' + playerCards.hand)
            console.log('Your score is: ' + playerCards.score + '\n')
            while(dealerCards.score < 17)
            {
              dealerCards.hand.push(cards.pop())
              dealerCards.value.push(dealerCards.hand[dealerCards.hand.length - 1].charAt(0))
              dealerCards.score = total(dealerCards.value)                      
            }     
            if(dealerCards.score === 21 && playerCards.score != 21){
              console.log('Dealer hand is: ' + dealerCards.hand)
              console.log('Dealer score is: ' + dealerCards.score + '\n')
              console.log('Dealer wins')
              console.log(execAcc)
              gameOver = true  
              //return 'Game over'
              process.exit
            }
            else if(dealerCards.score > 21) {
              console.log('Dealer hand is: ' + dealerCards.hand)
              console.log('Dealer score is: ' + dealerCards.score + '\n')
              console.log('Dealer busts, you win')
              console.log(execAcc)
              gameOver = true  
              //return 'Game over'
              process.exit
            }  else {
              //console.log('Dealer hand is: ' + dealerCards.hand)
              //console.log('Dealer score is: ' + dealerCards.score + '\n')
              if(playerCards.score > dealerCards.score) {
                console.log('Dealer hand is: ' + dealerCards.hand + '\n')
                console.log('You win!')
                console.log(execAcc)
                gameOver = true  
                //return 'Game over'
              process.exit
              return
              } else if(dealerCards.score > playerCards.score) {
                console.log('Dealer hand is: ' + dealerCards.hand + '\n')
                console.log('Dealer wins')
                console.log(execAcc)
                gameOver = true  
                //return 'Game over'
                process.exit
                return
              } else {
                console.log('Dealer hand is: ' + dealerCards.hand + '\n')
                console.log('Tie')
                console.log(execAcc)
                gameOver = true  
                process.exit
                return
              }
              //return 'Game over'
              process.exit
            }
            
          }
          //rl.close
          //return
          process.exit
        return
        
}



function game() 
{
      let deck = shuffle(newDeck())
      let player = {hand: [], value: [], score: 0}
      let dealer = {hand: [], value: [], score: 0}      

      for(let i = 0; i < 2; i++)
      {
        player.hand.push(deck.pop())
        player.value.push(player.hand[i].charAt(0))
        player.score = total(player.value)
        dealer.hand.push(deck.pop())
        dealer.value.push(dealer.hand[i].charAt(0))
        dealer.score = total(dealer.value)
        execAcc++
      }

      console.log('Your hand is: ' + player.hand)
      console.log('Your score is: ' + player.score + '\n')

      console.log('Dealer hand is: ' + dealer.hand[0] + ', ?' + '\n')
      //console.log('Dealer score is: ' + dealer.score)

      if(player.score === 21)
      {
        console.log('You win')
        console.log(execAcc)
        process.exit
        return
      }
      else if(dealer.score === 21) {
        console.log('Dealer wins')
        console.log(execAcc)
        process.exit
        return
      } else if(player.score > 21)
      {
        console.log('You bust')
        process.exit
        return
      } else if(dealer.score > 21) {
        console.log('Dealer busts')
        console.log(execAcc)      
        process.exit 
        return
      }else {}    
  
      while(gameOver === false)
      {
        hitOrStay(deck, player, dealer)
        execAcc++
      } 
      
      process.exit      
}

 
//console.log(newDeck())
//console.log(shuffle(newDeck()))
//console.log(count)

console.log(game())