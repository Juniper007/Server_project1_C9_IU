import express from 'express'
import rl from 'readline-sync'

const app = express()
const PORT = 4000

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)

  // app.get('/', (req, res) => res.send('Hello World!'))
  // app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  //})

  // app.get('/start_dogLife', (req, res) => {
  //   res.send(player_dogName_dogLife())
})
