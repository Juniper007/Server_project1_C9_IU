import express from 'express'
import rl from 'readline-sync'

const app = express()
app.use(express.json())

const PORT = 4000

let player1Name
let player2Name
let player1Choice
let player2Choice
let player1Score
let player2Score

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

app.get('/welcome', (req, res) => {
  res.send('Welcome to rock, paper, scissors!\n\
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

// app.post('/player1Choice', (request, response) => {
//   player1Choice = request.body.name
//   response.send(`${player1Name} has made there choice.\n\
//   ${player2Name} What is your choice? Rock, Paper, or Scissors?`)
// })

// app.post('/player2Choice', (request, response) => {
//   player2Choice = request.body.name
//   response.send(`${player2Name} has made there choice.\n\
//   Now to find out who is the WINNER!!!....`)
// })

// app.get('/compare', (request, response) => {
//   const result = compare(player1Choice, player2Choice)
//   response.send(result)
// })

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})
