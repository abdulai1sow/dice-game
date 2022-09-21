
        //================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

//=========my work===========
// function rollDice() {
//   let diceRoll = Math.floor(Math.random() * 6) + 1
//   let diceRoll2 = Math.floor(Math.random() * 6) + 1
//   let player1 = diceRoll
//   let comp = diceRoll2
//   let winner = player1 > comp ? 'human win' : 'comp win'
//   return [player1, comp]
// }
// const play = rollDice
// // rollDice()

// console.log(play);
// console.log(player1,comp);
// console.log(player1,comp);


//========teacher work=======
const rollDice = () => {
  const player = Math.ceil(Math.random() * 6)
  const computer = Math.ceil(Math.random() * 6)
  // player > computer ? 'PLAYER WINS' : 'COMPUTER WINS'
  let winner = ''
  if (player > computer) {
    winner ='player wins'
  } else if (player === computer) {
    winner='tied'
  } else {
    winner='computer wins'
  }
  return[player,computer, winner]
  // console.log(winner);
}
rollDice()

// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]


// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.

///===========my work================
// const  display = document.querySelector('#play-game')

// function displayScore() {
//   const display = document.querySelector('#play-game')
//   display.createElement('div').append
//   console.log(display);
// }

// playBtn.addEventListener('click',displayScore)
//==============================================

//==================techer work=================
// //div.innerHTML = `
//   Computer Score: ${ results[1] },
//   player Score: ${ results[0] },
// Winner: ${ results[1] }`
//  const playBtn 
const displayScore = () => {
  const results = rollDice()
  const div = document.createElement('div')
  div.innerHTML = `<p>Computer Score: ${results[1]},</p>
        <p>Player Score: ${results[0]},</p><p>Winner: ${results[2]}</p>`
  const winnerDiv = document.querySelector('#winner')
  winnerDiv.appendChild(div)
  console.log(div);
}

const resetBtn = document.querySelector('#reset')
const playGameBtn = document.querySelector('#play-game')

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)
const resetGame = () => {
  document.querySelector('#winner').firstElementChild.remove()
}

// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

//=============my work=======
// resetBtn.addEventListener('click', resetGame)
// playGame.addEventListener('click', displayScore)

//=============teacher work
resetBtn.addEventListener('click', resetGame)
playGameBtn.addEventListener('click', displayScore)


// ===== Now let's host this game in GITHUB PAGES and style it !!!