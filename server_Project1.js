import express, { response } from 'express'
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
  player1Choice = player1Choice.toLowerCase()
  player2Choice = player2Choice.toLowerCase()
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

app.get('/welcome', (req, res) =>
  res.send('Welcome to rock, paper, scissors!\n\
Player 1: Enter your name'),
)

// app.post('/player1Name', (req, res) => {
//  player1Name = req.body.name;
//  response.send(`Hello ${player1Name},\n\
//  Player 2: Enter your name`)
// })

// app.post('/player2Name', (req, res) => {
//   player2Name = req.body.name;
//   response.send(`Hello ${player2Name},\n\
//   Player 1: What is your choice? Rock, Paper, or Scissors?`)
//  })

//  app.post('/player1Choice', (req, res) => {
//   player1Choice = req.body.name;
//   response.send(`Player 2: Enter your name`)
//  })

// app.listen(PORT, function () {
//   console.log(`listening on port ${PORT}`)
// })
