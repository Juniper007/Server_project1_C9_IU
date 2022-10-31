import express from 'express'

const app = express()
app.use(express.json())

const PORT = 4000

let player1Name
let player2Name
let player1Choice
let player2Choice
let player1Score = 0
let player2Score = 0
let winnerName

function compare(player1Choice, player2Choice) {
  player1Choice = player1Choice //.toLowerCase()
  player2Choice = player2Choice //.toLowerCase()
  if (player1Choice === 'rock') {
    if (player2Choice === 'rock') {
      return 'Draw'
    } else if (player2Choice === 'paper') {
      return 'player2'
    } else {
      return 'player1'
    }
  } else if (player1Choice === 'paper') {
    if (player2Choice === 'rock') {
      return 'player1'
    } else if (player2Choice === 'paper') {
      return 'Draw'
    } else {
      return 'player2'
    }
  } else if (player1Choice === 'scissors') {
    if (player2Choice === 'rock') {
      return 'player2'
    } else if (player2Choice === 'paper') {
      return 'player1'
    } else {
      return 'Draw'
    }
  }
}

app.get('/welcome', (request, response) => {
  response.send('Welcome to rock, paper, scissors!\n\
Player 1: Enter your name')
})

app.post('/player1Name', (request, response) => {
  player1Name = request.body.name
  response.send(`Hello ${player1Name},\n\
 Player 2: Enter your name`)
})

app.post('/player2Name', (request, response) => {
  player2Name = request.body.name
  response.send(
    `Hello ${player2Name},\n\
    ${player1Name}: What is your choice? Rock, Paper, or Scissors?`,
  )
})

app.post('/player1Choice', (request, response) => {
  player1Choice = request.body.name
  response.send(`${player1Name} has decided.\n\
  ${player2Name} What is your choice? Rock, Paper, or Scissors?`)
})

app.post('/player2Choice', (request, response) => {
  player2Choice = request.body.name
  response.send(`${player2Name} has decided.\n\
  Now to find out who is the WINNER!!!....`)
})

app.get('/compare', (request, response) => {
  const result = compare(player1Choice, player2Choice)
  response.send(result)
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})

app.get('/result', (request, response) => {
  if (winnerName === 'player1Name') {
    player1Score = player1Score + 1
    winnerName = player1Name
    response.send(
      `The winner is ${winnerName}\n\nPlayer 1's Score: ${player1Score}\n\nPlayer 2's Score: ${player2Score}`,
    )
  } else if (winnerName === 'player2') {
    player2Score = player2Score + 1
    winnerName = player2Name
    response.send(
      `The winner is ${winnerName}\n\nPlayer 1's Score: ${player1Score}\n\nPlayer 2's Score: ${player2Score}`,
    )
  } else {
    response.send(`Draw, Please play again!`)
  }
})
